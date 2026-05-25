import { ArrowRight, GraduationCap, Users, Calendar, MapPin, Github, BookOpen, FileText } from 'lucide-react'
import { courseInfo, tldr, team, heroStats } from '../data.js'

export default function Hero({ setTab }) {
  return (
    <section className="relative pt-12 pb-20 px-6 md:px-12 overflow-hidden">
      {/* Capa de grid */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      {/* Halo institucional UEES */}
      <div className="absolute inset-0 bg-radial-uees pointer-events-none" />
      {/* Halos cyber */}
      <div className="absolute top-10 -left-32 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-0 -right-32 h-96 w-96 rounded-full bg-green-500/15 blur-3xl animate-float pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="reveal flex flex-wrap items-center gap-2 mb-6">
          <span className="chip-gold">
            <GraduationCap size={12} />
            UEES · Maestría en Ciberseguridad · Protección de Informaciones
          </span>
        </div>

        <h1 className="reveal text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] mb-6">
          <span className="gradient-text">Criptología</span>
          <span className="text-slate-500"> vs </span>
          <span className="text-slate-100">Esteganografía</span>
        </h1>

        <p className="reveal text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed mb-10">
          {tldr}
        </p>

        <div className="reveal flex flex-wrap gap-3 mb-12">
          <button onClick={() => setTab('fundamentos')} className="btn-primary">
            Empezar el recorrido <ArrowRight size={16} />
          </button>
          <button onClick={() => setTab('demolsb')} className="btn-ghost">
            Probar el demo LSB
          </button>
          <button onClick={() => setTab('referencias')} className="btn-ghost">
            Ver la bibliografía
          </button>
        </div>

        {/* 4 stats doradas */}
        <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-14">
          {heroStats.map((s) => (
            <div
              key={s.label}
              className="uees-card p-5 md:p-6 hover:uees-card-featured transition-shadow"
            >
              <div className="text-4xl md:text-5xl font-extrabold tracking-tight text-gold tabular-nums">
                {s.value}
              </div>
              <div className="mt-2 text-[11px] md:text-sm text-slate-300/85 leading-snug">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Equipo de investigación */}
        <div className="reveal mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Users size={14} className="text-gold" />
            <p className="kicker">Equipo de investigación</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {team.map((m) => (
              <div
                key={m.initials}
                className="uees-card hover:uees-card-featured transition-shadow flex items-center gap-3 px-3 py-3"
              >
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-white text-sm flex-shrink-0 animate-pulse-uees"
                  style={{ background: m.color }}
                  aria-hidden="true"
                >
                  {m.initials}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-slate-100 leading-tight truncate">
                    {m.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Datos del trabajo */}
        <div className="reveal gradient-border-uees p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FileText size={14} className="text-gold" />
                <p className="kicker">Datos del trabajo</p>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-1">
                Tarea 3 · Investigación comparada
              </h2>
              <p className="text-slate-400 mb-4">{courseInfo.university}</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2 text-slate-300">
                  <BookOpen size={14} className="text-gold mt-0.5" />
                  <span><strong>Asignatura:</strong> {courseInfo.courseName}</span>
                </li>
                <li className="flex items-start gap-2 text-slate-300">
                  <GraduationCap size={14} className="text-purple-400 mt-0.5" />
                  <span><strong>Docente:</strong> {courseInfo.professor}</span>
                </li>
                <li className="flex items-start gap-2 text-slate-300">
                  <Calendar size={14} className="text-cyan-400 mt-0.5" />
                  <span><strong>Fecha:</strong> {courseInfo.date}</span>
                </li>
                <li className="flex items-start gap-2 text-slate-300">
                  <MapPin size={14} className="text-green-400 mt-0.5" />
                  <span><strong>Ubicación:</strong> {courseInfo.location}</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <Users size={14} className="text-gold" />
                <p className="kicker">Programa académico</p>
              </div>
              <p className="text-slate-200 font-semibold">{courseInfo.program}</p>
              <p className="text-slate-400 text-sm mt-1">{courseInfo.faculty}</p>
              <div className="mt-5 space-y-2 text-sm">
                {courseInfo.repo && (
                  <a
                    href={courseInfo.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gold hover:text-cream transition-colors"
                  >
                    <Github size={14} />
                    Repositorio del sitio
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
