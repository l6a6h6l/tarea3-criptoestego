import { GraduationCap, Heart } from 'lucide-react'
import { courseInfo } from '../data.js'

export default function Footer() {
  return (
    <footer
      className="mt-12 border-t backdrop-blur-xl"
      style={{
        borderColor: 'rgba(107,56,82,0.40)',
        background: 'linear-gradient(180deg, rgba(10,14,39,0.4) 0%, rgba(74,36,56,0.25) 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 grid md:grid-cols-2 gap-6 text-sm">
        <div>
          <p className="font-bold text-cream mb-1">
            <span className="gradient-text">crypto</span>
            <span className="text-slate-500">/</span>
            <span>stego</span>
          </p>
          <p className="text-cream/70">
            Trabajo grupal desarrollado en la Universidad de Especialidades
            Espíritu Santo (UEES) como Tarea 3 de la {courseInfo.program}.
          </p>
          <p className="text-cream/50 text-xs mt-2">{courseInfo.university}</p>
        </div>

        <div>
          <p className="kicker mb-2 flex items-center gap-1.5">
            <GraduationCap size={11} /> Curso
          </p>
          <p className="text-cream/85">{courseInfo.courseName}</p>
          <p className="text-cream/55 text-xs mt-1">
            {courseInfo.date} — {courseInfo.location}
          </p>
        </div>
      </div>

      <div
        className="border-t py-4 text-center text-xs text-cream/55 font-mono"
        style={{ borderColor: 'rgba(107,56,82,0.40)' }}
      >
        Construido con React + Vite + Tailwind{' '}
        <Heart size={10} className="inline text-uees mx-1" />
      </div>
    </footer>
  )
}
