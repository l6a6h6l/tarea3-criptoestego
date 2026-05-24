import { KeyRound, EyeOff, BookOpen, Layers } from 'lucide-react'
import { foundations } from '../data.js'

function Card({ accent, icon: Icon, data }) {
  const accentClass =
    accent === 'crypto'
      ? 'from-purple-500/20 to-purple-500/0 border-purple-500/30'
      : 'from-green-500/20 to-green-500/0 border-green-500/30'
  const ringClass = accent === 'crypto' ? 'text-purple-400' : 'text-green-400'

  return (
    <article
      className={`reveal relative gradient-border p-6 md:p-8 bg-gradient-to-b ${accentClass}`}
    >
      <div className="flex items-center gap-3 mb-3">
        <span
          className={`inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 border border-slate-700 ${ringClass}`}
        >
          <Icon size={20} />
        </span>
        <div>
          <h3 className="text-2xl font-bold text-slate-50">{data.name}</h3>
          <p className="text-xs font-mono text-slate-500">{data.etym}</p>
        </div>
      </div>

      <p className="text-slate-300 leading-relaxed mb-6">{data.summary}</p>

      <div className="mb-5">
        <p className="kicker mb-2 flex items-center gap-1.5">
          <BookOpen size={11} /> Modelos teoricos
        </p>
        <ul className="space-y-2">
          {data.models.map((m) => (
            <li key={m.name} className="text-sm">
              <span className={`font-semibold ${ringClass}`}>{m.name}.</span>{' '}
              <span className="text-slate-400">{m.desc}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="kicker mb-2 flex items-center gap-1.5">
          <Layers size={11} /> Taxonomia
        </p>
        <ul className="space-y-2">
          {data.taxonomy.map((t) => (
            <li
              key={t.label}
              className="text-sm border-l-2 border-slate-700 pl-3 hover:border-cyan-500/60 transition-colors"
            >
              <span className="font-semibold text-slate-200">{t.label}: </span>
              <span className="text-slate-400">{t.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default function Foundations() {
  return (
    <section id="fundamentos" className="section">
      <header className="reveal mb-10 max-w-3xl">
        <p className="kicker mb-2">1 - Definicion y fundamentos teoricos</p>
        <h2 className="h-section mb-4">
          Dos ciencias, <span className="gradient-text">dos garantias</span>
        </h2>
        <p className="text-slate-400 text-lg">
          La criptografia hace ilegible lo visible. La esteganografia hace
          invisible lo existente. Sus modelos formales se construyeron en
          decadas distintas y resuelven problemas ortogonales.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        <Card accent="crypto" icon={KeyRound} data={foundations.crypto} />
        <Card accent="stego" icon={EyeOff} data={foundations.stego} />
      </div>
    </section>
  )
}
