import { ArrowDown, GraduationCap, Users, Calendar, MapPin, Github } from 'lucide-react'
import { courseInfo, tldr } from '../data.js'

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 px-6 md:px-12 overflow-hidden">
      {/* Capa de grid */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      {/* Halos */}
      <div className="absolute top-10 -left-32 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-0 -right-32 h-96 w-96 rounded-full bg-green-500/15 blur-3xl animate-float pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Encabezado academico tipo "portada" */}
        <div className="reveal flex flex-wrap items-center gap-2 mb-6">
          <span className="chip-cyber">
            <GraduationCap size={12} />
            {courseInfo.program}
          </span>
          <span className="chip-crypto">
            {courseInfo.courseCode} - {courseInfo.courseName}
          </span>
        </div>

        <h1 className="reveal text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] mb-6">
          <span className="gradient-text">Criptologia</span>
          <span className="text-slate-500"> vs </span>
          <span className="text-slate-100">Esteganografia</span>
        </h1>

        <p className="reveal text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed mb-10">
          {tldr}
        </p>

        <div className="reveal flex flex-wrap gap-3 mb-14">
          <a href="#fundamentos" className="btn-primary">
            Empezar el recorrido <ArrowDown size={16} />
          </a>
          <a href="#demo" className="btn-ghost">
            Probar demo LSB en vivo
          </a>
          <a href="#referencias" className="btn-ghost">
            Ver referencias APA 7
          </a>
        </div>

        {/* Tarjeta portada */}
        <div className="reveal gradient-border p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="kicker mb-3">Portada</p>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-1">
                Tarea 3 - Investigacion comparada
              </h2>
              <p className="text-slate-400 mb-4">{courseInfo.university}</p>
              <p className="text-slate-400 text-sm">{courseInfo.faculty}</p>
              <p className="text-slate-400 text-sm">{courseInfo.program}</p>
              <div className="mt-5 space-y-1.5 text-sm">
                <div className="flex items-center gap-2 text-slate-300">
                  <GraduationCap size={14} className="text-cyan-400" />
                  <span className="font-medium">{courseInfo.professor}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <Calendar size={14} className="text-purple-400" />
                  {courseInfo.date}
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <MapPin size={14} className="text-green-400" />
                  {courseInfo.location}
                </div>
                {courseInfo.repo && (
                  <a
                    href={courseInfo.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-300 transition-colors"
                  >
                    <Github size={14} />
                    Repositorio del sitio
                  </a>
                )}
              </div>
            </div>
            <div>
              <p className="kicker mb-3 flex items-center gap-2">
                <Users size={12} /> Integrantes
              </p>
              <ol className="space-y-2">
                {courseInfo.team.map((name, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-slate-200"
                  >
                    <span className="font-mono text-xs h-7 w-7 rounded-md bg-slate-800/80 border border-slate-700 flex items-center justify-center text-cyan-300">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className={name.startsWith('[') ? 'text-slate-500 italic' : ''}>
                      {name}
                    </span>
                  </li>
                ))}
              </ol>
              <p className="mt-5 text-xs text-slate-500 font-mono leading-relaxed">
                * Reemplazar los placeholders en <code className="text-cyan-400">src/data.js</code> &gt;{' '}
                <code className="text-cyan-400">courseInfo.team</code>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
