// ============================================================================
// DATOS DEL PROYECTO - Tarea 3
// Las referencias APA viven en src/components/References.jsx (JSX inline).
// ============================================================================

export const courseInfo = {
  university: 'Universidad de Especialidades Espíritu Santo (UEES)',
  faculty: 'Facultad de Postgrado',
  program: 'Maestría en Ciberseguridad',
  courseName: 'Protección de Informaciones — Ciberseguridad',
  professor: 'Dr. Jorge Luis Zambrano Martínez, Ph.D.',
  date: 'Mayo 2026',
  location: 'Samborondón – Ecuador',
  pdfReport: null // ej: '/informe.pdf' si subes el PDF a /public
}

// ============================================================================
// EQUIPO DE INVESTIGACION (4 integrantes con iniciales y color)
// ============================================================================
export const team = [
  { name: 'Luis Alberto Herrera-Lara',       initials: 'LH', color: '#A855F7' },
  { name: 'Joel Alexander Delgado Figueroa', initials: 'JD', color: '#22C55E' },
  { name: 'Homar Isaac Cordovilla Cabezas',  initials: 'HC', color: '#06B6D4' },
  { name: 'Bélgica Amarilis Estrada Cela',   initials: 'BE', color: '#D4A574' }
]

// ============================================================================
// TL;DR del hero
// ============================================================================
export const tldr =
  'La criptografía vuelve ilegible el contenido del mensaje. La esteganografía oculta que el mensaje exista. Las dos asumen un adversario activo, pero resuelven problemas distintos: una hace ilegible lo visible, la otra hace invisible lo existente. La literatura reciente (Almomani et al., 2022; Boroumand et al., 2019; Cogranne et al., 2020) las usa cada vez más en cascada, no como alternativas.'

// ============================================================================
// HERO STATS (4 cards doradas)
// ============================================================================
export const heroStats = [
  { value: '40',   label: 'Referencias indexadas (IEEE, ACM, NIST, arXiv)' },
  { value: '12',   label: 'Casos de stegomalware documentados (2011–2024)' },
  { value: '3',    label: 'Estándares NIST FIPS poscuánticos (2024)' },
  { value: '2030', label: 'Año límite CNSA 2.0 para migración PQC' }
]

// ============================================================================
// FUNDAMENTOS - Tarjetas con etimologia, modelos y taxonomia
// ============================================================================
export const foundations = {
  crypto: {
    name: 'Criptología',
    etym: 'gr. kryptos "oculto" + logos "estudio"',
    summary:
      'Estudia el diseño de cifradores (criptografía) y su ruptura (criptoanálisis). El ciphertext queda a la vista, pero sin la clave resulta ininteligible.',
    models: [
      { name: 'Principio de Kerckhoffs (1883)', desc: 'La seguridad reside en la clave, no en mantener oculto el algoritmo.' },
      { name: 'Shannon (1949)', desc: 'Confusión y difusión como propiedades de diseño; el one-time pad ofrece secreto perfecto.' }
    ],
    taxonomy: [
      { label: 'Simétrica', value: 'DES (obsoleto), 3DES (deprecado), AES (FIPS 197), ChaCha20-Poly1305 (RFC 8439, TLS 1.3).' },
      { label: 'Asimétrica', value: 'RSA (factorización), ECC (Curve25519, secp256r1), ElGamal, Diffie-Hellman.' },
      { label: 'Hash', value: 'SHA-2, SHA-3/Keccak (FIPS 202), BLAKE2/3.' },
      {
        label: 'Poscuántica (PQC)',
        value:
          'NIST publicó el 13-08-2024 FIPS 203 ML-KEM (Kyber), FIPS 204 ML-DSA (Dilithium) y FIPS 205 SLH-DSA (SPHINCS+). FALCON quedará como FIPS 206. HQC fue seleccionado el 11-03-2025. CNSA 2.0 (NSA) fija la migración entre 2030 y 2033.'
      }
    ]
  },
  stego: {
    name: 'Esteganografía',
    etym: 'gr. steganos "cubierto" + graphein "escribir"',
    summary:
      'Oculta el mensaje dentro de un portador de apariencia normal. Si un analista lo extrae, el contenido queda en claro: ya no hay una segunda capa que lo proteja.',
    models: [
      {
        name: 'Problema del Prisionero (Simmons, CRYPTO 1983)',
        desc: 'Alice y Bob coordinan una fuga a través de un canal monitoreado por el guardia Willie.'
      },
      {
        name: 'Anderson & Petitcolas (1998, IEEE JSAC)',
        desc: 'On the Limits of Steganography. Derivó las cotas teóricas de imperceptibilidad que se siguen usando como referencia.'
      }
    ],
    taxonomy: [
      { label: 'Multimedia', value: 'Imagen (LSB, paleta, DCT/DWT), audio (LSB, fase, eco), video (HEVC, H.264), texto.' },
      { label: 'Lingüística', value: 'Acrósticos, sustitución sintáctica.' },
      { label: 'De red', value: 'Covert channels TCP/IP, ICMP, DNS, HTTP, VoIP (Mazurczyk), IPv6 ext. headers.' },
      { label: 'JPEG clásico', value: 'JSteg, OutGuess (Provos, 2001), F5 (Westfeld, 2001), nsF5.' },
      {
        label: 'Adaptativa (SOTA)',
        value:
          'HUGO (Pevný, 2010), WOW (Holub & Fridrich, 2012), S/J-UNIWARD (2014), HILL (Li, 2014), MiPod (Sedighi, 2016). Syndrome-trellis codes (Filler, 2011).'
      }
    ]
  }
}

// Modelos teoricos (sub-seccion "Modelos teoricos" en Fundamentos)
export const theoreticalModels = [
  {
    year: 1883,
    author: 'Kerckhoffs',
    title: 'Principio de Kerckhoffs',
    abstract: 'La seguridad de un sistema criptográfico debe depender solo del secreto de la clave, nunca del secreto del algoritmo. El adversario, por defecto, conoce el sistema.',
    impact: 'Base de la criptografía abierta y de la evaluación pública de algoritmos.'
  },
  {
    year: 1949,
    author: 'Shannon',
    title: 'Communication Theory of Secrecy Systems',
    abstract: 'Formaliza confusión y difusión, y demuestra que el one-time pad ofrece secreto perfecto (information-theoretic secrecy).',
    impact: 'Cimiento matemático de la criptografía moderna.'
  },
  {
    year: 1983,
    author: 'Simmons',
    title: 'Problema del Prisionero',
    abstract: 'Alice y Bob, presos, coordinan una fuga mediante mensajes que el guardia Willie monitorea. Define formalmente el escenario esteganográfico.',
    impact: 'Modelo de referencia en el análisis formal de esteganografía.'
  },
  {
    year: 1998,
    author: 'Anderson & Petitcolas',
    title: 'On the Limits of Steganography',
    abstract: 'Cotas teóricas de imperceptibilidad y capacidad. Vincula la teoría de la información con el estegoanálisis.',
    impact: 'Marco aún citado para evaluar esquemas modernos.'
  },
  {
    year: 1998,
    author: 'Cachin',
    title: 'An Information-Theoretic Model for Steganography',
    abstract: 'Define ε-seguridad esteganográfica mediante divergencia KL entre la distribución del cover y la del stego.',
    impact: 'Equivalente esteganográfico del modelo de Shannon en criptografía.'
  }
]

// ============================================================================
// COMPARATIVA - 9 dimensiones
// ============================================================================
export const comparisonTable = [
  {
    dim: 'Objetivo',
    crypto: 'Confidencialidad, integridad y autenticación.',
    stego: 'Imperceptibilidad: encubrir que el mensaje existe.'
  },
  {
    dim: 'Garantía formal',
    crypto: 'Secreto computacional (Shannon, 1949) sobre problemas duros: factorización, log discreto, LWE.',
    stego: 'Indetectabilidad estadística (Cachin, 1998): ε-seguridad mediante divergencia KL.'
  },
  {
    dim: 'Detectabilidad',
    crypto: 'El ciphertext se detecta fácil (alta entropía), pero queda ilegible.',
    stego: 'Idealmente indetectable. Si un analista lo detecta, la defensa recae sobre la criptografía subyacente.'
  },
  {
    dim: 'Overhead',
    crypto: 'Bajo o medio. AES-128 con AES-NI ~1 ciclo/byte; RSA-2048 toma milisegundos.',
    stego: 'Variable. LSB es O(n). UNIWARD/HUGO requieren mapas de costos costosos de calcular.'
  },
  {
    dim: 'Capacidad',
    crypto: 'Sin pérdida: ciphertext ≈ plaintext.',
    stego: 'Restringida por el bpp del cover. LSB tolera 0.1–4 bpp; los esquemas adaptativos seguros se quedan en ≤0.4 bpp.'
  },
  {
    dim: 'Métricas',
    crypto: 'NIST SP 800-22, IND-CCA2.',
    stego: 'PSNR (>40 dB), SSIM (≥0.98), MSE (~0), NCC, BER, bpp.'
  },
  {
    dim: 'Resiliencia cuántica',
    crypto: 'Shor rompe RSA/ECC; Grover reduce AES-256/SHA-3. La transición a PQC ya está en marcha.',
    stego: 'Casi no se ve afectada: el cover es la barrera, no un problema matemático.'
  },
  {
    dim: 'Marco legal',
    crypto: 'Bien regulado (eIDAS, FIPS, eSign Act). Algunos países imponen export controls.',
    stego: 'Zona gris. En regímenes autoritarios el solo hecho de ocultar puede ser delito.'
  },
  {
    dim: 'Punto de falla',
    crypto: 'Mala gestión de claves, side-channels y PRNG defectuosos.',
    stego: 'Análisis estadístico (χ², RS, SPAM/SRM, CNN) y covers de baja entropía.'
  }
]

// Convergencias (subsection "Convergencias" de Comparativa)
export const convergences = [
  'Las dos asumen un adversario activo y modelan formalmente su capacidad: Kerckhoffs (1883) para criptografía, Simmons (1983) para esteganografía.',
  'Ambas dependen de la solidez de su primitiva subyacente. La criptografía clásica cae frente a Shor (de ahí la migración a PQC); la esteganografía cae frente a detectores CNN como SRNet (Boroumand et al., 2019).',
  'En arquitecturas en cascada (cripto → estego), el ciphertext de alta entropía se empaqueta dentro de un cover de baja sospecha. Cubre los dos objetivos en una misma transmisión.',
  'En el estegoanálisis actual, la criptografía es el cuarto pilar. Aun cuando el detector identifica el portador, el contenido extraído sigue siendo ininteligible.'
]

export const closingQuote = {
  text: 'Combinar cifrado autenticado con esteganografía adaptativa cubre dos garantías que ninguna de las dos disciplinas puede ofrecer por separado: la ininteligibilidad del contenido y la imperceptibilidad de su existencia.',
  source: 'Síntesis del equipo a partir de Cachin (1998), Anderson y Petitcolas (1998) y Almomani et al. (2022).'
}

// ============================================================================
// CASOS DE USO - reales/hipoteticos legitimos
// ============================================================================
export const useCases = {
  crypto: [
    {
      title: 'TLS 1.3 (RFC 8446)',
      detail: 'X25519 / secp256r1 + AES-GCM o ChaCha20-Poly1305. Cifra alrededor del 76% de las páginas web (Web Almanac 2025, HTTP Archive).'
    },
    {
      title: 'Signal Protocol',
      detail:
        'X3DH sobre Curve25519 + Double Ratchet (Marlinspike y Perrin, 2016). Usado por Signal, WhatsApp, Google Messages (RCS) y Facebook Messenger. Incorporó PQXDH en 2023 y SPQR (Triple Ratchet) el 02-10-2025.'
    },
    { title: 'Blockchain', detail: 'Bitcoin firma con ECDSA sobre secp256k1 y hashes SHA-256.' },
    { title: 'VPNs', detail: 'WireGuard: Curve25519 + ChaCha20-Poly1305 + BLAKE2s.' },
    {
      title: 'Cumplimiento normativo',
      detail: 'GDPR art. 32, LOPDGDD, HIPAA. Las implementaciones requieren validación FIPS 140.'
    }
  ],
  stego: [
    {
      title: 'Watermarking digital y derechos de autor',
      detail: 'Cox, Miller y Bloom (2007). Usado en Cinavia, Microsoft Office y fotografía profesional.'
    },
    {
      title: 'Autenticación y trazabilidad documental',
      detail: 'Anderson y Petitcolas (1998) mencionan los reportes del Reino Unido bajo Thatcher.'
    },
    {
      title: 'Comunicaciones bajo vigilancia',
      detail: 'Periodismo y activismo en regímenes con censura. Herramientas: OpenStego, Steghide.'
    },
    { title: 'Forense y antiforense', detail: 'Ocultación y detección de evidencia digital.' },
    { title: 'DRM', detail: 'Marcas robustas para gestión de derechos.' }
  ]
}

// ============================================================================
// TIMELINE STEGOMALWARE - casos documentados
// type: 'apt-state' | 'banking' | 'exploit-kit' | 'crimeware'
// ============================================================================
export const stegomalwareTimeline = [
  {
    year: 2011,
    name: 'Duqu',
    type: 'apt-state',
    technique: 'LSB en JPEG',
    coverFormat: 'JPEG',
    source: 'CrySyS Lab, Kaspersky, Symantec',
    details:
      'APT estatal vinculada a Stuxnet. Robaba información de sistemas industriales y la exfiltraba dentro de imágenes JPEG enviadas a sus servidores C2.',
    cves: []
  },
  {
    year: 2014,
    name: 'ZeusVM / KINS',
    type: 'banking',
    technique: 'Configuración en JPEG (Base64 + RC4 + XOR)',
    coverFormat: 'JPEG',
    source: 'Segura, Malwarebytes (feb. 2014)',
    details:
      'Banking trojan que descarga su archivo de configuración escondido dentro de imágenes JPEG aparentemente normales alojadas en servidores comprometidos.',
    cves: []
  },
  {
    year: 2014,
    name: 'Lurk Downloader',
    type: 'crimeware',
    technique: 'URLs en BMPs blancos vía LSB + XOR',
    coverFormat: 'BMP',
    source: 'Stone-Gross, Dell SecureWorks',
    details:
      'Aproximadamente 350.000 víctimas. Descargaba URLs de payload escondidas en BMPs aparentemente vacíos, codificadas con LSB y cifradas con XOR.',
    cves: []
  },
  {
    year: 2015,
    name: 'Stegoloader / Gatak',
    type: 'crimeware',
    technique: 'Módulo principal en PNG, RC4 en memoria',
    coverFormat: 'PNG',
    source: 'Dell SecureWorks',
    details:
      'Afectó sobre todo a los sectores sanitario y educativo. El loader inicial era chico; el módulo principal viajaba dentro de un PNG y se descifraba en memoria.',
    cves: []
  },
  {
    year: 2015,
    name: 'Equation Group',
    type: 'apt-state',
    technique: 'Múltiples técnicas esteganográficas',
    coverFormat: 'varios',
    source: 'Kaspersky GReAT',
    details:
      'Atribuida a un actor estatal con capacidad de tier-1. Usó esteganografía para ocultar payloads y comunicaciones C2 en varios formatos.',
    cves: []
  },
  {
    year: 2016,
    name: 'Stegano / AdGholas / Astrum EK',
    type: 'exploit-kit',
    technique: 'JS en canal alfa de PNGs publicitarios',
    coverFormat: 'PNG (alpha)',
    source: 'ESET (Lipovsky, dic. 2016)',
    details:
      'Más de un millón de usuarios expuestos a través de banners publicitarios. El código JavaScript malicioso viajaba en el canal alfa de imágenes PNG servidas como anuncios.',
    cves: ['CVE-2016-0162', 'CVE-2015-8651', 'CVE-2016-1019', 'CVE-2016-4117']
  },
  {
    year: 2016,
    name: 'Sundown EK',
    type: 'exploit-kit',
    technique: 'PNG (imitando Stegano)',
    coverFormat: 'PNG',
    source: 'Bleeping Computer',
    details:
      'Exploit kit que copió la técnica de Stegano para entregar exploits ocultos dentro de PNGs aparentemente normales.',
    cves: []
  },
  {
    year: 2019,
    name: 'Turla LightNeuron',
    type: 'apt-state',
    technique: 'Comandos en PDF/JPG sobre MS Exchange',
    coverFormat: 'PDF / JPG',
    source: 'Faou, ESET',
    details:
      'APT ruso. Backdoor para Microsoft Exchange que recibía comandos C2 escondidos en attachments PDF y JPG de correos enviados al servidor comprometido.',
    cves: []
  },
  {
    year: 2020,
    name: 'MontysThree (MT3)',
    type: 'apt-state',
    technique: 'Esteganografía custom en BMP + 3DES bajo RSA',
    coverFormat: 'BMP',
    source: 'Legezo, Kaspersky GReAT',
    details:
      'Espionaje industrial. Las comunicaciones C2 viajaban sobre Google, Microsoft y Dropbox. El payload se encapsulaba dentro de un BMP con un esquema esteganográfico propietario.',
    cves: []
  },
  {
    year: 2022,
    name: 'Worok',
    type: 'apt-state',
    technique: 'PowerShell + .NET stealer en PNG con LSB',
    coverFormat: 'PNG',
    source: 'Avast, ESET',
    details:
      'Abusa Dropbox como canal de comando y control. Embebe código PowerShell y un stealer .NET dentro de PNGs mediante LSB.',
    cves: []
  },
  {
    year: 2022,
    name: 'Witchetty / Stegmap',
    type: 'apt-state',
    technique: 'Backdoor en BMP del logo de Windows en GitHub',
    coverFormat: 'BMP',
    source: 'Symantec',
    details:
      'Atribuido a TA410 / Cicada / APT10. Tras explotar ProxyShell y ProxyLogon, alojó un backdoor dentro del logo de Windows en un repositorio público de GitHub.',
    cves: []
  },
  {
    year: 2023,
    name: 'Lumma Stealer',
    type: 'crimeware',
    technique: 'LSB para recuperar payloads',
    coverFormat: 'PNG',
    source: 'Varias firmas AV',
    details:
      'Info-stealer moderno que usa LSB para descargar y reconstruir payloads adicionales evadiendo la detección en redes corporativas.',
    cves: []
  }
]

// ============================================================================
// CAVEAT cautelar - Al-Qaeda pre-9/11
// ============================================================================
export const stegoMyth = {
  title: 'El mito Al-Qaeda pre-9/11',
  body:
    'El supuesto uso de esteganografía por Al-Qaeda que reportó USA Today en febrero de 2001 nunca se confirmó técnicamente. Provos y Honeyman (2003) analizaron millones de imágenes con StegDetect y StegBreak y no encontraron evidencia. Conviene citar el caso con esa precaución.'
}

// ============================================================================
// ATAQUES - criptoanalisis, amenaza cuantica, estegoanalisis
// ============================================================================
export const attacks = {
  crypto: {
    models: [
      'Ciphertext-only',
      'Known-plaintext (rompió Enigma)',
      'Chosen-plaintext (CPA)',
      'Chosen-ciphertext (CCA / CCA2, estándar moderno)',
      'Man-in-the-Middle'
    ],
    techniques: [
      { name: 'Fuerza bruta', ref: 'Espacio de claves' },
      { name: 'Análisis de frecuencia', ref: 'Clásico, sustituciones' },
      { name: 'Diferencial', ref: 'Biham y Shamir (1991) sobre DES' },
      { name: 'Lineal', ref: 'Matsui (1993)' },
      { name: 'Algebraico', ref: 'Sistemas no lineales sobre GF(2)' },
      { name: 'Cumpleaños', ref: 'Hashes ~2^(n/2)' },
      { name: 'Side-channel: timing', ref: 'Kocher (1996)' },
      { name: 'Side-channel: DPA', ref: 'Kocher, Jaffe y Jun (1999)' },
      { name: 'Side-channel: cache', ref: 'FLUSH+RELOAD, clase Spectre/Meltdown' }
    ],
    quantum: [
      {
        algo: 'Shor (1994)',
        impact: 'Factoriza enteros y resuelve log discreto en tiempo polinómico. Rompe RSA, ECC, ECDH y DSA.'
      },
      {
        algo: 'Gidney (Google Quantum AI, arXiv:2505.15917, mayo 2025)',
        impact:
          'RSA-2048 podría romperse "en menos de una semana con menos de 1M de qubits ruidosos". Es una reducción de 20× frente a Gidney y Ekerå (2019), que estimaban ~20M qubits.'
      },
      {
        algo: 'Grover (1996)',
        impact:
          'Aceleración cuadrática. Lleva AES-128 a fuerza efectiva de 64 bits y SHA-256 a 128 bits. NIST recomienda ≥256 bits simétricos para resistencia poscuántica.'
      },
      {
        algo: 'HNDL (Harvest Now, Decrypt Later)',
        impact: 'El adversario captura tráfico hoy con la intención de descifrarlo cuando exista un computador cuántico utilizable.'
      }
    ]
  },
  stego: {
    classic: [
      { name: 'Chi-cuadrado', ref: 'Westfeld y Pfitzmann (2000). Rompió EzStego, JSteg, Steganos y S-Tools.' },
      { name: 'RS Analysis', ref: 'Fridrich, Goljan y Du (2001)' },
      { name: 'Sample Pair Analysis', ref: 'Dumitrescu, Wu y Wang (2003)' }
    ],
    preDL: [
      { name: 'SRM (34671 features)', ref: 'Fridrich y Kodovský (2012), IEEE TIFS' },
      { name: 'Ensemble Classifier', ref: 'Kodovský, Fridrich y Holub (2012)' }
    ],
    deepLearning: [
      { name: 'Xu-Net (2016)', ref: 'Primera CNN aplicada a estegoanálisis' },
      { name: 'Ye-Net (2017)', ref: 'IEEE TIFS 12(11)' },
      { name: 'Yedroudj-Net (2018)', ref: 'ICASSP' },
      { name: 'SRNet (2019)', ref: 'Boroumand, Chen y Fridrich (IEEE TIFS). Referencia vigente.' }
    ],
    limits:
      'Los detectores fallan a payloads bajos (≤0.1 bpp con QF 95) y sufren cover-source mismatch, el problema central de ALASKA #2 (WIFS, 2020).'
  },
  latam: [
    { ref: 'Cuzco, Mantilla, Méndez y Ávila (2019), ESPOCH', detail: 'Revista Espacios 40(38). Esquema híbrido cripto–LSB.' },
    {
      ref: 'Rosas, Izurieta y Buenaño (2024), Universidad Central del Ecuador',
      detail: 'Polo del Conocimiento 9(3). Revisión sistemática.'
    },
    { ref: 'Velásquez-Moreira, Molina-Sabando y Briones-Véliz (2017), ULEAM', detail: 'Técnicas en audio e imagen.' }
  ]
}

// ============================================================================
// HIBRIDOS - integracion cripto-esteganografica
// ============================================================================
export const hybrid = {
  cascade: [
    { step: 'Plaintext', icon: 'FileText', desc: 'Mensaje en claro.' },
    { step: 'AES-GCM / ChaCha20-Poly1305', icon: 'Lock', desc: 'Cifrado autenticado: alta entropía e integridad.' },
    { step: 'Ciphertext', icon: 'Binary', desc: 'Bytes pseudoaleatorios, indistinguibles de ruido.' },
    { step: 'Embebido LSB / DCT / S-UNIWARD', icon: 'ImagePlus', desc: 'La esteganografía adaptativa minimiza la distorsión detectable.' },
    { step: 'Stego cover', icon: 'Image', desc: 'Imagen de apariencia normal, lista para transmisión.' },
    { step: 'Canal público', icon: 'Wifi', desc: 'Email, redes sociales o cloud storage. No levanta sospechas.' },
    { step: 'Receptor', icon: 'UserCheck', desc: 'Extrae, descifra y autentica.' }
  ],
  schemes: [
    { name: 'AES + LSB pseudoaleatorio', source: 'IEEE ICCED / ICCCNT 2018–2023' },
    { name: 'ECC + DCT JPEG (P-256)', source: 'Varios papers IEEE' },
    { name: 'RSA + audio', source: 'Gambhir y Khara (IEEE, 2014)' },
    { name: 'AES + ECC + estego para cloud', source: 'IEEE Access (2021)' },
    { name: 'StegaCrypt / Trio-Security', source: 'MDPI Applied Sciences 13(21), 2023' },
    { name: 'QKD + esteganografía', source: 'Resistente a Shor y a estegoanálisis' },
    { name: 'Crypto-Stego HEVC en Android IoT', source: 'Almomani et al. (2022), Sensors 22(6) 2281. Evade 70 motores AV.' },
    { name: 'AES + LSB + matriz mágica + transposición', source: 'Nature Sci Reports (2025)' }
  ],
  metrics: [
    { name: 'PSNR', value: '> 40 dB', desc: 'Peak Signal-to-Noise Ratio. Indicador de calidad visual.' },
    { name: 'SSIM', value: '≥ 0.98', desc: 'Similitud estructural percibida.' },
    { name: 'MSE', value: '~ 0', desc: 'Error cuadrático medio entre cover y stego.' },
    { name: 'NCC', value: '~ 1', desc: 'Coeficiente de correlación normalizado.' },
    { name: 'BER', value: '0', desc: 'Bit Error Rate al recuperar el payload.' },
    { name: 'bpp', value: '≤ 0.4', desc: 'Bits per pixel seguros en esquemas adaptativos.' },
    { name: 'P_E', value: 'min', desc: 'Probabilidad de error de detección frente a SRNet, Yedroudj-Net y SRM-EC.' }
  ],
  applications: [
    'IoT industrial: cripto ligera (PRESENT, Speck, ASCON) con LSB selectivo.',
    'Cloud storage cifrado con disimulo.',
    'HIPAA: imágenes médicas con metadatos protegidos.',
    'Comunicaciones militares: PQC y esteganografía para operaciones COMSEC.',
    'Banca: OTP en QR autenticado con HMAC.'
  ]
}

// ============================================================================
// CONCLUSION GRUPAL
// ============================================================================
export const conclusion = {
  headline:
    'Las dos disciplinas son ortogonales: la criptografía protege el contenido del mensaje y la esteganografía protege su existencia. Cada una cubre el punto débil de la otra.',
  recommendation:
    'Arquitectura híbrida: AES-GCM o ChaCha20-Poly1305 + esteganografía adaptativa (S-UNIWARD o HILL), con migración planificada a ML-KEM-768 y ML-DSA-65 antes de 2030, según el cronograma de CNSA 2.0.',
  latamLines: [
    'Estegoanálisis con CNN sobre tráfico TLS 1.3.',
    'Detección de covert channels en DNS-over-HTTPS (DoH).',
    'Evaluación empírica de PQC en IoT industrial latinoamericano.'
  ]
}

// ============================================================================
// ALGORITMOS PQC (sub-tab "Algoritmos PQC" en Cuantica)
// ============================================================================
export const pqcAlgorithms = [
  {
    fips: 'FIPS 203',
    name: 'ML-KEM',
    base: 'CRYSTALS-Kyber',
    role: 'Key Encapsulation',
    use: 'Reemplaza RSA-OAEP y ECDH para intercambio de claves.',
    sizes: 'ML-KEM-512 / 768 / 1024'
  },
  {
    fips: 'FIPS 204',
    name: 'ML-DSA',
    base: 'CRYSTALS-Dilithium',
    role: 'Firma digital',
    use: 'Reemplaza RSA-PSS y ECDSA en firmas y certificados.',
    sizes: 'ML-DSA-44 / 65 / 87'
  },
  {
    fips: 'FIPS 205',
    name: 'SLH-DSA',
    base: 'SPHINCS+',
    role: 'Firma digital sin estado basada en hash',
    use: 'Opción conservadora: firmas más grandes, pero la seguridad descansa solo en funciones hash.',
    sizes: 'SLH-DSA-SHA2 / SHAKE en varios niveles'
  },
  {
    fips: 'FIPS 206 (draft)',
    name: 'FN-DSA',
    base: 'FALCON',
    role: 'Firma digital basada en NTRU',
    use: 'Firmas más compactas. Pendiente de publicación final.',
    sizes: 'FALCON-512 / 1024'
  }
]
