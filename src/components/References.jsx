import { useMemo, useState } from 'react'
import { BookMarked, Search, ExternalLink, Copy, Check } from 'lucide-react'
import { referencias } from '../data.js'

const TAG_COLORS = {
  fundamentos: 'bg-purple-500/10 text-purple-300 border-purple-500/30',
  hibrido: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
  iot: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
  malware: 'bg-red-500/10 text-red-300 border-red-500/30',
  apt: 'bg-red-500/10 text-red-300 border-red-500/30',
  banking: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
  crimeware: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
  'exploit kit': 'bg-orange-500/10 text-orange-300 border-orange-500/30',
  estegoanalisis: 'bg-green-500/10 text-green-300 border-green-500/30',
  esteganografia: 'bg-green-500/10 text-green-300 border-green-500/30',
  adaptativa: 'bg-green-500/10 text-green-300 border-green-500/30',
  'deep learning': 'bg-purple-500/10 text-purple-300 border-purple-500/30',
  cuantica: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
  pqc: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
  shor: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
  signal: 'bg-purple-500/10 text-purple-300 border-purple-500/30',
  historia: 'bg-slate-500/10 text-slate-300 border-slate-500/30',
  libro: 'bg-slate-500/10 text-slate-300 border-slate-500/30',
  latam: 'bg-amber-500/10 text-amber-300 border-amber-500/30'
}

function tagClass(t) {
  return TAG_COLORS[t] || 'bg-slate-500/10 text-slate-300 border-slate-500/30'
}

export default function References() {
  const [q, setQ] = useState('')
  const [copied, setCopied] = useState(null)

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase()
    if (!term) return referencias
    return referencias.filter((r) => {
      const hay = (r.apa + ' ' + (r.tags || []).join(' ')).toLowerCase()
      return hay.includes(term)
    })
  }, [q])

  const copy = async (r) => {
    try {
      await navigator.clipboard.writeText(r.apa)
      setCopied(r.id)
      setTimeout(() => setCopied(null), 1600)
    } catch {
      /* noop */
    }
  }

  return (
    <section id="referencias" className="section">
      <header className="reveal mb-8 max-w-3xl">
        <p className="kicker mb-2 flex items-center gap-2">
          <BookMarked size={11} /> Bibliografia
        </p>
        <h2 className="h-section mb-4">
          Referencias <span className="gradient-text">APA 7</span>
        </h2>
        <p className="text-slate-400 text-lg">
          {referencias.length} referencias indexadas (IEEE, ACM, Springer,
          NIST, arXiv y reportes industriales de Kaspersky, ESET, Symantec,
          Dell SecureWorks y Malwarebytes).
        </p>
      </header>

      <div className="reveal mb-6 flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-[260px] max-w-md">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Buscar por autor, ano, tema o tag..."
            className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-slate-950 border border-slate-700 focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/40 outline-none text-sm"
          />
        </div>
        <span className="text-xs font-mono text-slate-500">
          {filtered.length} / {referencias.length}
        </span>
      </div>

      <div className="reveal grid md:grid-cols-2 gap-3">
        {filtered.map((r) => (
          <article
            key={r.id}
            className="glass rounded-xl p-4 hover:border-cyan-500/40 transition-colors group"
          >
            <p className="text-sm text-slate-200 leading-relaxed">{r.apa}</p>

            {(r.tags || []).length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-2.5">
                {r.tags.map((t) => (
                  <span
                    key={t}
                    className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono border ${tagClass(
                      t
                    )}`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}

            <div className="flex items-center gap-2 mt-3 text-xs">
              {r.url && (
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300"
                >
                  <ExternalLink size={11} /> Enlace
                </a>
              )}
              {r.doi && (
                <span className="font-mono text-slate-500">
                  DOI: <span className="text-slate-400">{r.doi}</span>
                </span>
              )}
              <button
                onClick={() => copy(r)}
                className="ml-auto inline-flex items-center gap-1 text-slate-400 hover:text-slate-200"
                title="Copiar cita APA"
              >
                {copied === r.id ? (
                  <>
                    <Check size={11} className="text-green-400" /> Copiado
                  </>
                ) : (
                  <>
                    <Copy size={11} /> Copiar APA
                  </>
                )}
              </button>
            </div>
          </article>
        ))}

        {filtered.length === 0 && (
          <div className="md:col-span-2 text-center py-12 text-slate-500 font-mono text-sm">
            Sin coincidencias para "{q}"
          </div>
        )}
      </div>
    </section>
  )
}
