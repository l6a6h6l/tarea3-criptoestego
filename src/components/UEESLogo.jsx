// Recreacion vectorial del logotipo UEES (Universidad Espiritu Santo).
// Sin imagenes externas. Aceptado en escalas h-10 a h-16.
export default function UEESLogo({ className = 'h-12 md:h-14' }) {
  return (
    <svg
      viewBox="0 0 460 130"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Universidad de Especialidades Espíritu Santo"
    >
      {/* Letra U arquitectónica geométrica */}
      <g fill="white">
        <rect x="8"  y="8"  width="22" height="110" rx="1" />
        <rect x="8"  y="96" width="90" height="22"  rx="1" />
        <rect x="76" y="8"  width="22" height="110" rx="1" />
      </g>
      {/* Separador vertical */}
      <rect x="112" y="12" width="3" height="106" fill="white" opacity="0.85" />
      {/* Texto principal */}
      <text
        x="128" y="82"
        fontFamily="Inter, system-ui, -apple-system, sans-serif"
        fontSize="72" fontWeight="900"
        fill="white" letterSpacing="2"
      >UEES</text>
      {/* Bajada */}
      <text
        x="130" y="112"
        fontFamily="Inter, system-ui, -apple-system, sans-serif"
        fontSize="17" fontWeight="700"
        fill="white" opacity="0.92"
      >Universidad Espíritu Santo</text>
    </svg>
  )
}
