import { KeyRound, EyeOff, CheckCircle2 } from 'lucide-react'
import { useCases } from '../data.js'

function Column({ accent, icon: Icon, title, items }) {
  const ring =
    accent === 'crypto'
      ? 'border-purple-500/30 hover:border-purple-500/60'
      : 'border-green-500/30 hover:border-green-500/60'
  const head = accent === 'crypto' ? 'text-purple-300' : 'text-green-300'

  return (
    <div className="reveal">
      <div className={`flex items-center gap-2 mb-4 ${head}`}>
        <Icon size={18} />
        <h3 className="font-bold text-lg">{title}</h3>
      </div>
      <ul className="space-y-3">
        {items.map((it) => (
          <li
            key={it.title}
            className={`glass rounded-xl p-4 border ${ring} transition-colors`}
          >
            <div className="flex items-start gap-2">
              <CheckCircle2
                size={16}
                className={`mt-0.5 shrink-0 ${
                  accent === 'crypto' ? 'text-purple-400' : 'text-green-400'
                }`}
              />
              <div>
                <p className="font-semibold text-slate-100">{it.title}</p>
                <p className="text-sm text-slate-400 mt-0.5">{it.detail}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Cases() {
  return (
    <section id="casos" className="section">
      <header className="reveal mb-10 max-w-3xl">
        <p className="kicker mb-2">3 - Casos de uso reales o hipoteticos</p>
        <h2 className="h-section mb-4">
          Donde vive <span className="gradient-text">cada tecnica</span>
        </h2>
        <p className="text-slate-400 text-lg">
          Aplicaciones legitimas que validan el rol de ambas disciplinas:
          desde TLS y Signal hasta watermarking y comunicaciones bajo
          vigilancia. Los usos ofensivos se documentan en la seccion{' '}
          <a href="#timeline" className="text-cyan-400 underline-offset-4 hover:underline">
            Timeline de stegomalware
          </a>.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8">
        <Column accent="crypto" icon={KeyRound} title="Criptografia legitima" items={useCases.crypto} />
        <Column accent="stego" icon={EyeOff} title="Esteganografia legitima" items={useCases.stego} />
      </div>
    </section>
  )
}
