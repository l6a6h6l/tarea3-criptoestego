import { useState } from 'react'
import {
  Sword, ShieldOff, Microscope, BrainCircuit, MapPin
} from 'lucide-react'
import { attacks } from '../data.js'
import SubTabs from './SubTabs.jsx'

const SUB = [
  { id: 'cripto', label: 'Criptoanálisis clásico', Icon: Sword     },
  { id: 'estego', label: 'Estegoanálisis',         Icon: ShieldOff },
  { id: 'latam',  label: 'Investigación LATAM',    Icon: MapPin    }
]

function Column({ icon: Icon, title, items, accent }) {
  return (
    <div>
      <p className={`kicker mb-2 flex items-center gap-1.5 ${accent}`}>
        <Icon size={11} /> {title}
      </p>
      <ul className="space-y-2">
        {items.map((it) => (
          <li key={it.name} className="text-sm">
            <p className="text-slate-200 font-semibold">{it.name}</p>
            <p className="text-slate-500 text-xs">{it.ref}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Attacks() {
  const [sub, setSub] = useState('cripto')

  return (
    <section id="ataques" className="section">
      <header className="reveal mb-8 max-w-3xl">
        <p className="kicker mb-2">4 — Resiliencia ante ataques</p>
        <h2 className="h-section mb-4">
          Criptoanálisis y <span className="gradient-text">estegoanálisis</span>
        </h2>
        <p className="text-slate-400 text-lg">
          Modelos de ataque clásicos (Katz &amp; Lindell, 2020), técnicas
          diferenciales y lineales, side-channels, y la evolución del
          estegoanálisis desde χ² (2000) hasta SRNet (2019).
        </p>
      </header>

      <SubTabs tabs={SUB} active={sub} onChange={setSub} ariaLabel="Sub-secciones de Ataques" />

      {sub === 'cripto' && (
        <div className="reveal glass rounded-2xl p-6 space-y-6">
          <div className="flex items-center gap-2 text-purple-300">
            <Sword size={18} />
            <h3 className="font-bold text-lg">Criptoanálisis clásico y moderno</h3>
          </div>

          <div>
            <p className="kicker mb-2">Modelos de ataque</p>
            <ul className="grid sm:grid-cols-2 gap-1.5 text-sm">
              {attacks.crypto.models.map((m) => (
                <li
                  key={m}
                  className="text-slate-300 before:content-['>'] before:mr-2 before:text-purple-400 before:font-mono"
                >
                  {m}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="kicker mb-2">Técnicas</p>
            <ul className="space-y-1.5">
              {attacks.crypto.techniques.map((t) => (
                <li key={t.name} className="text-sm flex flex-wrap gap-x-2">
                  <span className="text-slate-200 font-semibold">{t.name}.</span>
                  <span className="text-slate-500">{t.ref}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-xs text-slate-500 border-t border-slate-800 pt-3 italic">
            La amenaza cuántica y los algoritmos PQC se tratan en la pestaña Cuántica.
          </p>
        </div>
      )}

      {sub === 'estego' && (
        <div className="reveal glass rounded-2xl p-6 space-y-6">
          <div className="flex items-center gap-2 text-green-300">
            <ShieldOff size={18} />
            <h3 className="font-bold text-lg">Estegoanálisis</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            <Column icon={Microscope}   title="Clásicos"          items={attacks.stego.classic}      accent="text-green-300" />
            <Column icon={Microscope}   title="Pre-Deep Learning" items={attacks.stego.preDL}        accent="text-cyan-300"  />
            <Column icon={BrainCircuit} title="Deep Learning"     items={attacks.stego.deepLearning} accent="text-purple-300" />
          </div>

          <div className="border-t border-slate-800 pt-4">
            <p className="kicker mb-1.5">Limitaciones</p>
            <p className="text-slate-300 text-sm leading-relaxed">{attacks.stego.limits}</p>
          </div>
        </div>
      )}

      {sub === 'latam' && (
        <div className="reveal gradient-border-uees p-6">
          <div className="flex items-center gap-2 mb-3 text-gold">
            <MapPin size={18} />
            <h3 className="font-bold text-lg">Investigación en LATAM / Ecuador</h3>
          </div>
          <ul className="grid md:grid-cols-3 gap-4">
            {attacks.latam.map((l) => (
              <li key={l.ref} className="text-sm">
                <p className="text-slate-100 font-semibold">{l.ref}</p>
                <p className="text-slate-400 mt-0.5">{l.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  )
}
