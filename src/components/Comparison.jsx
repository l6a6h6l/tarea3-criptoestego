import { useState } from 'react'
import {
  Crosshair, ShieldCheck, Eye, Gauge, Database, BarChart3, Atom, Scale,
  AlertTriangle, KeyRound, EyeOff, Columns2, GitCompare, Quote, BookOpen
} from 'lucide-react'
import { comparisonTable, convergences, closingQuote } from '../data.js'
import SubTabs from './SubTabs.jsx'

const ICONS = [Crosshair, ShieldCheck, Eye, Gauge, Database, BarChart3, Atom, Scale, AlertTriangle]

const SUB = [
  { id: 'tabla',         label: 'Tabla de dimensiones', Icon: GitCompare },
  { id: 'convergencias', label: 'Convergencias',        Icon: BookOpen   },
  { id: 'quote',         label: 'Cita de cierre',       Icon: Quote      }
]

function ComparisonTable() {
  const [mode, setMode] = useState('both')

  const TabBtn = ({ value, icon: Icon, children, color }) => {
    const active = mode === value
    const colors = {
      crypto: active ? 'border-purple-500 text-purple-200 bg-purple-500/15' : '',
      stego:  active ? 'border-green-500 text-green-200 bg-green-500/15'   : '',
      both:   active ? 'border-gold text-gold bg-gold/15'                  : ''
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
    <>
      <div className="flex flex-wrap items-center gap-2 mb-6">
        <span className="text-xs font-mono text-slate-500 mr-2">VISTA:</span>
        <TabBtn value="crypto" icon={KeyRound} color="crypto">Solo Criptografía</TabBtn>
        <TabBtn value="stego"  icon={EyeOff}   color="stego">Solo Esteganografía</TabBtn>
        <TabBtn value="both"   icon={Columns2} color="both">Lado a lado</TabBtn>
      </div>

      <div className="grid gap-3 md:gap-4">
        {comparisonTable.map((row, idx) => {
          const Icon = ICONS[idx % ICONS.length]
          return (
            <div
              key={row.dim}
              className="glass rounded-xl p-4 md:p-5 hover:border-gold/40 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3 md:mb-4">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-slate-800/70 border border-slate-700 text-gold">
                  <Icon size={16} />
                </span>
                <h3 className="font-semibold text-slate-100 text-lg">{row.dim}</h3>
                <span className="ml-auto font-mono text-xs text-slate-500">
                  {String(idx + 1).padStart(2, '0')}/09
                </span>
              </div>

              <div className={`grid gap-3 ${mode === 'both' ? 'md:grid-cols-2' : 'grid-cols-1'}`}>
                {(mode === 'crypto' || mode === 'both') && (
                  <div className="rounded-lg border border-purple-500/30 bg-purple-500/5 p-4">
                    <div className="flex items-center gap-2 mb-1.5">
                      <KeyRound size={14} className="text-purple-400" />
                      <span className="text-xs font-mono uppercase tracking-wider text-purple-300">Criptografía</span>
                    </div>
                    <p className="text-slate-200 text-sm leading-relaxed">{row.crypto}</p>
                  </div>
                )}
                {(mode === 'stego' || mode === 'both') && (
                  <div className="rounded-lg border border-green-500/30 bg-green-500/5 p-4">
                    <div className="flex items-center gap-2 mb-1.5">
                      <EyeOff size={14} className="text-green-400" />
                      <span className="text-xs font-mono uppercase tracking-wider text-green-300">Esteganografía</span>
                    </div>
                    <p className="text-slate-200 text-sm leading-relaxed">{row.stego}</p>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default function Comparison() {
  const [sub, setSub] = useState('tabla')

  return (
    <section id="comparativa" className="section">
      <header className="reveal mb-8 max-w-3xl">
        <p className="kicker mb-2">2 — Ventajas y desventajas</p>
        <h2 className="h-section mb-4">
          9 dimensiones, <span className="gradient-text">una decisión informada</span>
        </h2>
        <p className="text-slate-400 text-lg">
          Objetivo, garantía formal, detectabilidad, overhead, capacidad,
          métricas, resiliencia cuántica, marco legal y puntos de falla. Alterná
          entre vistas para focalizar el análisis.
        </p>
      </header>

      <SubTabs tabs={SUB} active={sub} onChange={setSub} ariaLabel="Sub-secciones de Comparativa" />

      {sub === 'tabla' && <ComparisonTable />}

      {sub === 'convergencias' && (
        <div className="uees-card p-6 md:p-8">
          <p className="kicker mb-3 flex items-center gap-2">
            <BookOpen size={11} /> Por qué son complementarias, no excluyentes
          </p>
          <ol className="space-y-4 mt-4">
            {convergences.map((c, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                <span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold mt-0.5 bg-gold/15 text-gold border border-gold/40">
                  {i + 1}
                </span>
                <span>{c}</span>
              </li>
            ))}
          </ol>
        </div>
      )}

      {sub === 'quote' && (
        <blockquote className="uees-card uees-card-featured p-6 md:p-10 max-w-3xl mx-auto">
          <Quote size={32} className="text-gold mb-3" />
          <p className="italic text-lg md:text-xl text-slate-100 leading-relaxed">
            “{closingQuote.text}”
          </p>
          <footer className="mt-5 text-xs font-mono text-slate-500">— {closingQuote.source}</footer>
        </blockquote>
      )}
    </section>
  )
}
