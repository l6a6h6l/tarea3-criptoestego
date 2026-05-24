import { Sword, ShieldOff, Microscope, BrainCircuit, AlertTriangle, MapPin } from 'lucide-react'
import { attacks } from '../data.js'

export default function Attacks() {
  return (
    <section id="ataques" className="section">
      <header className="reveal mb-10 max-w-3xl">
        <p className="kicker mb-2">4 - Resiliencia ante ataques</p>
        <h2 className="h-section mb-4">
          Criptoanalisis y <span className="gradient-text">estegoanalisis</span>
        </h2>
        <p className="text-slate-400 text-lg">
          Modelos de ataque clasicos (Katz & Lindell, 2020), tecnicas
          diferenciales y lineales, side-channels, amenaza cuantica y la
          evolucion del estegoanalisis desde chi-cuadrado (2000) hasta
          SRNet (2019).
        </p>
      </header>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Criptoanalisis */}
        <div className="reveal glass rounded-2xl p-6 space-y-5">
          <div className="flex items-center gap-2 text-purple-300">
            <Sword size={18} />
            <h3 className="font-bold text-lg">Criptoanalisis</h3>
          </div>

          <div>
            <p className="kicker mb-2">Modelos de ataque</p>
            <ul className="grid sm:grid-cols-2 gap-1.5 text-sm">
              {attacks.crypto.models.map((m) => (
                <li key={m} className="text-slate-300 before:content-['>'] before:mr-2 before:text-purple-400 before:font-mono">
                  {m}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="kicker mb-2">Tecnicas</p>
            <ul className="space-y-1.5">
              {attacks.crypto.techniques.map((t) => (
                <li key={t.name} className="text-sm flex flex-wrap gap-x-2">
                  <span className="text-slate-200 font-semibold">{t.name}.</span>
                  <span className="text-slate-500">{t.ref}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Amenaza cuantica */}
        <div className="reveal glass rounded-2xl p-6 space-y-4">
          <div className="flex items-center gap-2 text-cyan-300">
            <AlertTriangle size={18} />
            <h3 className="font-bold text-lg">Amenaza cuantica</h3>
          </div>
          <ul className="space-y-3">
            {attacks.crypto.quantum.map((q) => (
              <li key={q.algo} className="border-l-2 border-cyan-500/40 pl-3">
                <p className="text-cyan-200 font-semibold text-sm">{q.algo}</p>
                <p className="text-slate-400 text-sm mt-0.5">{q.impact}</p>
              </li>
            ))}
          </ul>
          <a href="#cuantica" className="inline-block btn-ghost text-sm">
            Ver cuenta regresiva CNSA 2.0
          </a>
        </div>

        {/* Estegoanalisis */}
        <div className="reveal lg:col-span-2 glass rounded-2xl p-6 space-y-5">
          <div className="flex items-center gap-2 text-green-300">
            <ShieldOff size={18} />
            <h3 className="font-bold text-lg">Estegoanalisis</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            <Column icon={Microscope} title="Clasicos" items={attacks.stego.classic} accent="text-green-300" />
            <Column icon={Microscope} title="Pre-Deep Learning" items={attacks.stego.preDL} accent="text-cyan-300" />
            <Column icon={BrainCircuit} title="Deep Learning" items={attacks.stego.deepLearning} accent="text-purple-300" />
          </div>

          <div className="border-t border-slate-800 pt-4">
            <p className="kicker mb-1.5">Limitaciones</p>
            <p className="text-slate-300 text-sm leading-relaxed">{attacks.stego.limits}</p>
          </div>
        </div>

        {/* LATAM */}
        <div className="reveal lg:col-span-2 gradient-border p-6 bg-gradient-to-br from-cyan-500/5 to-green-500/5">
          <div className="flex items-center gap-2 mb-3 text-cyan-300">
            <MapPin size={18} />
            <h3 className="font-bold text-lg">Investigacion en LATAM / Ecuador</h3>
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
      </div>
    </section>
  )
}

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
