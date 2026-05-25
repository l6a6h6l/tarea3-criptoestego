import { useState } from 'react'
import {
  FileText, Lock, Binary, ImagePlus, Image, Wifi, UserCheck,
  ArrowRight, Layers, Gauge, Building2
} from 'lucide-react'
import { hybrid } from '../data.js'
import SubTabs from './SubTabs.jsx'

const ICONS = { FileText, Lock, Binary, ImagePlus, Image, Wifi, UserCheck }

const SUB = [
  { id: 'cascade', label: 'Arquitectura en cascada', Icon: Layers     },
  { id: 'schemes', label: 'Esquemas documentados',   Icon: Lock       },
  { id: 'metrics', label: 'Métricas de evaluación',  Icon: Gauge      },
  { id: 'apps',    label: 'Aplicaciones',            Icon: Building2  }
]

export default function Hybrid() {
  const [sub, setSub] = useState('cascade')

  return (
    <section id="hibrido" className="section">
      <header className="reveal mb-8 max-w-3xl">
        <p className="kicker mb-2">5 — Soluciones híbridas</p>
        <h2 className="h-section mb-4">
          Cripto <span className="gradient-text">+ estego</span> = defensa en profundidad
        </h2>
        <p className="text-slate-400 text-lg">
          Cachin (1998) y Provos &amp; Honeyman (2003) ya describieron la
          cascada estándar: cifrar primero para blanquear estadísticamente
          el payload, luego embeber en un cover de baja entropía.
        </p>
      </header>

      <SubTabs tabs={SUB} active={sub} onChange={setSub} ariaLabel="Sub-secciones de Híbrido" />

      {sub === 'cascade' && (
        <div className="reveal grid md:flex md:flex-wrap items-stretch gap-3">
          {hybrid.cascade.map((s, i) => {
            const Icon = ICONS[s.icon] || FileText
            const isLast = i === hybrid.cascade.length - 1
            return (
              <div key={s.step} className="flex items-center gap-3 flex-1 min-w-[160px]">
                <div className="uees-card hover:uees-card-featured transition-shadow p-3.5 flex-1 group">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-uees/40 via-gold/30 to-cyan-600/30 border border-gold/40 text-gold group-hover:scale-110 transition-transform">
                      <Icon size={14} />
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">PASO {i + 1}</span>
                  </div>
                  <p className="font-semibold text-slate-100 text-sm">{s.step}</p>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">{s.desc}</p>
                </div>
                {!isLast && (
                  <ArrowRight size={20} className="hidden md:block text-gold/60 shrink-0" />
                )}
              </div>
            )
          })}
        </div>
      )}

      {sub === 'schemes' && (
        <div className="reveal grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {hybrid.schemes.map((s) => (
            <div key={s.name} className="glass rounded-xl p-4 hover:border-gold/40 transition-colors">
              <p className="font-semibold text-slate-100 text-sm">{s.name}</p>
              <p className="text-xs text-slate-500 mt-1 font-mono">{s.source}</p>
            </div>
          ))}
        </div>
      )}

      {sub === 'metrics' && (
        <div className="reveal grid grid-cols-2 sm:grid-cols-3 gap-3">
          {hybrid.metrics.map((m) => (
            <div key={m.name} className="glass rounded-xl p-4 hover:border-gold/40 transition-colors">
              <div className="flex items-baseline justify-between">
                <p className="font-mono text-gold font-bold">{m.name}</p>
                <span className="font-mono text-green-300 text-sm">{m.value}</span>
              </div>
              <p className="text-xs text-slate-400 mt-1">{m.desc}</p>
            </div>
          ))}
        </div>
      )}

      {sub === 'apps' && (
        <ul className="reveal grid sm:grid-cols-2 gap-3">
          {hybrid.applications.map((a) => (
            <li
              key={a}
              className="glass rounded-lg p-4 text-sm text-slate-300 border-l-2 border-gold/50"
            >
              {a}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
