import { useState } from 'react'
import { KeyRound, EyeOff, BookOpen, Layers, NotebookPen } from 'lucide-react'
import { foundations, theoreticalModels } from '../data.js'
import SubTabs from './SubTabs.jsx'

const SUB = [
  { id: 'def',         label: 'Definiciones',             Icon: BookOpen },
  { id: 'modelos',     label: 'Modelos teóricos',         Icon: NotebookPen },
  { id: 'tax-crypto',  label: 'Taxonomía Criptografía',   Icon: KeyRound },
  { id: 'tax-stego',   label: 'Taxonomía Esteganografía', Icon: EyeOff }
]

function ConceptCard({ accent, Icon, data, mode }) {
  const accentClass =
    accent === 'crypto'
      ? 'from-purple-500/20 to-purple-500/0 border-purple-500/30'
      : 'from-green-500/20 to-green-500/0 border-green-500/30'
  const ringClass = accent === 'crypto' ? 'text-purple-400' : 'text-green-400'

  return (
    <article className={`gradient-border p-6 md:p-8 bg-gradient-to-b ${accentClass}`}>
      <div className="flex items-center gap-3 mb-3">
        <span className={`inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 border border-slate-700 ${ringClass}`}>
          <Icon size={20} />
        </span>
        <div>
          <h3 className="text-2xl font-bold text-slate-50">{data.name}</h3>
          <p className="text-xs font-mono text-slate-500">{data.etym}</p>
        </div>
      </div>

      {mode === 'def' && (
        <>
          <p className="text-slate-300 leading-relaxed mb-3">{data.summary}</p>
          <ul className="space-y-2 mt-4">
            {data.models.map((m) => (
              <li key={m.name} className="text-sm">
                <span className={`font-semibold ${ringClass}`}>{m.name}.</span>{' '}
                <span className="text-slate-400">{m.desc}</span>
              </li>
            ))}
          </ul>
        </>
      )}

      {mode === 'tax' && (
        <ul className="space-y-2 mt-2">
          {data.taxonomy.map((t) => (
            <li
              key={t.label}
              className="text-sm border-l-2 border-slate-700 pl-3 hover:border-gold/60 transition-colors"
            >
              <span className="font-semibold text-slate-200">{t.label}: </span>
              <span className="text-slate-400">{t.value}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  )
}

export default function Foundations() {
  const [sub, setSub] = useState('def')

  return (
    <section id="fundamentos" className="section">
      <header className="reveal mb-8 max-w-3xl">
        <p className="kicker mb-2">1 — Definición y fundamentos teóricos</p>
        <h2 className="h-section mb-4">
          Dos ciencias, <span className="gradient-text">dos garantías</span>
        </h2>
        <p className="text-slate-400 text-lg">
          La criptografía hace ilegible lo visible. La esteganografía hace
          invisible lo existente. Sus modelos formales se construyeron en
          décadas distintas y resuelven problemas ortogonales.
        </p>
      </header>

      <SubTabs tabs={SUB} active={sub} onChange={setSub} ariaLabel="Sub-secciones de Fundamentos" />

      {sub === 'def' && (
        <div className="reveal grid md:grid-cols-2 gap-6 md:gap-8">
          <ConceptCard accent="crypto" Icon={KeyRound} data={foundations.crypto} mode="def" />
          <ConceptCard accent="stego"  Icon={EyeOff}   data={foundations.stego}  mode="def" />
        </div>
      )}

      {sub === 'modelos' && (
        <div className="reveal grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {theoreticalModels.map((m) => (
            <article
              key={`${m.year}-${m.author}`}
              className="uees-card hover:uees-card-featured transition-shadow p-5"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs text-gold bg-gold/10 border border-gold/40 px-2 py-0.5 rounded">
                  {m.year}
                </span>
                <span className="text-xs font-mono text-slate-500">{m.author}</span>
              </div>
              <h3 className="font-bold text-slate-100 mb-2">{m.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-3">{m.abstract}</p>
              <div className="border-t border-slate-800 pt-3">
                <p className="kicker mb-1.5 flex items-center gap-1">
                  <Layers size={10} /> Impacto
                </p>
                <p className="text-xs text-slate-400 leading-relaxed">{m.impact}</p>
              </div>
            </article>
          ))}
        </div>
      )}

      {sub === 'tax-crypto' && (
        <div className="reveal">
          <ConceptCard accent="crypto" Icon={KeyRound} data={foundations.crypto} mode="tax" />
        </div>
      )}

      {sub === 'tax-stego' && (
        <div className="reveal">
          <ConceptCard accent="stego" Icon={EyeOff} data={foundations.stego} mode="tax" />
        </div>
      )}
    </section>
  )
}
