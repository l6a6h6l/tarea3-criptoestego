import { useEffect, useState } from 'react'
import { Atom, Clock, Quote, Award, AlertTriangle } from 'lucide-react'
import { pqcAlgorithms } from '../data.js'
import SubTabs from './SubTabs.jsx'

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

const QUANTUM_THREATS = [
  { algo: 'Shor (1994)', impact: 'Factoriza enteros y resuelve log discreto en tiempo polinómico → rompe RSA/ECC/ECDH/DSA.' },
  { algo: 'Gidney (Google Quantum AI, arXiv:2505.15917, mayo 2025)', impact: 'RSA-2048 podría romperse "en menos de una semana con <1M qubits ruidosos", reducción 20× vs Gidney & Ekerå 2019 (~20M qubits).' },
  { algo: 'Grover (1996)', impact: 'Aceleración cuadrática → AES-128 efectivo 64 bits, SHA-256 efectivo 128 bits. NIST recomienda ≥256 bits simétricos PQ.' },
  { algo: 'HNDL (Harvest Now, Decrypt Later)', impact: 'Adversarios capturan tráfico hoy con la intención de descifrarlo cuando exista un computador cuántico relevante.' }
]

const SUB = [
  { id: 'amenaza',    label: 'Amenaza cuántica',  Icon: AlertTriangle },
  { id: 'countdown',  label: 'Cuenta regresiva',  Icon: Clock         },
  { id: 'algos',      label: 'Algoritmos PQC',    Icon: Award         }
]

export default function QuantumCountdown() {
  const [now, setNow] = useState(() => new Date())
  const [sub, setSub] = useState('amenaza')

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(t)
  }, [])

  const { days, hours, minutes, seconds } = diff(now)

  return (
    <section id="cuantica" className="section">
      <header className="reveal mb-8 max-w-3xl">
        <p className="kicker mb-2 flex items-center gap-2">
          <Atom size={11} /> Migración poscuántica
        </p>
        <h2 className="h-section mb-4">
          Deadline <span className="gradient-text">CNSA 2.0</span>: 1 enero 2030
        </h2>
        <p className="text-slate-400 text-lg">
          La NSA mandata la migración a algoritmos poscuánticos entre 2030 y
          2033. Si tu sistema cifra hoy datos con vida útil de más de cinco
          años, ya estás expuesto a <em className="text-gold">Harvest Now, Decrypt Later</em>.
        </p>
      </header>

      <SubTabs tabs={SUB} active={sub} onChange={setSub} ariaLabel="Sub-secciones de Cuántica" />

      {sub === 'amenaza' && (
        <div className="glass rounded-2xl p-6 space-y-5">
          <div className="flex items-center gap-2 text-gold">
            <AlertTriangle size={18} />
            <h3 className="font-bold text-lg">Vectores y algoritmos cuánticos</h3>
          </div>
          <ul className="space-y-3">
            {QUANTUM_THREATS.map((q) => (
              <li key={q.algo} className="border-l-2 border-gold/50 pl-3">
                <p className="text-gold font-semibold text-sm">{q.algo}</p>
                <p className="text-slate-400 text-sm mt-0.5">{q.impact}</p>
              </li>
            ))}
          </ul>
          <figure className="border-t border-slate-800 pt-5">
            <Quote size={18} className="text-gold mb-1" />
            <blockquote className="text-slate-200 italic leading-relaxed">
              &ldquo;RSA-2048 podría romperse en menos de una semana con menos de un millón de
              qubits ruidosos&rdquo; — una reducción de 20× frente a las estimaciones de 2019 (~20M qubits).
            </blockquote>
            <figcaption className="text-xs text-slate-500 mt-2 font-mono">
              Gidney, C. (2025). Google Quantum AI. arXiv:2505.15917
            </figcaption>
          </figure>
        </div>
      )}

      {sub === 'countdown' && (
        <div className="gradient-border-uees p-6 md:p-10 bg-gradient-to-br from-uees/10 via-gold/5 to-cyan-500/5">
          <div className="flex items-center justify-center gap-3 mb-2 text-gold">
            <Clock size={18} />
            <p className="kicker">Tiempo restante hasta el 1 de enero de 2030</p>
          </div>

          <div className="grid grid-cols-4 gap-3 md:gap-6 mb-6">
            <TimeUnit value={days} label="días" big />
            <TimeUnit value={hours} label="horas" />
            <TimeUnit value={minutes} label="minutos" />
            <TimeUnit value={seconds} label="segundos" pulse />
          </div>

          <p className="text-center text-slate-400 text-sm max-w-2xl mx-auto">
            Tiempo restante para que <strong className="text-purple-300">RSA-2048</strong> y{' '}
            <strong className="text-purple-300">ECC</strong> sean considerados obsoletos para
            comunicaciones de seguridad nacional según la CNSA 2.0 de la NSA.
          </p>
        </div>
      )}

      {sub === 'algos' && (
        <div className="grid md:grid-cols-2 gap-4">
          {pqcAlgorithms.map((a) => (
            <div key={a.fips} className="uees-card hover:uees-card-featured transition-shadow p-5">
              <div className="flex items-center gap-2 mb-1">
                <span className="chip-gold">{a.fips}</span>
                <span className="font-bold text-slate-100">{a.name}</span>
              </div>
              <p className="text-xs font-mono text-slate-500 mb-2">Basado en {a.base}</p>
              <p className="text-sm text-slate-300 font-semibold">{a.role}</p>
              <p className="text-sm text-slate-400 mt-1">{a.use}</p>
              <p className="text-[11px] font-mono text-gold mt-2">{a.sizes}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

function TimeUnit({ value, label, big, pulse }) {
  return (
    <div className={`relative ${pulse ? 'animate-pulse-uees' : ''} uees-card p-4 md:p-6 text-center`}>
      <p
        className={`font-mono font-extrabold text-gold tabular-nums ${
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
