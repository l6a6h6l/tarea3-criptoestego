import { useState } from 'react'
import { KeyRound, EyeOff, CheckCircle2, AlertOctagon } from 'lucide-react'
import { useCases, stegoMyth } from '../data.js'
import SubTabs from './SubTabs.jsx'

const SUB = [
  { id: 'crypto',  label: 'Criptografía legítima',   Icon: KeyRound     },
  { id: 'stego',   label: 'Esteganografía legítima', Icon: EyeOff       },
  { id: 'caveat',  label: 'Nota cautelar Al-Qaeda',  Icon: AlertOctagon }
]

function Column({ accent, icon: Icon, title, items }) {
  const ring =
    accent === 'crypto'
      ? 'border-purple-500/30 hover:border-purple-500/60'
      : 'border-green-500/30 hover:border-green-500/60'
  const head = accent === 'crypto' ? 'text-purple-300' : 'text-green-300'

  return (
    <div>
      <div className={`flex items-center gap-2 mb-4 ${head}`}>
        <Icon size={18} />
        <h3 className="font-bold text-lg">{title}</h3>
      </div>
      <ul className="space-y-3">
        {items.map((it) => (
          <li key={it.title} className={`glass rounded-xl p-4 border ${ring} transition-colors`}>
            <div className="flex items-start gap-2">
              <CheckCircle2
                size={16}
                className={`mt-0.5 shrink-0 ${accent === 'crypto' ? 'text-purple-400' : 'text-green-400'}`}
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
  const [sub, setSub] = useState('crypto')

  return (
    <section id="casos" className="section">
      <header className="reveal mb-8 max-w-3xl">
        <p className="kicker mb-2">3 — Casos de uso reales o hipotéticos</p>
        <h2 className="h-section mb-4">
          Dónde vive <span className="gradient-text">cada técnica</span>
        </h2>
        <p className="text-slate-400 text-lg">
          Las dos disciplinas en producción: TLS y Signal por un lado;
          watermarking, autenticación documental y comunicaciones bajo
          vigilancia por el otro. Los usos ofensivos del stegomalware van en la
          pestaña Timeline.
        </p>
      </header>

      <SubTabs tabs={SUB} active={sub} onChange={setSub} ariaLabel="Sub-secciones de Casos" />

      {sub === 'crypto' && (
        <div className="reveal">
          <Column accent="crypto" icon={KeyRound} title="Criptografía legítima" items={useCases.crypto} />
        </div>
      )}

      {sub === 'stego' && (
        <div className="reveal">
          <Column accent="stego" icon={EyeOff} title="Esteganografía legítima" items={useCases.stego} />
        </div>
      )}

      {sub === 'caveat' && (
        <div
          className="reveal gradient-border p-5 md:p-7 bg-gradient-to-b from-amber-500/10 to-amber-500/0"
          style={{ borderStyle: 'dashed' }}
        >
          <div className="flex items-start gap-3">
            <AlertOctagon size={24} className="text-amber-400 shrink-0 mt-0.5" />
            <div>
              <p className="kicker text-amber-300 mb-1.5">{stegoMyth.title}</p>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">{stegoMyth.body}</p>
              <p className="text-slate-500 text-xs font-mono mt-3">
                Provos, N., &amp; Honeyman, P. (2003). Hide and seek: An introduction to
                steganography. <em>IEEE Security &amp; Privacy, 1</em>(3), 32–44.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
