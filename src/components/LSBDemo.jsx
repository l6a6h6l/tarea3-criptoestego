import { useEffect, useMemo, useState } from 'react'
import { Sparkles, RefreshCw, Play, Eye, EyeOff, Info } from 'lucide-react'

// ----------------------------------------------------------------------------
// Utilidades binarias
// ----------------------------------------------------------------------------
function textToBits(text) {
  const bytes = new TextEncoder().encode(text)
  const bits = []
  for (const b of bytes) {
    for (let i = 7; i >= 0; i--) bits.push((b >> i) & 1)
  }
  return bits
}

function randomGrid(w, h) {
  // Genera pixeles RGB pseudoaleatorios pero con tonos coherentes
  // (no usamos crypto.getRandomValues a proposito: queremos resultados estables visualmente)
  const arr = []
  for (let i = 0; i < w * h; i++) {
    arr.push({
      r: Math.floor(60 + Math.random() * 180),
      g: Math.floor(60 + Math.random() * 180),
      b: Math.floor(60 + Math.random() * 180)
    })
  }
  return arr
}

function applyLSB(pixels, bits) {
  // Embebe los bits modificando el LSB de cada componente RGB en orden.
  const out = pixels.map((p) => ({ ...p, changed: false, origR: p.r, origG: p.g, origB: p.b }))
  let bi = 0
  for (let i = 0; i < out.length && bi < bits.length; i++) {
    const px = out[i]
    let ch = false
    for (const ch_ of ['r', 'g', 'b']) {
      if (bi >= bits.length) break
      const bit = bits[bi++]
      const before = px[ch_]
      const after = (before & 0xfe) | bit
      if (after !== before) ch = true
      px[ch_] = after
    }
    if (ch) px.changed = true
  }
  return out
}

function bin8(n) {
  return n.toString(2).padStart(8, '0')
}

function rgbCss(p) {
  return `rgb(${p.r}, ${p.g}, ${p.b})`
}

const GRID_W = 16
const GRID_H = 8
const MAX_CHARS = 16

export default function LSBDemo() {
  const [text, setText] = useState('macs')
  const [pixels, setPixels] = useState(() => randomGrid(GRID_W, GRID_H))
  const [embedded, setEmbedded] = useState(null)
  const [showChanged, setShowChanged] = useState(true)

  // bits del mensaje (UTF-8)
  const bits = useMemo(() => textToBits(text.slice(0, MAX_CHARS)), [text])
  const capacityBits = GRID_W * GRID_H * 3
  const usedPct = Math.min(100, Math.round((bits.length / capacityBits) * 100))

  // Pre-calcula resultado al cambiar texto o pixeles
  useEffect(() => {
    setEmbedded(applyLSB(pixels, bits))
  }, [pixels, bits])

  // Metricas simuladas: por cada componente cambiado, el delta es de 1 sobre 255
  const metrics = useMemo(() => {
    if (!embedded) return null
    let changedComponents = 0
    let totalComponents = embedded.length * 3
    let sumSqError = 0
    for (const p of embedded) {
      const dR = p.r - p.origR
      const dG = p.g - p.origG
      const dB = p.b - p.origB
      if (dR) changedComponents++
      if (dG) changedComponents++
      if (dB) changedComponents++
      sumSqError += dR * dR + dG * dG + dB * dB
    }
    const mse = sumSqError / totalComponents
    const psnr = mse === 0 ? Infinity : 10 * Math.log10((255 * 255) / mse)
    return {
      changedComponents,
      totalComponents,
      mse: mse.toFixed(4),
      psnr: psnr === Infinity ? 'Infinito' : psnr.toFixed(2),
      bpp: (bits.length / (GRID_W * GRID_H)).toFixed(3),
      usedPct
    }
  }, [embedded, bits.length, usedPct])

  const regenerate = () => setPixels(randomGrid(GRID_W, GRID_H))

  // Toma las primeras 6 muestras de pixeles modificados para la tabla
  const sampleChanges = useMemo(() => {
    if (!embedded) return []
    return embedded
      .map((p, i) => ({ ...p, idx: i }))
      .filter((p) => p.changed)
      .slice(0, 6)
  }, [embedded])

  return (
    <section id="demo" className="section">
      <header className="reveal mb-8 max-w-3xl">
        <p className="kicker mb-2 flex items-center gap-2">
          <Sparkles size={11} /> Demo interactivo
        </p>
        <h2 className="h-section mb-4">
          Esteganografía LSB <span className="gradient-text">en vivo</span>
        </h2>
        <p className="text-slate-400 text-lg">
          Escribí un mensaje corto y observá cómo se altera el bit menos
          significativo de cada componente RGB. El cambio (1 sobre 256
          niveles) es imperceptible al ojo humano pero recuperable bit a bit.
        </p>
      </header>

      <div className="reveal grid lg:grid-cols-3 gap-6">
        {/* Panel de control */}
        <div className="glass rounded-2xl p-5 space-y-4">
          <label className="block">
            <span className="kicker mb-2 block">Mensaje secreto</span>
            <input
              type="text"
              value={text}
              maxLength={MAX_CHARS}
              onChange={(e) => setText(e.target.value)}
              placeholder="ej: macs"
              className="w-full px-3 py-2.5 rounded-lg bg-slate-950 border border-slate-700 focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/40 outline-none font-mono text-cyan-100"
            />
            <span className="text-[11px] text-slate-500 font-mono">
              {text.length}/{MAX_CHARS} chars - {bits.length} bits
            </span>
          </label>

          <div>
            <span className="kicker mb-2 block">Representación binaria</span>
            <div className="font-mono text-[11px] leading-relaxed text-cyan-300 bg-slate-950 border border-slate-800 rounded-lg p-3 max-h-28 overflow-auto break-words">
              {bits.length === 0 ? (
                <span className="text-slate-600">(vacio)</span>
              ) : (
                bits.map((b, i) => (
                  <span key={i} className={b ? 'text-cyan-300' : 'text-slate-500'}>
                    {b}
                    {(i + 1) % 8 === 0 ? ' ' : ''}
                  </span>
                ))
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <button onClick={regenerate} className="btn-ghost text-sm">
              <RefreshCw size={14} /> Nuevo cover
            </button>
            <button
              onClick={() => setShowChanged((v) => !v)}
              className="btn-ghost text-sm"
              title="Resaltar pixeles modificados"
            >
              {showChanged ? <EyeOff size={14} /> : <Eye size={14} />}
              {showChanged ? 'Ocultar diff' : 'Mostrar diff'}
            </button>
          </div>

          {/* Metricas */}
          {metrics && (
            <div className="border-t border-slate-800 pt-4 space-y-2">
              <p className="kicker mb-1">Métricas</p>
              <Metric label="PSNR" value={`${metrics.psnr} dB`} hint="Calidad visual" color="text-green-300" />
              <Metric label="MSE" value={metrics.mse} hint="Error cuadrático medio" color="text-cyan-300" />
              <Metric
                label="Capacidad usada"
                value={`${metrics.usedPct}%`}
                hint={`${bits.length} / ${capacityBits} bits`}
                color="text-purple-300"
              />
              <Metric label="bpp" value={metrics.bpp} hint="Bits per pixel" color="text-cyan-300" />
              <Metric
                label="Componentes modificados"
                value={`${metrics.changedComponents} / ${metrics.totalComponents}`}
                hint={`${((metrics.changedComponents / metrics.totalComponents) * 100).toFixed(1)}%`}
                color="text-amber-300"
              />
            </div>
          )}
        </div>

        {/* Imagenes lado a lado */}
        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
          <ImageBox title="Cover original" pixels={pixels} highlight={false} />
          <ImageBox
            title="Stego (con LSB modificado)"
            pixels={embedded || pixels}
            highlight={showChanged}
            scanline
          />

          {/* Tabla de cambios */}
          <div className="sm:col-span-2 glass rounded-2xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <Play size={14} className="text-cyan-400" />
              <p className="kicker">Comparación bit a bit (muestras)</p>
            </div>
            {sampleChanges.length === 0 ? (
              <p className="text-slate-500 text-sm font-mono">
                Sin diferencias. Probá con un mensaje más largo.
              </p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-xs font-mono">
                  <thead>
                    <tr className="text-slate-500 border-b border-slate-800">
                      <th className="text-left py-2 pr-3">Px</th>
                      <th className="text-left py-2 pr-3">Comp.</th>
                      <th className="text-left py-2 pr-3">Antes (bin)</th>
                      <th className="text-left py-2 pr-3">Después (bin)</th>
                      <th className="text-left py-2 pr-3">Δ dec</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sampleChanges.flatMap((p) =>
                      ['r', 'g', 'b']
                        .map((c) => {
                          const before = p[`orig${c.toUpperCase()}`]
                          const after = p[c]
                          if (before === after) return null
                          return (
                            <tr key={`${p.idx}-${c}`} className="border-b border-slate-800/60">
                              <td className="py-1.5 pr-3 text-slate-400">#{p.idx}</td>
                              <td className="py-1.5 pr-3 uppercase text-slate-300">{c}</td>
                              <td className="py-1.5 pr-3 text-slate-300">
                                {bin8(before).slice(0, 7)}
                                <span className="text-amber-400">{bin8(before).slice(7)}</span>
                              </td>
                              <td className="py-1.5 pr-3 text-slate-300">
                                {bin8(after).slice(0, 7)}
                                <span className="text-green-400">{bin8(after).slice(7)}</span>
                              </td>
                              <td className="py-1.5 pr-3 text-cyan-300">
                                {after > before ? '+1' : '-1'}
                              </td>
                            </tr>
                          )
                        })
                        .filter(Boolean)
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="reveal mt-6 flex items-start gap-2 text-sm text-slate-400 max-w-3xl">
        <Info size={14} className="mt-0.5 text-cyan-400 shrink-0" />
        <p>
          <strong className="text-slate-200">Lectura técnica:</strong> el LSB
          plano (sin matriz de costos) es vulnerable a χ², RS Analysis y
          SPAM/SRM. Los esquemas modernos (S-UNIWARD, HILL, MiPod) embeben
          minimizando una función de distorsión sobre syndrome-trellis codes
          (Filler et al., 2011).
        </p>
      </div>
    </section>
  )
}

function Metric({ label, value, hint, color }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <div>
        <p className="text-slate-200">{label}</p>
        <p className="text-[11px] text-slate-500">{hint}</p>
      </div>
      <span className={`font-mono font-semibold ${color}`}>{value}</span>
    </div>
  )
}

function ImageBox({ title, pixels, highlight, scanline }) {
  return (
    <div className={`glass rounded-2xl p-4 ${scanline ? 'scanline' : ''}`}>
      <div className="flex items-center justify-between mb-3">
        <p className="kicker">{title}</p>
        <span className="text-[10px] font-mono text-slate-500">
          {GRID_W}x{GRID_H}
        </span>
      </div>
      <div
        className="grid gap-[2px] bg-slate-950 p-2 rounded-lg"
        style={{ gridTemplateColumns: `repeat(${GRID_W}, minmax(0, 1fr))` }}
      >
        {pixels.map((p, i) => (
          <div
            key={i}
            className={`aspect-square rounded-[2px] transition-all ${
              highlight && p.changed
                ? 'ring-2 ring-cyan-400 ring-offset-1 ring-offset-slate-950 shadow-[0_0_8px_rgba(6,182,212,0.7)]'
                : ''
            }`}
            style={{ backgroundColor: rgbCss(p) }}
            title={`R:${p.r} G:${p.g} B:${p.b}`}
          />
        ))}
      </div>
    </div>
  )
}
