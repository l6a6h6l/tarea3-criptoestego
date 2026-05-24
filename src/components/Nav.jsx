import { useEffect, useState } from 'react'
import { Lock, Menu, X } from 'lucide-react'

const links = [
  { href: '#fundamentos', label: 'Fundamentos' },
  { href: '#comparativa', label: 'Comparativa' },
  { href: '#demo', label: 'Demo LSB' },
  { href: '#casos', label: 'Casos' },
  { href: '#timeline', label: 'Timeline' },
  { href: '#ataques', label: 'Ataques' },
  { href: '#cuantica', label: 'Cuantica' },
  { href: '#hibrido', label: 'Hibrido' },
  { href: '#conclusion', label: 'Conclusion' },
  { href: '#referencias', label: 'Referencias' }
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        scrolled
          ? 'bg-base-900/85 backdrop-blur-xl border-b border-slate-800/80'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 via-cyan-600 to-green-600">
            <Lock size={18} className="text-white" />
          </span>
          <span className="font-bold tracking-tight">
            <span className="gradient-text">crypto</span>
            <span className="text-slate-500">/</span>
            <span className="text-slate-100">stego</span>
          </span>
          <span className="hidden md:inline font-mono text-[10px] text-slate-500 ml-2 border border-slate-800 px-1.5 py-0.5 rounded">
            MACS0530
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-1.5 rounded-md text-sm text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <button
          aria-label="Abrir menu"
          className="lg:hidden text-slate-300 hover:text-white"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-slate-800/80 bg-base-900/95 backdrop-blur-xl">
          <div className="px-4 py-3 grid grid-cols-2 gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded-md text-sm text-slate-300 hover:text-white hover:bg-slate-800/60"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
