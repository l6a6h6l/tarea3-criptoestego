import { useMemo, useState } from 'react'
import {
  Skull,
  ShieldAlert,
  Banknote,
  Bomb,
  Bug,
  Filter,
  Image as ImageIcon,
  AlertOctagon
} from 'lucide-react'
import { stegomalwareTimeline, stegoMyth } from '../data.js'

const TYPE_META = {
  'apt-state': { label: 'APT estatal', icon: ShieldAlert, color: 'text-red-300', ring: 'border-red-500/40 bg-red-500/10' },
  banking: { label: 'Banking', icon: Banknote, color: 'text-amber-300', ring: 'border-amber-500/40 bg-amber-500/10' },
  'exploit-kit': { label: 'Exploit kit', icon: Bomb, color: 'text-orange-300', ring: 'border-orange-500/40 bg-orange-500/10' },
  crimeware: { label: 'Crimeware', icon: Bug, color: 'text-purple-300', ring: 'border-purple-500/40 bg-purple-500/10' }
}

export default function Timeline() {
  const [filter, setFilter] = useState('all')
  const [expanded, setExpanded] = useState(null)

  const filtered = useMemo(
    () =>
      filter === 'all'
        ? stegomalwareTimeline
        : stegomalwareTimeline.filter((s) => s.type === filter),
    [filter]
  )

  return (
    <section id="timeline" className="section">
      <header className="reveal mb-8 max-w-3xl">
        <p className="kicker mb-2 flex items-center gap-2">
          <Skull size={11} /> Lado oscuro
        </p>
        <h2 className="h-section mb-4">
          Timeline de <span className="gradient-text">stegomalware documentado</span>
        </h2>
        <p className="text-slate-400 text-lg">
          12 casos confirmados por firmas como Kaspersky, ESET, Symantec,
          Dell SecureWorks y Malwarebytes. Filtra por tipo y haz clic para
          expandir los detalles tecnicos.
        </p>
      </header>

      {/* Filtros */}
      <div className="reveal flex flex-wrap items-center gap-2 mb-8">
        <span className="text-xs font-mono text-slate-500 mr-1 flex items-center gap-1.5">
          <Filter size={12} /> FILTRO:
        </span>
        <FilterBtn active={filter === 'all'} onClick={() => setFilter('all')}>
          Todos ({stegomalwareTimeline.length})
        </FilterBtn>
        {Object.entries(TYPE_META).map(([k, m]) => {
          const count = stegomalwareTimeline.filter((s) => s.type === k).length
          const Icon = m.icon
          return (
            <FilterBtn key={k} active={filter === k} onClick={() => setFilter(k)} icon={Icon}>
              {m.label} ({count})
            </FilterBtn>
          )
        })}
      </div>

      {/* Timeline */}
      <div className="reveal relative">
        {/* Linea vertical en mobile, horizontal en desktop */}
        <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-purple-500/40 via-cyan-500/40 to-green-500/40" />
        <div className="md:hidden absolute top-0 bottom-0 left-4 w-px bg-gradient-to-b from-purple-500/40 via-cyan-500/40 to-green-500/40" />

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {filtered.map((c, i) => {
            const meta = TYPE_META[c.type]
            const Icon = meta.icon
            const open = expanded === `${c.name}-${c.year}`
            return (
              <button
                key={`${c.name}-${c.year}`}
                onClick={() => setExpanded(open ? null : `${c.name}-${c.year}`)}
                className={`scanline glass rounded-xl p-4 text-left transition-all hover:scale-[1.02] hover:border-slate-600 ${
                  open ? 'ring-2 ring-cyan-500/50' : ''
                }`}
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className={`inline-flex h-7 w-7 items-center justify-center rounded-md border ${meta.ring} ${meta.color}`}>
                      <Icon size={14} />
                    </span>
                    <span className="font-mono text-xs text-slate-500">
                      {c.year}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">
                    #{String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="font-bold text-slate-100">{c.name}</h3>
                <p className={`text-xs font-mono mt-0.5 ${meta.color}`}>{meta.label}</p>
                <p className="text-xs text-slate-400 mt-3 line-clamp-2">{c.technique}</p>

                <div className="flex items-center gap-1 mt-3 text-[10px] font-mono text-slate-500">
                  <ImageIcon size={10} /> {c.coverFormat}
                </div>

                {open && (
                  <div className="mt-4 pt-3 border-t border-slate-800 text-sm space-y-2 animate-fade-up">
                    <p className="text-slate-300 leading-relaxed">{c.details}</p>
                    <div className="text-xs text-slate-500">
                      <span className="text-slate-400 font-semibold">Fuente: </span>
                      {c.source}
                    </div>
                    {c.cves && c.cves.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {c.cves.map((cve) => (
                          <span key={cve} className="chip-crypto !text-[10px]">{cve}</span>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* Caveat */}
      <div className="reveal mt-8 gradient-border p-5 md:p-6 bg-gradient-to-b from-amber-500/5 to-amber-500/0">
        <div className="flex items-start gap-3">
          <AlertOctagon size={22} className="text-amber-400 shrink-0 mt-0.5" />
          <div>
            <p className="kicker text-amber-300 mb-1.5">{stegoMyth.title}</p>
            <p className="text-slate-300 text-sm leading-relaxed">{stegoMyth.body}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function FilterBtn({ active, onClick, children, icon: Icon }) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono border transition-all ${
        active
          ? 'border-cyan-500/60 bg-cyan-500/10 text-cyan-200'
          : 'border-slate-700 text-slate-400 hover:text-slate-200 hover:border-slate-600'
      }`}
    >
      {Icon && <Icon size={11} />}
      {children}
    </button>
  )
}
