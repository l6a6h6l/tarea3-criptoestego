import { useState } from 'react'
import {
  Crosshair,
  ShieldCheck,
  Eye,
  Gauge,
  Database,
  BarChart3,
  Atom,
  Scale,
  AlertTriangle,
  KeyRound,
  EyeOff,
  Columns2
} from 'lucide-react'
import { comparisonTable } from '../data.js'

const ICONS = [Crosshair, ShieldCheck, Eye, Gauge, Database, BarChart3, Atom, Scale, AlertTriangle]

export default function Comparison() {
  const [mode, setMode] = useState('both') // 'crypto' | 'stego' | 'both'

  const TabBtn = ({ value, icon: Icon, children, color }) => {
    const active = mode === value
    const colors = {
      crypto: active ? 'border-purple-500 text-purple-200 bg-purple-500/15' : '',
      stego: active ? 'border-green-500 text-green-200 bg-green-500/15' : '',
      both: active ? 'border-cyan-500 text-cyan-200 bg-cyan-500/15' : ''
    }
    return (
      <button
        onClick={() => setMode(value)}
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
          active
            ? colors[color]
            : 'border-slate-700 text-slate-400 hover:text-slate-200 hover:border-slate-600'
        }`}
      >
        <Icon size={14} />
        {children}
      </button>
    )
  }

  return (
    <section id="comparativa" className="section">
      <header className="reveal mb-8 max-w-3xl">
        <p className="kicker mb-2">2 - Ventajas y desventajas</p>
        <h2 className="h-section mb-4">
          9 dimensiones, <span className="gradient-text">una decision informada</span>
        </h2>
        <p className="text-slate-400 text-lg">
          Compara objetivo, garantia formal, detectabilidad, overhead,
          capacidad, metricas, resiliencia cuantica, marco legal y puntos de
          falla. Alternar entre vistas para focalizar el analisis.
        </p>
      </header>

      <div className="reveal flex flex-wrap items-center gap-2 mb-6">
        <span className="text-xs font-mono text-slate-500 mr-2">VISTA:</span>
        <TabBtn value="crypto" icon={KeyRound} color="crypto">
          Solo Criptografia
        </TabBtn>
        <TabBtn value="stego" icon={EyeOff} color="stego">
          Solo Esteganografia
        </TabBtn>
        <TabBtn value="both" icon={Columns2} color="both">
          Lado a lado
        </TabBtn>
      </div>

      <div className="reveal grid gap-3 md:gap-4">
        {comparisonTable.map((row, idx) => {
          const Icon = ICONS[idx % ICONS.length]
          return (
            <div
              key={row.dim}
              className="glass rounded-xl p-4 md:p-5 hover:border-cyan-500/40 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3 md:mb-4">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-slate-800/70 border border-slate-700 text-cyan-300">
                  <Icon size={16} />
                </span>
                <h3 className="font-semibold text-slate-100 text-lg">
                  {row.dim}
                </h3>
                <span className="ml-auto font-mono text-xs text-slate-500">
                  {String(idx + 1).padStart(2, '0')}/09
                </span>
              </div>

              <div
                className={`grid gap-3 ${
                  mode === 'both' ? 'md:grid-cols-2' : 'grid-cols-1'
                }`}
              >
                {(mode === 'crypto' || mode === 'both') && (
                  <div className="rounded-lg border border-purple-500/30 bg-purple-500/5 p-4 transition-all">
                    <div className="flex items-center gap-2 mb-1.5">
                      <KeyRound size={14} className="text-purple-400" />
                      <span className="text-xs font-mono uppercase tracking-wider text-purple-300">
                        Criptografia
                      </span>
                    </div>
                    <p className="text-slate-200 text-sm leading-relaxed">{row.crypto}</p>
                  </div>
                )}
                {(mode === 'stego' || mode === 'both') && (
                  <div className="rounded-lg border border-green-500/30 bg-green-500/5 p-4 transition-all">
                    <div className="flex items-center gap-2 mb-1.5">
                      <EyeOff size={14} className="text-green-400" />
                      <span className="text-xs font-mono uppercase tracking-wider text-green-300">
                        Esteganografia
                      </span>
                    </div>
                    <p className="text-slate-200 text-sm leading-relaxed">{row.stego}</p>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
