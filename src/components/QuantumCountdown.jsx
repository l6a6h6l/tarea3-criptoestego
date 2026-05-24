import { useEffect, useState } from 'react'
import { Atom, Clock, Quote, ChevronDown, ChevronUp, Award } from 'lucide-react'

const TARGET = new Date('2030-01-01T00:00:00Z')

function diff(now) {
  const ms = Math.max(0, TARGET.getTime() - now.getTime())
  const s = Math.floor(ms / 1000)
  const days = Math.floor(s / 86400)
  const hours = Math.floor((s % 86400) / 3600)
  const minutes = Math.floor((s % 3600) / 60)
  const seconds = s % 60
  return { days, hours, minutes, seconds }
}

const PQC_ALGS = [
  {
    fips: 'FIPS 203',
    name: 'ML-KEM',
    base: 'CRYSTALS-Kyber',
    role: 'Key Encapsulation',
    use: 'Reemplazar RSA-OAEP / ECDH para intercambio de claves.',
    sizes: 'ML-KEM-512 / 768 / 1024'
  },
  {
    fips: 'FIPS 204',
    name: 'ML-DSA',
    base: 'CRYSTALS-Dilithium',
    role: 'Firma digital',
    use: 'Reemplazar RSA-PSS / ECDSA en firmas y certificados.',
    sizes: 'ML-DSA-44 / 65 / 87'
  },
  {
    fips: 'FIPS 205',
    name: 'SLH-DSA',
    base: 'SPHINCS+',
    role: 'Firma digital sin estado basada en hash',
    use: 'Alternativa conservadora; firmas mas grandes pero solo dependen de hash.',
    sizes: 'SLH-DSA-SHA2 / SHAKE en multiples niveles'
  },
  {
    fips: 'FIPS 206 (draft)',
    name: 'FN-DSA',
    base: 'FALCON',
    role: 'Firma digital basada en NTRU',
    use: 'Firmas mas compactas. Pendiente de publicacion final.',
    sizes: 'FALCON-512 / 1024'
  }
]

export default function QuantumCountdown() {
  const [now, setNow] = useState(() => new Date())
  const [showAlgs, setShowAlgs] = useState(false)

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(t)
  }, [])

  const { days, hours, minutes, seconds } = diff(now)

  return (
    <section id="cuantica" className="section">
      <header className="reveal mb-8 max-w-3xl">
        <p className="kicker mb-2 flex items-center gap-2">
          <Atom size={11} /> Migracion poscuantica
        </p>
        <h2 className="h-section mb-4">
          Deadline <span className="gradient-text">CNSA 2.0</span>: 1 enero 2030
        </h2>
        <p className="text-slate-400 text-lg">
          La NSA mandata la migracion a algoritmos poscuanticos entre 2030 y
          2033. Si tu sistema cifra hoy datos con vida util de mas de cinco
          anos, ya estas expuesto a <em className="text-cyan-300">Harvest Now, Decrypt Later</em>.
        </p>
      </header>

      <div className="reveal gradient-border p-6 md:p-10 bg-gradient-to-br from-purple-500/5 via-cyan-500/5 to-green-500/5">
        <div className="flex items-center justify-center gap-3 mb-2 text-cyan-300">
          <Clock size={18} />
          <p className="kicker">Tiempo restante</p>
        </div>

        <div className="grid grid-cols-4 gap-3 md:gap-6 mb-8">
          <TimeUnit value={days} label="dias" big />
          <TimeUnit value={hours} label="horas" />
          <TimeUnit value={minutes} label="minutos" />
          <TimeUnit value={seconds} label="segundos" pulse />
        </div>

        <p className="text-center text-slate-400 text-sm max-w-2xl mx-auto">
          Tiempo restante para que <strong className="text-purple-300">RSA-2048</strong> y{' '}
          <strong className="text-purple-300">ECC</strong> sean considerados obsoletos para
          comunicaciones de seguridad nacional segun la CNSA 2.0 de la NSA.
        </p>

        {/* Cita Gidney */}
        <figure className="mt-8 max-w-3xl mx-auto border-l-4 border-cyan-500/60 pl-4 md:pl-5">
          <Quote size={18} className="text-cyan-400 mb-1" />
          <blockquote className="text-slate-200 italic leading-relaxed">
            &ldquo;RSA-2048 podria romperse en menos de una semana con
            menos de un millon de qubits ruidosos&rdquo; - una reduccion de
            20x frente a las estimaciones de 2019 (~20M qubits).
          </blockquote>
          <figcaption className="text-xs text-slate-500 mt-2 font-mono">
            Gidney, C. (2025). Google Quantum AI. arXiv:2505.15917
          </figcaption>
        </figure>

        <div className="mt-8 text-center">
          <button
            onClick={() => setShowAlgs((v) => !v)}
            className="btn-primary"
          >
            <Award size={16} />
            {showAlgs ? 'Ocultar algoritmos PQC' : 'Que algoritmos usar ya?'}
            {showAlgs ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>

        {showAlgs && (
          <div className="mt-8 grid md:grid-cols-2 gap-4 animate-fade-up">
            {PQC_ALGS.map((a) => (
              <div key={a.fips} className="glass rounded-xl p-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="chip-cyber">{a.fips}</span>
                  <span className="font-bold text-slate-100">{a.name}</span>
                </div>
                <p className="text-xs font-mono text-slate-500 mb-2">
                  Basado en {a.base}
                </p>
                <p className="text-sm text-slate-300 font-semibold">{a.role}</p>
                <p className="text-sm text-slate-400 mt-1">{a.use}</p>
                <p className="text-[11px] font-mono text-cyan-400 mt-2">{a.sizes}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

function TimeUnit({ value, label, big, pulse }) {
  return (
    <div className={`relative ${pulse ? 'animate-pulse-glow' : ''} rounded-2xl glass-strong p-4 md:p-6 text-center`}>
      <p
        className={`font-mono font-extrabold gradient-text tabular-nums ${
          big ? 'text-4xl md:text-7xl' : 'text-3xl md:text-6xl'
        }`}
      >
        {String(value).padStart(2, '0')}
      </p>
      <p className="text-xs md:text-sm font-mono uppercase tracking-widest text-slate-500 mt-1">
        {label}
      </p>
    </div>
  )
}
