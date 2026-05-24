import {
  FileText,
  Lock,
  Binary,
  ImagePlus,
  Image,
  Wifi,
  UserCheck,
  ArrowRight,
  Layers,
  Gauge
} from 'lucide-react'
import { hybrid } from '../data.js'

const ICONS = { FileText, Lock, Binary, ImagePlus, Image, Wifi, UserCheck }

export default function Hybrid() {
  return (
    <section id="hibrido" className="section">
      <header className="reveal mb-10 max-w-3xl">
        <p className="kicker mb-2">5 - Soluciones hibridas</p>
        <h2 className="h-section mb-4">
          Cripto <span className="gradient-text">+ estego</span> = defensa en profundidad
        </h2>
        <p className="text-slate-400 text-lg">
          Cachin (1998) y Provos & Honeyman (2003) ya describieron la
          cascada estandar: cifrar primero para blanquear estadisticamente
          el payload, luego embeber en un cover de baja entropia.
        </p>
      </header>

      {/* Cascada */}
      <div className="reveal mb-12">
        <p className="kicker mb-4 flex items-center gap-2">
          <Layers size={11} /> Arquitectura en cascada
        </p>
        <div className="grid md:flex md:flex-wrap items-stretch gap-3">
          {hybrid.cascade.map((s, i) => {
            const Icon = ICONS[s.icon] || FileText
            const isLast = i === hybrid.cascade.length - 1
            return (
              <div key={s.step} className="flex items-center gap-3 flex-1 min-w-[160px]">
                <div className="glass rounded-xl p-3.5 flex-1 hover:border-cyan-500/40 transition-colors group">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-purple-600/30 via-cyan-600/30 to-green-600/30 border border-slate-700 text-cyan-300 group-hover:scale-110 transition-transform">
                      <Icon size={14} />
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">PASO {i + 1}</span>
                  </div>
                  <p className="font-semibold text-slate-100 text-sm">{s.step}</p>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">{s.desc}</p>
                </div>
                {!isLast && (
                  <ArrowRight
                    size={20}
                    className="hidden md:block text-slate-600 shrink-0"
                  />
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Esquemas */}
      <div className="reveal mb-12">
        <p className="kicker mb-4">Esquemas documentados en la literatura</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {hybrid.schemes.map((s) => (
            <div
              key={s.name}
              className="glass rounded-xl p-4 hover:border-cyan-500/40 transition-colors"
            >
              <p className="font-semibold text-slate-100 text-sm">{s.name}</p>
              <p className="text-xs text-slate-500 mt-1 font-mono">{s.source}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Metricas */}
      <div className="reveal grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <p className="kicker mb-4 flex items-center gap-2">
            <Gauge size={11} /> Metricas de evaluacion
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {hybrid.metrics.map((m) => (
              <div key={m.name} className="glass rounded-xl p-4">
                <div className="flex items-baseline justify-between">
                  <p className="font-mono text-cyan-300 font-bold">{m.name}</p>
                  <span className="font-mono text-green-300 text-sm">{m.value}</span>
                </div>
                <p className="text-xs text-slate-400 mt-1">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="kicker mb-4">Aplicaciones</p>
          <ul className="space-y-2">
            {hybrid.applications.map((a) => (
              <li
                key={a}
                className="glass rounded-lg p-3 text-sm text-slate-300 border-l-2 border-purple-500/40"
              >
                {a}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
