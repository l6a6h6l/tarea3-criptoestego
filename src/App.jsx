import { useEffect } from 'react'
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
  // Indicador de progreso de scroll en la barra superior
  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      const pct = total > 0 ? (window.scrollY / total) * 100 : 0
      const bar = document.getElementById('scroll-progress')
      if (bar) bar.style.width = `${pct}%`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Reveal on-scroll para elementos con clase .reveal
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
      { threshold: 0.15 }
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <div id="scroll-progress" className="scroll-progress" />
      <Nav />
      <main>
        <Hero />
        <Foundations />
        <Comparison />
        <LSBDemo />
        <Cases />
        <Timeline />
        <Attacks />
        <QuantumCountdown />
        <Hybrid />
        <Conclusion />
        <References />
      </main>
      <Footer />
    </>
  )
}
