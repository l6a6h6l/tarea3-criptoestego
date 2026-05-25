import { useEffect, useState } from 'react'
import {
  Menu, X, Home, BookMarked, GitCompare, Sparkles as DemoIcon,
  Briefcase, Clock, Sword, Atom, Layers, Flag, BookOpen
} from 'lucide-react'
import UEESLogo from './UEESLogo.jsx'

const TABS = [
  { id: 'inicio',      label: 'Inicio',       Icon: Home       },
  { id: 'fundamentos', label: 'Fundamentos',  Icon: BookMarked },
  { id: 'comparativa', label: 'Comparativa',  Icon: GitCompare },
  { id: 'demolsb',     label: 'Demo LSB',     Icon: DemoIcon   },
  { id: 'casos',       label: 'Casos',        Icon: Briefcase  },
  { id: 'timeline',    label: 'Timeline',     Icon: Clock      },
  { id: 'ataques',     label: 'Ataques',      Icon: Sword      },
  { id: 'cuantica',    label: 'Cuántica',     Icon: Atom       },
  { id: 'hibrido',     label: 'Híbrido',      Icon: Layers     },
  { id: 'conclusion',  label: 'Conclusión',   Icon: Flag       },
  { id: 'referencias', label: 'Referencias',  Icon: BookOpen   }
]

export default function Nav({ tab, setTab }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const headerStyle = scrolled
    ? {
        background:
          'linear-gradient(180deg, rgba(107,56,82,0.90) 0%, rgba(10,14,39,0.94) 100%)',
        borderBottom: '1px solid rgba(212,165,116,0.28)',
        boxShadow: '0 6px 24px -10px rgba(0,0,0,0.6)'
      }
    : {
        background:
          'linear-gradient(180deg, rgba(107,56,82,0.55) 0%, rgba(10,14,39,0.65) 100%)',
        borderBottom: '1px solid rgba(212,165,116,0.18)'
      }

  const select = (id) => {
    setTab(id)
    setOpen(false)
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all backdrop-blur-xl"
      style={headerStyle}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between gap-4">
        <button
          onClick={() => select('inicio')}
          className="flex items-center gap-3 md:gap-4 group min-w-0 text-left"
          aria-label="Volver al inicio"
        >
          <UEESLogo className="h-12 md:h-14 flex-shrink-0" />
          <span className="hidden sm:block w-px h-12 bg-gold/40" aria-hidden="true" />
          <span className="hidden sm:flex flex-col">
            <span className="font-bold tracking-tight text-lg leading-tight">
              <span className="gradient-text">crypto</span>
              <span className="text-slate-500">/</span>
              <span className="text-slate-100">stego</span>
            </span>
            <span className="text-[11px] text-cream/70 mt-0.5">
              Criptología vs Esteganografía
            </span>
          </span>
        </button>

        {/* Desktop tabs */}
        <div className="hidden xl:flex items-center gap-0.5 overflow-x-auto max-w-[60%]">
          {TABS.map(({ id, label, Icon }) => {
            const active = tab === id
            return (
              <button
                key={id}
                onClick={() => select(id)}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-sm whitespace-nowrap transition-colors border ${
                  active
                    ? 'text-gold bg-gold/15 border-gold/45'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50 border-transparent'
                }`}
                aria-current={active ? 'page' : undefined}
              >
                <Icon size={14} />
                {label}
              </button>
            )
          })}
        </div>

        <button
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          className="xl:hidden text-slate-200 hover:text-gold flex-shrink-0"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile/tablet drawer */}
      {open && (
        <div
          className="xl:hidden border-t backdrop-blur-xl"
          style={{
            background:
              'linear-gradient(180deg, rgba(107,56,82,0.96) 0%, rgba(10,14,39,0.97) 100%)',
            borderColor: 'rgba(212,165,116,0.28)'
          }}
        >
          <div className="px-4 py-3 grid grid-cols-2 sm:grid-cols-3 gap-1">
            {TABS.map(({ id, label, Icon }) => {
              const active = tab === id
              return (
                <button
                  key={id}
                  onClick={() => select(id)}
                  className={`inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm border transition-colors ${
                    active
                      ? 'text-gold bg-gold/15 border-gold/45'
                      : 'text-slate-200 hover:text-white hover:bg-slate-800/60 border-transparent'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  <Icon size={14} />
                  {label}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </nav>
  )
}
