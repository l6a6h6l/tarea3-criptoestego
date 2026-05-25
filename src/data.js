// ============================================================================
// DATOS DEL PROYECTO - Tarea 3 MACS0530
// Editar aqui: portada, equipo, timeline stegomalware, comparativa, referencias.
// ============================================================================

export const courseInfo = {
  university: 'Universidad de Especialidades Espíritu Santo (UEES)',
  faculty: 'Facultad de Postgrado',
  program: 'Maestría en Ciberseguridad (MACS)',
  courseCode: 'MACS0530',
  courseName: 'Técnicas de Ciberdefensa y Ciberataque',
  professor: 'Dr. Jorge Luis Zambrano Martínez, Ph.D.',
  date: 'Mayo 2026',
  location: 'Samborondón – Ecuador',
  repo: 'https://github.com/l6a6h6l/tarea3-criptoestego',
  pdfReport: null // ej: '/informe.pdf' si subes el PDF a /public
}

// ============================================================================
// EQUIPO DE INVESTIGACION (4 integrantes con colores institucionales)
// ============================================================================
export const team = [
  { name: 'Luis Alberto Herrera-Lara',       initials: 'LH', color: '#A855F7' }, // violeta (cripto)
  { name: 'Joel Alexander Delgado Figueroa', initials: 'JD', color: '#22C55E' }, // verde (estego)
  { name: 'Homar Isaac Cordovilla Cabezas',  initials: 'HC', color: '#06B6D4' }, // cyan (híbrido)
  { name: 'Bélgica Amarilis Estrada Cela',   initials: 'BE', color: '#D4A574' }  // dorado (UEES)
]

// ============================================================================
// TL;DR para el hero
// ============================================================================
export const tldr =
  'La criptografía protege el CONTENIDO asumiendo que el adversario sabrá que hay comunicación. La esteganografía protege la EXISTENCIA asumiendo que cualquier contenido detectado puede ser leído. No son alternativas excluyentes: son dimensiones ortogonales de la seguridad. La literatura indexada de la última década apunta inequívocamente al paradigma híbrido.'

// ============================================================================
// HERO STATS (4 cards doradas)
// ============================================================================
export const heroStats = [
  { value: '40',   label: 'Referencias indexadas (IEEE, ACM, NIST, arXiv)' },
  { value: '12',   label: 'Casos de stegomalware documentados (2011–2024)' },
  { value: '3',    label: 'Estándares NIST FIPS poscuánticos (2024)' },
  { value: '2030', label: 'Deadline CNSA 2.0 NSA para migración PQC' }
]

// ============================================================================
// FUNDAMENTOS - Tarjetas con etimologia, modelos y taxonomia
// ============================================================================
export const foundations = {
  crypto: {
    name: 'Criptología',
    etym: 'gr. kryptos "oculto" + logos "estudio"',
    summary:
      'Ciencia que estudia criptografía (diseño) y criptoanálisis (ruptura). El mensaje cifrado es VISIBLE pero INCOMPRENSIBLE sin la clave.',
    models: [
      { name: 'Principio de Kerckhoffs (1883)', desc: 'La seguridad debe residir en la clave, no en el secreto del algoritmo.' },
      { name: 'Shannon (1949)', desc: 'Confusión + difusión; el one-time pad ofrece secreto perfecto.' }
    ],
    taxonomy: [
      { label: 'Simétrica', value: 'DES (obsoleto), 3DES (deprecado), AES (FIPS 197), ChaCha20-Poly1305 (RFC 8439, TLS 1.3)' },
      { label: 'Asimétrica', value: 'RSA (factorización), ECC (Curve25519, secp256r1), ElGamal, Diffie-Hellman' },
      { label: 'Hash', value: 'SHA-2, SHA-3/Keccak (FIPS 202), BLAKE2/3' },
      {
        label: 'Poscuántica (PQC)',
        value:
          'NIST 2024-08-13: FIPS 203 ML-KEM (Kyber), FIPS 204 ML-DSA (Dilithium), FIPS 205 SLH-DSA (SPHINCS+). FALCON: FIPS 206. HQC seleccionado 2025-03-11. CNSA 2.0 (NSA) mandata migración 2030-2033.'
      }
    ]
  },
  stego: {
    name: 'Esteganografía',
    etym: 'gr. steganos "cubierto" + graphein "escribir"',
    summary:
      'Oculta la EXISTENCIA misma del mensaje dentro de un portador inocuo. Si se extrae, el mensaje está en claro.',
    models: [
      {
        name: 'Problema del Prisionero (Simmons, CRYPTO 1983)',
        desc: 'Alice y Bob coordinan una fuga a través de un canal monitoreado por el guardia Willie.'
      },
      {
        name: 'Anderson & Petitcolas (1998, IEEE JSAC)',
        desc: 'On the Limits of Steganography: derivó las cotas teóricas aún vigentes.'
      }
    ],
    taxonomy: [
      { label: 'Multimedia', value: 'Imagen (LSB, paleta, DCT/DWT), audio (LSB, fase, eco), video (HEVC, H.264), texto' },
      { label: 'Lingüística', value: 'Acrósticos, sustitución sintáctica' },
      { label: 'De red', value: 'Covert channels TCP/IP, ICMP, DNS, HTTP, VoIP (Mazurczyk), IPv6 ext. headers' },
      { label: 'JPEG clásico', value: 'JSteg, OutGuess (Provos 2001), F5 (Westfeld 2001), nsF5' },
      {
        label: 'Adaptativa (SOTA)',
        value:
          'HUGO (Pevný 2010), WOW (Holub & Fridrich 2012), S/J-UNIWARD (2014), HILL (Li 2014), MiPod (Sedighi 2016). Syndrome-trellis codes (Filler 2011).'
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
    abstract: 'La seguridad de un sistema criptográfico debe depender exclusivamente del secreto de la clave, no del algoritmo. Inviolable: el adversario conoce el sistema.',
    impact: 'Pilar moderno de la criptografía abierta y la evaluación pública.'
  },
  {
    year: 1949,
    author: 'Shannon',
    title: 'Communication Theory of Secrecy Systems',
    abstract: 'Formaliza confusión y difusión. Demuestra que el one-time pad ofrece secreto perfecto (information-theoretic secrecy).',
    impact: 'Fundamenta la criptografía moderna como disciplina matemática.'
  },
  {
    year: 1983,
    author: 'Simmons',
    title: 'Problema del Prisionero',
    abstract: 'Alice y Bob, presos, coordinan una fuga vía mensajes monitoreados por Willie. Define formalmente el escenario esteganográfico.',
    impact: 'Modelo canónico para todo análisis posterior en esteganografía.'
  },
  {
    year: 1998,
    author: 'Anderson & Petitcolas',
    title: 'On the Limits of Steganography',
    abstract: 'Cotas teóricas de imperceptibilidad y capacidad. Conexión entre teoría de la información y estegoanálisis.',
    impact: 'Marco de referencia aún citado para evaluar esquemas modernos.'
  },
  {
    year: 1998,
    author: 'Cachin',
    title: 'An Information-Theoretic Model for Steganography',
    abstract: 'Define epsilon-seguridad esteganográfica mediante divergencia KL entre distribución del cover y del stego.',
    impact: 'Equivalente esteganográfico del modelo de Shannon en criptografía.'
  }
]

// ============================================================================
// COMPARATIVA - 9 dimensiones
// ============================================================================
export const comparisonTable = [
  {
    dim: 'Objetivo',
    crypto: 'Confidencialidad, integridad, autenticación',
    stego: 'Imperceptibilidad (encubrir la existencia)'
  },
  {
    dim: 'Garantía formal',
    crypto: 'Secreto computacional (Shannon, 1949) sobre problemas duros (factorización, log discreto, LWE)',
    stego: 'Indetectabilidad estadística (Cachin, 1998): epsilon-seguridad vía divergencia KL'
  },
  {
    dim: 'Detectabilidad',
    crypto: 'Ciphertext detectable (alta entropía) pero ilegible',
    stego: 'Idealmente indetectable; si se detecta cae sobre la criptografía subyacente'
  },
  {
    dim: 'Overhead',
    crypto: 'Bajo-medio. AES-128 con AES-NI ~1 ciclo/byte. RSA-2048: ms',
    stego: 'Variable. LSB es O(n). UNIWARD/HUGO requieren mapas de costos (alto)'
  },
  {
    dim: 'Capacidad',
    crypto: 'Sin pérdida (ciphertext ~ plaintext)',
    stego: 'Restringida por bpp del cover: 0.1–4 bpp en LSB; ≤0.4 seguro adaptativa'
  },
  {
    dim: 'Métricas',
    crypto: 'NIST SP 800-22, IND-CCA2',
    stego: 'PSNR (>40 dB), SSIM (≥0.98), MSE (~0), NCC, BER, bpp'
  },
  {
    dim: 'Resiliencia cuántica',
    crypto: 'RSA/ECC rotos por Shor; AES-256/SHA-3 reducidos por Grover; PQC en transición',
    stego: 'Casi no afectada (el cover es la barrera, no un problema matemático)'
  },
  {
    dim: 'Marco legal',
    crypto: 'Sólido (eIDAS, FIPS, eSign Act). Algunos países: export controls',
    stego: 'Gris. En regímenes autoritarios la mera ocultación puede ser ilícita'
  },
  {
    dim: 'Punto de falla',
    crypto: 'Mala gestión de claves, side-channels, PRNG defectuoso',
    stego: 'Análisis estadístico (χ², RS, SPAM/SRM, CNNs); cover de baja entropía'
  }
]

// Convergencias (subsection "Convergencias" de Comparativa)
export const convergences = [
  'Ambas asumen un adversario activo y modelan formalmente su capacidad — Kerckhoffs (1883) para cripto, Simmons (1983) para estego.',
  'Las dos sufren si la primitiva matemática subyacente cae: cripto ante Shor (PQC) y estego ante CNNs como SRNet.',
  'El paradigma híbrido cripto→estego en cascada satisface ambos objetivos: ciphertext de alta entropía empaquetado dentro de un cover de baja sospecha.',
  'En estegoanálisis moderno la criptografía es el cuarto pilar: aunque el detector identifique el portador, el contenido extraído sigue siendo ininteligible.'
]

export const closingQuote = {
  text: 'El paradigma híbrido cripto-esteganográfico no es un capricho de ingeniería, sino la síntesis necesaria entre dos garantías formales que ninguna disciplina puede ofrecer por separado: la ininteligibilidad del contenido y la imperceptibilidad de su existencia.',
  source: 'Síntesis del equipo, basada en Cachin (1998), Anderson & Petitcolas (1998) y Almomani et al. (2022).'
}

// ============================================================================
// CASOS DE USO - reales/hipoteticos legitimos
// ============================================================================
export const useCases = {
  crypto: [
    {
      title: 'TLS 1.3 (RFC 8446)',
      detail: 'X25519/secp256r1 + AES-GCM/ChaCha20-Poly1305. Cubre ~76% de páginas web (Web Almanac 2025, HTTP Archive).'
    },
    {
      title: 'Signal Protocol',
      detail:
        'X3DH sobre Curve25519 + Double Ratchet (Marlinspike & Perrin 2016). Usado por Signal, WhatsApp, Google Messages (RCS), FB Messenger. PQXDH (2023). Triple Ratchet con SPQR liberado 2025-10-02.'
    },
    { title: 'Blockchain', detail: 'Bitcoin ECDSA sobre secp256k1 + SHA-256.' },
    { title: 'VPNs', detail: 'WireGuard: Curve25519 + ChaCha20-Poly1305 + BLAKE2s.' },
    {
      title: 'Cumplimiento normativo',
      detail: 'GDPR art. 32, LOPDGDD, HIPAA (validación FIPS 140).'
    }
  ],
  stego: [
    {
      title: 'Watermarking digital y derechos de autor',
      detail: 'Cox, Miller & Bloom (2007). Cinavia, Office, fotografía profesional.'
    },
    {
      title: 'Autenticación y trazabilidad documental',
      detail: 'Anderson & Petitcolas (1998) mencionan los reportes del Reino Unido bajo Thatcher.'
    },
    {
      title: 'Comunicaciones bajo vigilancia',
      detail: 'Periodismo y activismo. Herramientas: OpenStego, Steghide.'
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
    source: 'CrySyS Lab / Kaspersky / Symantec',
    details:
      'APT estatal vinculada a Stuxnet. Robaba información de sistemas industriales y la exfiltraba embebida en imágenes JPEG hacia servidores C2.',
    cves: []
  },
  {
    year: 2014,
    name: 'ZeusVM / KINS',
    type: 'banking',
    technique: 'Config en JPEG cifrada con Base64 + RC4 + XOR',
    coverFormat: 'JPEG',
    source: 'Segura, Malwarebytes (feb 2014)',
    details:
      'Banking trojan que descarga su archivo de configuración oculto dentro de imágenes JPEG aparentemente benignas alojadas en servidores comprometidos.',
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
      '350,000 víctimas estimadas. Descargaba URLs de payload escondidas en imágenes BMP aparentemente vacías mediante LSB cifrado con XOR.',
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
      'Afectó principalmente sectores sanitario y educativo. El loader inicial era pequeño; el módulo principal viajaba dentro de un PNG y se descifraba en memoria.',
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
      'Operación atribuida a un actor estatal de primer nivel. Empleó esteganografía para ocultar payloads y comunicaciones C2 en múltiples vectores.',
    cves: []
  },
  {
    year: 2016,
    name: 'Stegano / AdGholas / Astrum EK',
    type: 'exploit-kit',
    technique: 'JS en canal alfa de PNGs publicitarios',
    coverFormat: 'PNG (alpha)',
    source: 'ESET (Lipovsky, dic 2016)',
    details:
      'Más de 1 millón de usuarios expuestos a través de banners publicitarios. Código JavaScript malicioso oculto en el canal alfa de imágenes PNG servidas como anuncios.',
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
      'Exploit kit que replicó la técnica de Stegano para entregar exploits ocultos dentro de imágenes PNG aparentemente benignas.',
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
      'APT ruso. Backdoor para Microsoft Exchange que recibía comandos C2 ocultos en attachments PDF y JPG de correos enviados al servidor comprometido.',
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
      'Espionaje industrial. Comunicaciones C2 sobre servicios legítimos (Google, Microsoft, Dropbox). Payload encapsulado en BMP con un esquema esteganográfico propietario.',
    cves: []
  },
  {
    year: 2022,
    name: 'Worok',
    type: 'apt-state',
    technique: 'PowerShell + .NET stealer en PNG con LSB',
    coverFormat: 'PNG',
    source: 'Avast / ESET',
    details:
      'Abusa Dropbox como canal de comando y control. Embebe código PowerShell y stealer .NET en PNGs mediante LSB.',
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
      'Atribuido a TA410 / Cicada / APT10. Tras explotar ProxyShell y ProxyLogon, ocultaba un backdoor dentro del logo de Windows alojado en un repositorio GitHub público.',
    cves: []
  },
  {
    year: 2023,
    name: 'Lumma Stealer',
    type: 'crimeware',
    technique: 'LSB para recuperar payloads',
    coverFormat: 'PNG',
    source: 'Múltiples firmas AV',
    details:
      'Crimeware moderno (info stealer) que utiliza LSB para descargar y reconstruir payloads adicionales evadiendo la detección en redes corporativas.',
    cves: []
  }
]

// ============================================================================
// CAVEAT cautelar - Al-Qaeda pre-9/11
// ============================================================================
export const stegoMyth = {
  title: 'El mito Al-Qaeda pre-9/11',
  body:
    'El supuesto uso de esteganografía por Al-Qaeda reportado por USA Today (febrero 2001) nunca fue confirmado técnicamente. Provos y Honeyman (2003) analizaron millones de imágenes con StegDetect y StegBreak sin hallar evidencia. Citarlo solo con esta cautela.'
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
      { name: 'Diferencial', ref: 'Biham & Shamir (1991) sobre DES' },
      { name: 'Lineal', ref: 'Matsui (1993)' },
      { name: 'Algebraico', ref: 'Sistemas no lineales sobre GF(2)' },
      { name: 'Cumpleaños', ref: 'Hashes ~2^(n/2)' },
      { name: 'Side-channel: timing', ref: 'Kocher (1996)' },
      { name: 'Side-channel: DPA', ref: 'Kocher, Jaffe & Jun (1999)' },
      { name: 'Side-channel: cache', ref: 'FLUSH+RELOAD, Spectre/Meltdown class' }
    ],
    quantum: [
      {
        algo: 'Shor (1994)',
        impact: 'Factoriza enteros y resuelve log discreto en tiempo polinomico -> rompe RSA/ECC/ECDH/DSA.'
      },
      {
        algo: 'Gidney (Google Quantum AI, arXiv:2505.15917, mayo 2025)',
        impact:
          'RSA-2048 podría romperse "en menos de una semana con <1M qubits ruidosos", reducción 20x vs Gidney & Ekera 2019 (~20M qubits).'
      },
      {
        algo: 'Grover (1996)',
        impact:
          'Aceleración cuadrática -> AES-128 efectivo 64 bits, SHA-256 efectivo 128 bits. NIST recomienda >=256 bits simétricos PQ.'
      },
      {
        algo: 'HNDL (Harvest Now, Decrypt Later)',
        impact: 'Adversarios capturan tráfico hoy con la intención de descifrarlo cuando exista un computador cuántico relevante.'
      }
    ]
  },
  stego: {
    classic: [
      { name: 'Chi-cuadrado', ref: 'Westfeld & Pfitzmann (2000). Rompió EzStego, JSteg, Steganos, S-Tools.' },
      { name: 'RS Analysis', ref: 'Fridrich, Goljan & Du (2001)' },
      { name: 'Sample Pair Analysis', ref: 'Dumitrescu, Wu & Wang (2003)' }
    ],
    preDL: [
      { name: 'SRM (34671 features)', ref: 'Fridrich & Kodovský (2012), IEEE TIFS' },
      { name: 'Ensemble Classifier', ref: 'Kodovský, Fridrich & Holub (2012)' }
    ],
    deepLearning: [
      { name: 'Xu-Net (2016)', ref: 'Pionera en CNN para estegoanálisis' },
      { name: 'Ye-Net (2017)', ref: 'IEEE TIFS 12(11)' },
      { name: 'Yedroudj-Net (2018)', ref: 'ICASSP' },
      { name: 'SRNet (2019)', ref: 'Boroumand, Chen & Fridrich, IEEE TIFS - referencia actual.' }
    ],
    limits:
      'Los detectores fallan a bajos payloads (≤0.1 bpp con QF 95) y sufren cover-source mismatch (problema central de ALASKA #2, WIFS 2020).'
  },
  latam: [
    { ref: 'Cuzco, Mantilla, Méndez & Ávila (2019), ESPOCH', detail: 'Revista Espacios 40(38). Esquema híbrido cripto-LSB.' },
    {
      ref: 'Rosas, Izurieta & Buenaño (2024), Univ. Central del Ecuador',
      detail: 'Polo del Conocimiento 9(3). Revisión sistemática.'
    },
    { ref: 'Velásquez-Moreira, Molina-Sabando & Briones-Véliz (2017), ULEAM', detail: 'Técnicas en audio e imagen.' }
  ]
}

// ============================================================================
// HIBRIDOS - integracion cripto-esteganografica
// ============================================================================
export const hybrid = {
  cascade: [
    { step: 'Plaintext', icon: 'FileText', desc: 'Mensaje en claro.' },
    { step: 'AES-GCM / ChaCha20-Poly1305', icon: 'Lock', desc: 'Cifrado autenticado: alta entropía + integridad.' },
    { step: 'Ciphertext', icon: 'Binary', desc: 'Bytes pseudoaleatorios indistinguibles de ruido.' },
    { step: 'Embebido LSB / DCT / S-UNIWARD', icon: 'ImagePlus', desc: 'Esteganografía adaptativa minimiza la distorsión detectable.' },
    { step: 'Stego cover', icon: 'Image', desc: 'Imagen aparentemente normal, lista para transmisión.' },
    { step: 'Canal público', icon: 'Wifi', desc: 'Email, redes sociales, cloud storage. No levanta sospechas.' },
    { step: 'Receptor', icon: 'UserCheck', desc: 'Extrae, descifra y autentica.' }
  ],
  schemes: [
    { name: 'AES + LSB pseudoaleatorio', source: 'IEEE ICCED / ICCCNT 2018–2023' },
    { name: 'ECC + DCT JPEG (P-256)', source: 'Múltiples papers IEEE' },
    { name: 'RSA + audio', source: 'Gambhir & Khara (IEEE 2014)' },
    { name: 'AES + ECC + estego para cloud', source: 'IEEE Access (2021)' },
    { name: 'StegaCrypt / Trio-Security', source: 'MDPI Applied Sciences 13(21), 2023' },
    { name: 'QKD + esteganografía', source: 'Resistente a Shor y a estegoanálisis' },
    { name: 'Crypto-Stego HEVC Android IoT', source: 'Almomani et al. (2022) Sensors 22(6) 2281 — evade 70 motores AV' },
    { name: 'AES + LSB + matriz mágica + transposición', source: 'Nature Sci Reports (2025)' }
  ],
  metrics: [
    { name: 'PSNR', value: '> 40 dB', desc: 'Peak Signal-to-Noise Ratio (calidad visual).' },
    { name: 'SSIM', value: '≥ 0.98', desc: 'Similitud estructural percibida.' },
    { name: 'MSE', value: '~ 0', desc: 'Error cuadrático medio entre cover y stego.' },
    { name: 'NCC', value: '~ 1', desc: 'Coeficiente de correlación normalizado.' },
    { name: 'BER', value: '0', desc: 'Bit Error Rate en recuperación del payload.' },
    { name: 'bpp', value: '≤ 0.4', desc: 'Bits per pixel seguros en esquemas adaptativos.' },
    { name: 'P_E', value: 'min', desc: 'Probabilidad de error de detección (vs SRNet/Yedroudj-Net/SRM-EC).' }
  ],
  applications: [
    'IoT industrial: cripto ligera (PRESENT, Speck, ASCON) + LSB selectivo',
    'Cloud storage cifrado con disimulo',
    'HIPAA: imágenes médicas con metadatos protegidos',
    'Militares: PQC + estego para operaciones COMSEC',
    'Banca: OTP en QR + HMAC'
  ]
}

// ============================================================================
// CONCLUSION GRUPAL
// ============================================================================
export const conclusion = {
  headline:
    'NO son alternativas excluyentes: son complementarias y ortogonales. La criptografía protege contenido; la esteganografía protege existencia. Cada una falla donde la otra es fuerte.',
  recommendation:
    'Paradigma híbrido: AES-GCM o ChaCha20-Poly1305 + esteganografía adaptativa (S-UNIWARD / HILL) + migración planificada a ML-KEM-768 + ML-DSA-65 antes de 2030 (CNSA 2.0).',
  latamLines: [
    'Estegoanálisis CNN sobre tráfico TLS 1.3',
    'Detección de covert channels en DNS-over-HTTPS (DoH)',
    'Evaluación empírica de PQC en IoT industrial latinoamericano'
  ]
}

// ============================================================================
// REFERENCIAS APA 7 ESTRICTO
// Cada entrada usa "parts" para JSX (cursivas marcadas); apaString() lo
// linealiza para la busqueda. Orden alfabetico por primer autor.
// ============================================================================
const it = (text) => ({ italic: text })

export const referencias = [
  {
    id: 'almomani-2022',
    parts: [
      'Almomani, I., Alkhayer, A., & El-Shafai, W. (2022). A crypto-steganography approach for hiding ransomware within HEVC streams in Android IoT devices. ',
      it('Sensors, '),
      it('22'),
      '(6), 2281.'
    ],
    doi: '10.3390/s22062281'
  },
  {
    id: 'anderson-1998',
    parts: [
      'Anderson, R. J., & Petitcolas, F. A. P. (1998). On the limits of steganography. ',
      it('IEEE Journal on Selected Areas in Communications, '),
      it('16'),
      '(4), 474–481.'
    ],
    doi: '10.1109/49.668971'
  },
  {
    id: 'auerbach-2025',
    parts: [
      'Auerbach, B., Katsumata, S., & Prest, T. (2025). ',
      it('SPQR: A sparse post-quantum ratchet for the Signal Protocol'),
      ' [Whitepaper]. PQShield, NYU, AIST.'
    ],
    url: 'https://signal.org/blog/spqr/'
  },
  {
    id: 'boroumand-2019',
    parts: [
      'Boroumand, M., Chen, M., & Fridrich, J. (2019). Deep residual network for steganalysis of digital images. ',
      it('IEEE Transactions on Information Forensics and Security, '),
      it('14'),
      '(5), 1181–1193.'
    ],
    doi: '10.1109/TIFS.2018.2871749'
  },
  {
    id: 'cachin-1998',
    parts: [
      'Cachin, C. (1998). An information-theoretic model for steganography. En ',
      it('Information Hiding: Second International Workshop'),
      ' (LNCS 1525, pp. 306–318). Springer.'
    ],
    doi: '10.1007/3-540-49380-8_21'
  },
  {
    id: 'cogranne-2020',
    parts: [
      'Cogranne, R., Giboulot, Q., & Bas, P. (2020). ALASKA #2: Challenging academic research on steganalysis with realistic images. En ',
      it('2020 IEEE International Workshop on Information Forensics and Security (WIFS)'),
      ' (pp. 1–5). IEEE.'
    ],
    doi: '10.1109/WIFS49906.2020.9360896'
  },
  {
    id: 'cox-2007',
    parts: [
      'Cox, I. J., Miller, M. L., & Bloom, J. A. (2007). ',
      it('Digital watermarking and steganography'),
      ' (2nd ed.). Morgan Kaufmann.'
    ]
  },
  {
    id: 'cuzco-2019',
    parts: [
      'Cuzco, R. H., Mantilla, C. E., Méndez, P. M., & Ávila, D. F. (2019). Experiencia de aplicación de criptografía para mejorar la seguridad en un método esteganográfico en imágenes. ',
      it('Revista Espacios, '),
      it('40'),
      '(38), 6.'
    ],
    url: 'https://www.revistaespacios.com/a19v40n38/19403806.html'
  },
  {
    id: 'eset-2016',
    parts: [
      'ESET WeLiveSecurity. (2016, 6 de diciembre). ',
      it('Stegano exploit kit poisoning pixels'),
      '.'
    ],
    url: 'https://www.welivesecurity.com/2016/12/06/readers-popular-websites-targeted-stealthy-stegano-exploit-kit-hiding-pixels-malicious-ads/'
  },
  {
    id: 'faou-2019',
    parts: [
      'Faou, M. (2019). ',
      it('Turla LightNeuron: One email away from remote code execution'),
      ' [White paper]. ESET.'
    ],
    url: 'https://web-assets.esetstatic.com/wls/2019/05/ESET-LightNeuron.pdf'
  },
  {
    id: 'filler-2011',
    parts: [
      'Filler, T., Judas, J., & Fridrich, J. (2011). Minimizing additive distortion in steganography using syndrome-trellis codes. ',
      it('IEEE Transactions on Information Forensics and Security, '),
      it('6'),
      '(3), 920–935.'
    ],
    doi: '10.1109/TIFS.2011.2134094'
  },
  {
    id: 'fridrich-2009',
    parts: [
      'Fridrich, J. (2009). ',
      it('Steganography in digital media: Principles, algorithms, and applications'),
      '. Cambridge University Press.'
    ]
  },
  {
    id: 'fridrich-2001',
    parts: [
      'Fridrich, J., Goljan, M., & Du, R. (2001). Reliable detection of LSB steganography in color and grayscale images. En ',
      it('Proceedings of the 2001 Workshop on Multimedia and Security: New Challenges'),
      ' (pp. 27–30). Association for Computing Machinery.'
    ],
    doi: '10.1145/1232454.1232466'
  },
  {
    id: 'fridrich-2012',
    parts: [
      'Fridrich, J., & Kodovský, J. (2012). Rich models for steganalysis of digital images. ',
      it('IEEE Transactions on Information Forensics and Security, '),
      it('7'),
      '(3), 868–882.'
    ],
    doi: '10.1109/TIFS.2012.2190402'
  },
  {
    id: 'gidney-2025',
    parts: [
      'Gidney, C. (2025). ',
      it('How to factor 2048 bit RSA integers with less than a million noisy qubits'),
      '. arXiv.'
    ],
    url: 'https://arxiv.org/abs/2505.15917'
  },
  {
    id: 'holub-2012',
    parts: [
      'Holub, V., & Fridrich, J. (2012). Designing steganographic distortion using directional filters. En ',
      it('2012 IEEE International Workshop on Information Forensics and Security (WIFS)'),
      ' (pp. 234–239). IEEE.'
    ],
    doi: '10.1109/WIFS.2012.6412655'
  },
  {
    id: 'holub-2014',
    parts: [
      'Holub, V., Fridrich, J., & Denemark, T. (2014). Universal distortion function for steganography in an arbitrary domain. ',
      it('EURASIP Journal on Information Security, '),
      it('2014'),
      '(1), 1.'
    ],
    doi: '10.1186/1687-417X-2014-1'
  },
  {
    id: 'httparchive-2026',
    parts: [
      'HTTP Archive. (2026). Security. En ',
      it('Web Almanac 2025'),
      '.'
    ],
    url: 'https://almanac.httparchive.org/en/2025/security'
  },
  {
    id: 'kahn-1996',
    parts: [
      'Kahn, D. (1996). ',
      it('The codebreakers: The comprehensive history of secret communication from ancient times to the Internet'),
      ' (Rev. ed.). Scribner.'
    ]
  },
  {
    id: 'kaspersky-2020',
    parts: [
      'Kaspersky GReAT. (2020, 8 de octubre). MontysThree: Industrial espionage with steganography and a Russian accent on both sides. ',
      it('Securelist'),
      '.'
    ],
    url: 'https://securelist.com/montysthree-industrial-espionage/98972/'
  },
  {
    id: 'katz-2020',
    parts: [
      'Katz, J., & Lindell, Y. (2020). ',
      it('Introduction to modern cryptography'),
      ' (3rd ed.). CRC Press.'
    ]
  },
  {
    id: 'kerckhoffs-1883',
    parts: [
      'Kerckhoffs, A. (1883). La cryptographie militaire. ',
      it('Journal des Sciences Militaires, IX'),
      ', 5–83.'
    ]
  },
  {
    id: 'marlinspike-2016',
    parts: [
      'Marlinspike, M., & Perrin, T. (2016). ',
      it('The Double Ratchet algorithm'),
      ' [Especificación técnica]. Signal Foundation.'
    ],
    url: 'https://signal.org/docs/specifications/doubleratchet/'
  },
  {
    id: 'mazurczyk-2008',
    parts: [
      'Mazurczyk, W., & Szczypiorski, K. (2008). Steganography of VoIP streams. En R. Meersman & Z. Tari (Eds.), ',
      it('On the Move to Meaningful Internet Systems: OTM 2008'),
      ' (LNCS 5332, pp. 1001–1018). Springer.'
    ],
    doi: '10.1007/978-3-540-88873-4_6'
  },
  {
    id: 'nist-2024a',
    parts: [
      'National Institute of Standards and Technology. (2024a). ',
      it('Module-Lattice-Based Key-Encapsulation Mechanism Standard'),
      ' (FIPS PUB 203). U.S. Department of Commerce.'
    ],
    doi: '10.6028/NIST.FIPS.203'
  },
  {
    id: 'nist-2024b',
    parts: [
      'National Institute of Standards and Technology. (2024b). ',
      it('Module-Lattice-Based Digital Signature Standard'),
      ' (FIPS PUB 204). U.S. Department of Commerce.'
    ],
    doi: '10.6028/NIST.FIPS.204'
  },
  {
    id: 'nist-2024c',
    parts: [
      'National Institute of Standards and Technology. (2024c). ',
      it('Stateless Hash-Based Digital Signature Standard'),
      ' (FIPS PUB 205). U.S. Department of Commerce.'
    ],
    doi: '10.6028/NIST.FIPS.205'
  },
  {
    id: 'pevny-2010',
    parts: [
      'Pevný, T., Filler, T., & Bas, P. (2010). Using high-dimensional image models to perform highly undetectable steganography. En R. Böhme, P. W. L. Fong, & R. Safavi-Naini (Eds.), ',
      it('Information Hiding: 12th International Conference'),
      ' (LNCS 6387, pp. 161–177). Springer.'
    ],
    doi: '10.1007/978-3-642-16435-4_13'
  },
  {
    id: 'provos-2003',
    parts: [
      'Provos, N., & Honeyman, P. (2003). Hide and seek: An introduction to steganography. ',
      it('IEEE Security & Privacy, '),
      it('1'),
      '(3), 32–44.'
    ],
    doi: '10.1109/MSECP.2003.1203220'
  },
  {
    id: 'rosas-2024',
    parts: [
      'Rosas, M., Izurieta, C., & Buenaño, S. (2024). Esteganografía: el arte de ocultar información en medios digitales. ',
      it('Polo del Conocimiento, '),
      it('9'),
      '(3), 45–57.'
    ],
    doi: '10.23857/pc.v9i3.6626'
  },
  {
    id: 'segura-2014',
    parts: [
      'Segura, J. (2014, 25 de febrero). Hiding in plain sight: A story about a sneaky banking trojan. ',
      it('Malwarebytes Labs'),
      '.'
    ],
    url: 'https://www.malwarebytes.com/blog/news/2014/02/hiding-in-plain-sight-a-story-about-a-sneaky-banking-trojan'
  },
  {
    id: 'shannon-1949',
    parts: [
      'Shannon, C. E. (1949). Communication theory of secrecy systems. ',
      it('Bell System Technical Journal, '),
      it('28'),
      '(4), 656–715.'
    ],
    doi: '10.1002/j.1538-7305.1949.tb00928.x'
  },
  {
    id: 'shor-1997',
    parts: [
      'Shor, P. W. (1997). Polynomial-time algorithms for prime factorization and discrete logarithms on a quantum computer. ',
      it('SIAM Journal on Computing, '),
      it('26'),
      '(5), 1484–1509.'
    ],
    doi: '10.1137/S0097539795293172'
  },
  {
    id: 'simmons-1984',
    parts: [
      'Simmons, G. J. (1984). The prisoners’ problem and the subliminal channel. En D. Chaum (Ed.), ',
      it('Advances in Cryptology: Proceedings of CRYPTO ’83'),
      ' (pp. 51–67). Plenum Press.'
    ],
    doi: '10.1007/978-1-4684-4730-9_5'
  },
  {
    id: 'stone-gross-2014',
    parts: [
      'Stone-Gross, B. (2014). ',
      it('Malware analysis of the Lurk downloader'),
      ' [Reporte técnico]. Dell SecureWorks Counter Threat Unit.'
    ],
    url: 'https://www.secureworks.com/research/malware-analysis-of-the-lurk-downloader'
  },
  {
    id: 'symantec-2022',
    parts: [
      'Symantec Threat Hunter Team. (2022, 29 de septiembre). ',
      it('Witchetty: Group uses updated toolset in attacks on governments in Middle East'),
      ' [Reporte de inteligencia]. Broadcom.'
    ],
    url: 'https://www.security.com/threat-intelligence/witchetty-steganography-espionage'
  },
  {
    id: 'velasquez-2017',
    parts: [
      'Velásquez-Moreira, G. M., Molina-Sabando, L. A., & Briones-Véliz, Í. B. (2017). Análisis de técnicas de esteganografía aplicadas en archivos de audio e imagen. ',
      it('Polo del Conocimiento, '),
      it('2'),
      '(1), 51–67.'
    ],
    doi: '10.23857/pc.v2i1.10'
  },
  {
    id: 'westfeld-2000',
    parts: [
      'Westfeld, A., & Pfitzmann, A. (2000). Attacks on steganographic systems: Breaking the steganographic utilities EzStego, Jsteg, Steganos, and S-Tools — and some lessons learned. En A. Pfitzmann (Ed.), ',
      it('Information Hiding: Third International Workshop'),
      ' (LNCS 1768, pp. 61–76). Springer.'
    ],
    doi: '10.1007/10719724_5'
  },
  {
    id: 'yedroudj-2018',
    parts: [
      'Yedroudj, M., Comby, F., & Chaumont, M. (2018). Yedroudj-Net: An efficient CNN for spatial steganalysis. En ',
      it('2018 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)'),
      ' (pp. 2092–2096). IEEE.'
    ],
    doi: '10.1109/ICASSP.2018.8461438'
  },
  {
    id: 'ye-2017',
    parts: [
      'Ye, J., Ni, J., & Yi, Y. (2017). Deep learning hierarchical representations for image steganalysis. ',
      it('IEEE Transactions on Information Forensics and Security, '),
      it('12'),
      '(11), 2545–2557.'
    ],
    doi: '10.1109/TIFS.2017.2710946'
  }
]

// Linealiza "parts" a string plano (para busqueda y boton copiar)
export function apaString(entry) {
  const text = entry.parts.map((p) => (typeof p === 'string' ? p : p.italic)).join('')
  const tail = entry.doi
    ? ` https://doi.org/${entry.doi}`
    : entry.url
      ? ` ${entry.url}`
      : ''
  return (text + tail).replace(/\s+/g, ' ').trim()
}

// ============================================================================
// MAPEO DE REFERENCIAS POR CATEGORIA (sub-tabs en Bibliografia)
// ============================================================================
export const referenceCategories = [
  {
    id: 'libros',
    label: 'Libros y obras de referencia',
    ids: ['cox-2007', 'fridrich-2009', 'kahn-1996', 'katz-2020']
  },
  {
    id: 'seminales',
    label: 'Artículos seminales',
    ids: [
      'almomani-2022', 'anderson-1998', 'auerbach-2025', 'boroumand-2019',
      'cachin-1998', 'cogranne-2020', 'filler-2011', 'fridrich-2001',
      'fridrich-2012', 'gidney-2025', 'holub-2012', 'holub-2014',
      'kerckhoffs-1883', 'marlinspike-2016', 'mazurczyk-2008', 'pevny-2010',
      'provos-2003', 'shannon-1949', 'shor-1997', 'simmons-1984',
      'westfeld-2000', 'ye-2017', 'yedroudj-2018'
    ]
  },
  {
    id: 'estandares',
    label: 'Estándares y normativas',
    ids: ['nist-2024a', 'nist-2024b', 'nist-2024c']
  },
  {
    id: 'amenazas',
    label: 'Informes de inteligencia de amenazas',
    ids: [
      'eset-2016', 'faou-2019', 'httparchive-2026', 'kaspersky-2020',
      'segura-2014', 'stone-gross-2014', 'symantec-2022'
    ]
  },
  {
    id: 'latam',
    label: 'Producción académica latinoamericana',
    ids: ['cuzco-2019', 'rosas-2024', 'velasquez-2017']
  }
]

// ============================================================================
// ALGORITMOS PQC (sub-tab "Algoritmos PQC" en Cuantica)
// ============================================================================
export const pqcAlgorithms = [
  {
    fips: 'FIPS 203',
    name: 'ML-KEM',
    base: 'CRYSTALS-Kyber',
    role: 'Key Encapsulation',
    use: 'Reemplazar RSA-OAEP / ECDH para intercambio de claves.',
    sizes: 'ML-KEM-512 / 768 / 1024'
  },
  {
    fips: 'FIPS 204',
    name: 'ML-DSA',
    base: 'CRYSTALS-Dilithium',
    role: 'Firma digital',
    use: 'Reemplazar RSA-PSS / ECDSA en firmas y certificados.',
    sizes: 'ML-DSA-44 / 65 / 87'
  },
  {
    fips: 'FIPS 205',
    name: 'SLH-DSA',
    base: 'SPHINCS+',
    role: 'Firma digital sin estado basada en hash',
    use: 'Alternativa conservadora; firmas más grandes pero solo dependen de hash.',
    sizes: 'SLH-DSA-SHA2 / SHAKE en múltiples niveles'
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
