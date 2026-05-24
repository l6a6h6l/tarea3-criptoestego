import { Sparkles, Target, Compass } from 'lucide-react'
import { conclusion, courseInfo } from '../data.js'

export default function Conclusion() {
  return (
    <section id="conclusion" className="section">
      <header className="reveal mb-8 max-w-3xl">
        <p className="kicker mb-2 flex items-center gap-2">
          <Sparkles size={11} /> Cierre
        </p>
        <h2 className="h-section mb-4">
          Conclusion <span className="gradient-text">grupal</span>
        </h2>
      </header>

      <div className="reveal gradient-border p-6 md:p-10 bg-gradient-to-br from-purple-500/8 via-cyan-500/5 to-green-500/8">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3 text-purple-300">
              <Target size={16} />
              <p className="kicker">Tesis central</p>
            </div>
            <p className="text-slate-100 text-lg md:text-xl font-medium leading-relaxed">
              {conclusion.headline}
            </p>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-3 text-green-300">
              <Compass size={16} />
              <p className="kicker">Recomendacion</p>
            </div>
            <p className="text-slate-100 text-lg md:text-xl font-medium leading-relaxed">
              {conclusion.recommendation}
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6">
          <p className="kicker mb-3">Lineas prometedoras para LATAM / Ecuador</p>
          <ul className="grid md:grid-cols-3 gap-3">
            {conclusion.latamLines.map((line) => (
              <li
                key={line}
                className="glass rounded-lg p-3 text-sm text-slate-200 border-l-2 border-cyan-500/40"
              >
                {line}
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-6 text-xs font-mono text-slate-500 flex flex-wrap gap-x-6 gap-y-1">
          <span>{courseInfo.courseCode}</span>
          <span>{courseInfo.program}</span>
          <span>{courseInfo.professor}</span>
          <span>{courseInfo.date}</span>
        </div>
      </div>
    </section>
  )
}
