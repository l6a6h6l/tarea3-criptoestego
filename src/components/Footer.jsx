import { Github, GraduationCap, Heart } from 'lucide-react'
import { courseInfo } from '../data.js'

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-800/80 bg-base-900/60 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 grid md:grid-cols-3 gap-6 text-sm">
        <div>
          <p className="font-bold text-slate-100 mb-1">
            <span className="gradient-text">crypto</span>
            <span className="text-slate-500">/</span>
            <span>stego</span>
          </p>
          <p className="text-slate-400">
            Sitio interactivo para la Tarea 3 del curso{' '}
            <span className="font-mono text-cyan-300">{courseInfo.courseCode}</span>.
          </p>
          <p className="text-slate-500 text-xs mt-2">{courseInfo.university}</p>
        </div>

        <div>
          <p className="kicker mb-2 flex items-center gap-1.5">
            <GraduationCap size={11} /> Curso
          </p>
          <p className="text-slate-300">{courseInfo.courseName}</p>
          <p className="text-slate-500 text-xs mt-1">{courseInfo.professor}</p>
          <p className="text-slate-500 text-xs">{courseInfo.date} - {courseInfo.location}</p>
        </div>

        <div>
          <p className="kicker mb-2">Enlaces</p>
          <ul className="space-y-1">
            {courseInfo.repo && (
              <li>
                <a
                  href={courseInfo.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300"
                >
                  <Github size={13} /> Codigo fuente del sitio
                </a>
              </li>
            )}
            {courseInfo.pdfReport && (
              <li>
                <a
                  href={courseInfo.pdfReport}
                  className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300"
                >
                  Descargar informe (PDF)
                </a>
              </li>
            )}
            <li>
              <a href="#top" className="text-slate-400 hover:text-slate-200">
                Volver al inicio
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800/80 py-4 text-center text-xs text-slate-500 font-mono">
        Construido con React + Vite + Tailwind <Heart size={10} className="inline text-purple-400 mx-1" /> Uso academico - MACS UEES
      </div>
    </footer>
  )
}
