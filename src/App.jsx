import { useEffect, useState } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Foundations from './components/Foundations.jsx'
import Comparison from './components/Comparison.jsx'
import LSBDemo from './components/LSBDemo.jsx'
import Cases from './components/Cases.jsx'
import Timeline from './components/Timeline.jsx'
import Attacks from './components/Attacks.jsx'
import QuantumCountdown from './components/QuantumCountdown.jsx'
import Hybrid from './components/Hybrid.jsx'
import Conclusion from './components/Conclusion.jsx'
import References from './components/References.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [tab, setTab] = useState('inicio')

  // Cambio de tab → vuelve arriba (cada vista arranca desde el top).
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [tab])

  // Re-aplica el reveal-on-scroll cuando entra una vista nueva.
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in-view'))
      return
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in-view')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [tab])

  return (
    <>
      <Nav tab={tab} setTab={setTab} />
      <main className="pt-24">
        {tab === 'inicio'      && <Hero setTab={setTab} />}
        {tab === 'fundamentos' && <Foundations />}
        {tab === 'comparativa' && <Comparison />}
        {tab === 'demolsb'     && <LSBDemo />}
        {tab === 'casos'       && <Cases />}
        {tab === 'timeline'    && <Timeline />}
        {tab === 'ataques'     && <Attacks />}
        {tab === 'cuantica'    && <QuantumCountdown />}
        {tab === 'hibrido'     && <Hybrid />}
        {tab === 'conclusion'  && <Conclusion />}
        {tab === 'referencias' && <References />}
      </main>
      <Footer />
    </>
  )
}
