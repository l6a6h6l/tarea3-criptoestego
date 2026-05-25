import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import UEESLogo from './UEESLogo.jsx'

const links = [
  { href: '#fundamentos', label: 'Fundamentos' },
  { href: '#comparativa', label: 'Comparativa' },
  { href: '#demo',        label: 'Demo LSB' },
  { href: '#casos',       label: 'Casos' },
  { href: '#timeline',    label: 'Timeline' },
  { href: '#ataques',     label: 'Ataques' },
  { href: '#cuantica',    label: 'Cuántica' },
  { href: '#hibrido',     label: 'Híbrido' },
  { href: '#conclusion',  label: 'Conclusión' },
  { href: '#referencias', label: 'Referencias' }
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Resalta el link de la sección visible
  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1))
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)
    if (!sections.length || !('IntersectionObserver' in window)) return
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveId(visible.target.id)
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.2, 0.5, 1] }
    )
    sections.forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  const headerStyle = scrolled
    ? {
        background:
          'linear-gradient(180deg, rgba(107,56,82,0.90) 0%, rgba(10,14,39,0.94) 100%)',
        borderBottom: '1px solid rgba(212,165,116,0.28)',
        boxShadow: '0 6px 24px -10px rgba(0,0,0,0.6)'
      }
    : { background: 'transparent' }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all backdrop-blur-xl"
      style={headerStyle}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-3 md:gap-4 group min-w-0">
          <UEESLogo className="h-12 md:h-14 flex-shrink-0" />
          <span className="hidden sm:block w-px h-12 bg-gold/40" aria-hidden="true" />
          <span className="hidden sm:flex flex-col">
            <span className="font-bold tracking-tight text-lg leading-tight">
              <span className="gradient-text">crypto</span>
              <span className="text-slate-500">/</span>
              <span className="text-slate-100">stego</span>
            </span>
            <span className="font-mono text-[10px] text-gold/80 uppercase tracking-wider mt-0.5">
              MACS0530 · UEES
            </span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-0.5">
          {links.map((l) => {
            const isActive = activeId === l.href.slice(1)
            return (
              <a
                key={l.href}
                href={l.href}
                className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
                  isActive
                    ? 'text-gold bg-gold/15 border border-gold/40'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60 border border-transparent'
                }`}
              >
                {l.label}
              </a>
            )
          })}
        </div>

        <button
          aria-label="Abrir menú"
          className="lg:hidden text-slate-300 hover:text-gold flex-shrink-0"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div
          className="lg:hidden border-t backdrop-blur-xl"
          style={{
            background: 'linear-gradient(180deg, rgba(107,56,82,0.95) 0%, rgba(10,14,39,0.97) 100%)',
            borderColor: 'rgba(212,165,116,0.28)'
          }}
        >
          <div className="px-4 py-3 grid grid-cols-2 gap-1">
            {links.map((l) => {
              const isActive = activeId === l.href.slice(1)
              return (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`px-3 py-2 rounded-md text-sm ${
                    isActive
                      ? 'text-gold bg-gold/15 border border-gold/40'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {l.label}
                </a>
              )
            })}
          </div>
        </div>
      )}
    </nav>
  )
}
