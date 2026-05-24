// ============================================================================
// DATOS DEL PROYECTO - Tarea 3 MACS0530
// Editar aqui: portada, equipo, timeline stegomalware, comparativa, referencias.
// ============================================================================

export const courseInfo = {
  university: 'Universidad de Especialidades Espiritu Santo (UEES)',
  faculty: 'Facultad de Postgrado',
  program: 'Maestria en Ciberseguridad (MACS)',
  courseCode: 'MACS0530',
  courseName: 'Tecnicas de Ciberdefensa y Ciberataque',
  professor: 'Dr. Jorge Luis Zambrano Martinez, Ph.D.',
  date: 'Mayo 2026',
  location: 'Samborondon - Ecuador',
  team: [
    'Luis Alberto Herrera-Lara',
    '[Integrante 2]',
    '[Integrante 3]',
    '[Integrante 4]',
    '[Integrante 5]'
  ],
  repo: 'https://github.com/l6a6h6l/tarea3-criptoestego',
  pdfReport: null // ej: '/informe.pdf' si subes el PDF a /public
}

// ============================================================================
// TL;DR para el hero
// ============================================================================
export const tldr =
  'La criptografia protege el CONTENIDO asumiendo que el adversario sabra que hay comunicacion. La esteganografia protege la EXISTENCIA asumiendo que cualquier contenido detectado puede ser leido. No son alternativas excluyentes: son dimensiones ortogonales de la seguridad. La literatura indexada de la ultima decada apunta inequivocamente al paradigma hibrido.'

// ============================================================================
// FUNDAMENTOS - Tarjetas con etimologia, modelos y taxonomia
// ============================================================================
export const foundations = {
  crypto: {
    name: 'Criptologia',
    etym: 'gr. kryptos "oculto" + logos "estudio"',
    summary:
      'Ciencia que estudia criptografia (diseno) y criptoanalisis (ruptura). El mensaje cifrado es VISIBLE pero INCOMPRENSIBLE sin la clave.',
    models: [
      { name: 'Principio de Kerckhoff (1883)', desc: 'La seguridad debe residir en la clave, no en el secreto del algoritmo.' },
      { name: 'Shannon (1949)', desc: 'Confusion + difusion; el one-time pad ofrece secreto perfecto.' }
    ],
    taxonomy: [
      { label: 'Simetrica', value: 'DES (obsoleto), 3DES (deprecado), AES (FIPS 197), ChaCha20-Poly1305 (RFC 8439, TLS 1.3)' },
      { label: 'Asimetrica', value: 'RSA (factorizacion), ECC (Curve25519, secp256r1), ElGamal, Diffie-Hellman' },
      { label: 'Hash', value: 'SHA-2, SHA-3/Keccak (FIPS 202), BLAKE2/3' },
      {
        label: 'Poscuantica (PQC)',
        value:
          'NIST 2024-08-13: FIPS 203 ML-KEM (Kyber), FIPS 204 ML-DSA (Dilithium), FIPS 205 SLH-DSA (SPHINCS+). FALCON: FIPS 206. HQC seleccionado 2025-03-11. CNSA 2.0 (NSA) mandata migracion 2030-2033.'
      }
    ]
  },
  stego: {
    name: 'Esteganografia',
    etym: 'gr. steganos "cubierto" + graphein "escribir"',
    summary:
      'Oculta la EXISTENCIA misma del mensaje dentro de un portador inocuo. Si se extrae, el mensaje esta en claro.',
    models: [
      {
        name: 'Problema del Prisionero (Simmons, CRYPTO 1983)',
        desc: 'Alice y Bob coordinan una fuga a traves de un canal monitoreado por el guardia Willie.'
      },
      {
        name: 'Anderson & Petitcolas (1998, IEEE JSAC)',
        desc: 'On the Limits of Steganography: derivo las cotas teoricas aun vigentes.'
      }
    ],
    taxonomy: [
      { label: 'Multimedia', value: 'Imagen (LSB, paleta, DCT/DWT), audio (LSB, fase, eco), video (HEVC, H.264), texto' },
      { label: 'Linguistica', value: 'Acrosticos, sustitucion sintactica' },
      { label: 'De red', value: 'Covert channels TCP/IP, ICMP, DNS, HTTP, VoIP (Mazurczyk), IPv6 ext. headers' },
      { label: 'JPEG clasico', value: 'JSteg, OutGuess (Provos 2001), F5 (Westfeld 2001), nsF5' },
      {
        label: 'Adaptativa (SOTA)',
        value:
          'HUGO (Pevny 2010), WOW (Holub & Fridrich 2012), S/J-UNIWARD (2014), HILL (Li 2014), MiPod (Sedighi 2016). Syndrome-trellis codes (Filler 2011).'
      }
    ]
  }
}

// ============================================================================
// COMPARATIVA - 9 dimensiones
// ============================================================================
export const comparisonTable = [
  {
    dim: 'Objetivo',
    crypto: 'Confidencialidad, integridad, autenticacion',
    stego: 'Imperceptibilidad (encubrir la existencia)'
  },
  {
    dim: 'Garantia formal',
    crypto: 'Secreto computacional (Shannon, 1949) sobre problemas duros (factorizacion, log discreto, LWE)',
    stego: 'Indetectabilidad estadistica (Cachin, 1998): epsilon-seguridad via divergencia KL'
  },
  {
    dim: 'Detectabilidad',
    crypto: 'Ciphertext detectable (alta entropia) pero ilegible',
    stego: 'Idealmente indetectable; si se detecta cae sobre la criptografia subyacente'
  },
  {
    dim: 'Overhead',
    crypto: 'Bajo-medio. AES-128 con AES-NI ~1 ciclo/byte. RSA-2048: ms',
    stego: 'Variable. LSB es O(n). UNIWARD/HUGO requieren mapas de costos (alto)'
  },
  {
    dim: 'Capacidad',
    crypto: 'Sin perdida (ciphertext ~ plaintext)',
    stego: 'Restringida por bpp del cover: 0.1-4 bpp en LSB; <=0.4 seguro adaptativa'
  },
  {
    dim: 'Metricas',
    crypto: 'NIST SP 800-22, IND-CCA2',
    stego: 'PSNR (>40 dB), SSIM (>=0.98), MSE (~0), NCC, BER, bpp'
  },
  {
    dim: 'Resiliencia cuantica',
    crypto: 'RSA/ECC rotos por Shor; AES-256/SHA-3 reducidos por Grover; PQC en transicion',
    stego: 'Casi no afectada (el cover es la barrera, no un problema matematico)'
  },
  {
    dim: 'Marco legal',
    crypto: 'Solido (eIDAS, FIPS, eSign Act). Algunos paises: export controls',
    stego: 'Gris. En regimenes autoritarios la mera ocultacion puede ser ilicita'
  },
  {
    dim: 'Punto de falla',
    crypto: 'Mala gestion de claves, side-channels, PRNG defectuoso',
    stego: 'Analisis estadistico (chi^2, RS, SPAM/SRM, CNNs); cover de baja entropia'
  }
]

// ============================================================================
// CASOS DE USO - reales/hipoteticos legitimos
// ============================================================================
export const useCases = {
  crypto: [
    {
      title: 'TLS 1.3 (RFC 8446)',
      detail: 'X25519/secp256r1 + AES-GCM/ChaCha20-Poly1305. Cubre ~76% de paginas web (Web Almanac 2025, HTTP Archive).'
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
      detail: 'GDPR art. 32, LOPDGDD, HIPAA (validacion FIPS 140).'
    }
  ],
  stego: [
    {
      title: 'Watermarking digital y derechos de autor',
      detail: 'Cox, Miller & Bloom (2007). Cinavia, Office, fotografia profesional.'
    },
    {
      title: 'Autenticacion y trazabilidad documental',
      detail: 'Anderson & Petitcolas (1998) mencionan los reportes del Reino Unido bajo Thatcher.'
    },
    {
      title: 'Comunicaciones bajo vigilancia',
      detail: 'Periodismo y activismo. Herramientas: OpenStego, Steghide.'
    },
    { title: 'Forense y antiforense', detail: 'Ocultacion y deteccion de evidencia digital.' },
    { title: 'DRM', detail: 'Marcas robustas para gestion de derechos.' }
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
      'APT estatal vinculada a Stuxnet. Robaba informacion de sistemas industriales y la exfiltraba embebida en imagenes JPEG hacia servidores C2.',
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
      'Banking trojan que descarga su archivo de configuracion oculto dentro de imagenes JPEG aparentemente benignas alojadas en servidores comprometidos.',
    cves: []
  },
  {
    year: 2014,
    name: 'Lurk Downloader',
    type: 'crimeware',
    technique: 'URLs en BMPs blancos via LSB + XOR',
    coverFormat: 'BMP',
    source: 'Stone-Gross, Dell SecureWorks',
    details:
      '350,000 victimas estimadas. Descargaba URLs de payload escondidas en imagenes BMP aparentemente vacias mediante LSB cifrado con XOR.',
    cves: []
  },
  {
    year: 2015,
    name: 'Stegoloader / Gatak',
    type: 'crimeware',
    technique: 'Modulo principal en PNG, RC4 en memoria',
    coverFormat: 'PNG',
    source: 'Dell SecureWorks',
    details:
      'Afecto principalmente sectores sanitario y educativo. El loader inicial era pequeno; el modulo principal viajaba dentro de un PNG y se descifraba en memoria.',
    cves: []
  },
  {
    year: 2015,
    name: 'Equation Group',
    type: 'apt-state',
    technique: 'Multiples tecnicas esteganograficas',
    coverFormat: 'varios',
    source: 'Kaspersky GReAT',
    details:
      'Operacion atribuida a un actor estatal de primer nivel. Empleo esteganografia para ocultar payloads y comunicaciones C2 en multiples vectores.',
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
      'Mas de 1 millon de usuarios expuestos a traves de banners publicitarios. Codigo JavaScript malicioso oculto en el canal alfa de imagenes PNG servidas como anuncios.',
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
      'Exploit kit que replico la tecnica de Stegano para entregar exploits ocultos dentro de imagenes PNG aparentemente benignas.',
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
      'APT ruso. Backdoor para Microsoft Exchange que recibia comandos C2 ocultos en attachments PDF y JPG de correos enviados al servidor comprometido.',
    cves: []
  },
  {
    year: 2020,
    name: 'MontysThree (MT3)',
    type: 'apt-state',
    technique: 'Esteganografia custom en BMP + 3DES bajo RSA',
    coverFormat: 'BMP',
    source: 'Legezo, Kaspersky GReAT',
    details:
      'Espionaje industrial. Comunicaciones C2 sobre servicios legitimos (Google, Microsoft, Dropbox). Payload encapsulado en BMP con un esquema esteganografico propietario.',
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
      'Abusa Dropbox como canal de comando y control. Embebe codigo PowerShell y stealer .NET en PNGs mediante LSB.',
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
      'Atribuido a TA410 / Cicada / APT10. Tras explotar ProxyShell y ProxyLogon, ocultaba un backdoor dentro del logo de Windows alojado en un repositorio GitHub publico.',
    cves: []
  },
  {
    year: 2023,
    name: 'Lumma Stealer',
    type: 'crimeware',
    technique: 'LSB para recuperar payloads',
    coverFormat: 'PNG',
    source: 'Multiples firmas AV',
    details:
      'Crimeware moderno (info stealer) que utiliza LSB para descargar y reconstruir payloads adicionales evadiendo la deteccion en redes corporativas.',
    cves: []
  }
]

// ============================================================================
// CAVEAT cautelar - Al-Qaeda pre-9/11
// ============================================================================
export const stegoMyth = {
  title: 'El mito Al-Qaeda pre-9/11',
  body:
    'El supuesto uso de esteganografia por Al-Qaeda reportado por USA Today (febrero 2001) nunca fue confirmado tecnicamente. Provos y Honeyman (2003) analizaron millones de imagenes con StegDetect y StegBreak sin hallar evidencia. Citarlo solo con esta cautela.'
}

// ============================================================================
// ATAQUES - criptoanalisis, amenaza cuantica, estegoanalisis
// ============================================================================
export const attacks = {
  crypto: {
    models: [
      'Ciphertext-only',
      'Known-plaintext (rompio Enigma)',
      'Chosen-plaintext (CPA)',
      'Chosen-ciphertext (CCA / CCA2, estandar moderno)',
      'Man-in-the-Middle'
    ],
    techniques: [
      { name: 'Fuerza bruta', ref: 'Espacio de claves' },
      { name: 'Analisis de frecuencia', ref: 'Clasico, sustituciones' },
      { name: 'Diferencial', ref: 'Biham & Shamir (1991) sobre DES' },
      { name: 'Lineal', ref: 'Matsui (1993)' },
      { name: 'Algebraico', ref: 'Sistemas no lineales sobre GF(2)' },
      { name: 'Cumpleanos', ref: 'Hashes ~2^(n/2)' },
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
          'RSA-2048 podria romperse "en menos de una semana con <1M qubits ruidosos", reduccion 20x vs Gidney & Ekera 2019 (~20M qubits).'
      },
      {
        algo: 'Grover (1996)',
        impact:
          'Aceleracion cuadratica -> AES-128 efectivo 64 bits, SHA-256 efectivo 128 bits. NIST recomienda >=256 bits simetricos PQ.'
      },
      {
        algo: 'HNDL (Harvest Now, Decrypt Later)',
        impact: 'Adversarios capturan trafico hoy con la intencion de descifrarlo cuando exista un computador cuantico relevante.'
      }
    ]
  },
  stego: {
    classic: [
      { name: 'Chi-cuadrado', ref: 'Westfeld & Pfitzmann (2000). Rompio EzStego, JSteg, Steganos, S-Tools.' },
      { name: 'RS Analysis', ref: 'Fridrich, Goljan & Du (2001)' },
      { name: 'Sample Pair Analysis', ref: 'Dumitrescu, Wu & Wang (2003)' }
    ],
    preDL: [
      { name: 'SRM (34671 features)', ref: 'Fridrich & Kodovsky (2012), IEEE TIFS' },
      { name: 'Ensemble Classifier', ref: 'Kodovsky, Fridrich & Holub (2012)' }
    ],
    deepLearning: [
      { name: 'Xu-Net (2016)', ref: 'Pionera en CNN para estegoanalisis' },
      { name: 'Ye-Net (2017)', ref: 'IEEE TIFS 12(11)' },
      { name: 'Yedroudj-Net (2018)', ref: 'ICASSP' },
      { name: 'SRNet (2019)', ref: 'Boroumand, Chen & Fridrich, IEEE TIFS - referencia actual.' }
    ],
    limits:
      'Los detectores fallan a bajos payloads (<=0.1 bpp con QF 95) y sufren cover-source mismatch (problema central de ALASKA #2, WIFS 2020).'
  },
  latam: [
    { ref: 'Cuzco, Mantilla, Mendez & Avila (2019), ESPOCH', detail: 'Revista Espacios 40(38). Esquema hibrido cripto-LSB.' },
    {
      ref: 'Rosas, Izurieta & Buenano (2024), Univ. Central del Ecuador',
      detail: 'Polo del Conocimiento 9(3). Revision sistematica.'
    },
    { ref: 'Velasquez-Moreira, Molina-Sabando & Briones-Veliz (2017), ULEAM', detail: 'Tecnicas en audio e imagen.' }
  ]
}

// ============================================================================
// HIBRIDOS - integracion cripto-esteganografica
// ============================================================================
export const hybrid = {
  cascade: [
    { step: 'Plaintext', icon: 'FileText', desc: 'Mensaje en claro.' },
    { step: 'AES-GCM / ChaCha20-Poly1305', icon: 'Lock', desc: 'Cifrado autenticado: alta entropia + integridad.' },
    { step: 'Ciphertext', icon: 'Binary', desc: 'Bytes pseudoaleatorios indistinguibles de ruido.' },
    { step: 'Embebido LSB / DCT / S-UNIWARD', icon: 'ImagePlus', desc: 'Esteganografia adaptativa minimiza la distorsion detectable.' },
    { step: 'Stego cover', icon: 'Image', desc: 'Imagen aparentemente normal, lista para transmision.' },
    { step: 'Canal publico', icon: 'Wifi', desc: 'Email, redes sociales, cloud storage. No levanta sospechas.' },
    { step: 'Receptor', icon: 'UserCheck', desc: 'Extrae, descifra y autentica.' }
  ],
  schemes: [
    { name: 'AES + LSB pseudoaleatorio', source: 'IEEE ICCED / ICCCNT 2018-2023' },
    { name: 'ECC + DCT JPEG (P-256)', source: 'Multiples papers IEEE' },
    { name: 'RSA + audio', source: 'Gambhir & Khara (IEEE 2014)' },
    { name: 'AES + ECC + estego para cloud', source: 'IEEE Access (2021)' },
    { name: 'StegaCrypt / Trio-Security', source: 'MDPI Applied Sciences 13(21), 2023' },
    { name: 'QKD + esteganografia', source: 'Resistente a Shor y a estegoanalisis' },
    { name: 'Crypto-Stego HEVC Android IoT', source: 'Almomani et al. (2022) Sensors 22(6) 2281 - evade 70 motores AV' },
    { name: 'AES + LSB + matriz magica + transposicion', source: 'Nature Sci Reports (2025)' }
  ],
  metrics: [
    { name: 'PSNR', value: '> 40 dB', desc: 'Peak Signal-to-Noise Ratio (calidad visual).' },
    { name: 'SSIM', value: '>= 0.98', desc: 'Similitud estructural percibida.' },
    { name: 'MSE', value: '~ 0', desc: 'Error cuadratico medio entre cover y stego.' },
    { name: 'NCC', value: '~ 1', desc: 'Coeficiente de correlacion normalizado.' },
    { name: 'BER', value: '0', desc: 'Bit Error Rate en recuperacion del payload.' },
    { name: 'bpp', value: '<= 0.4', desc: 'Bits per pixel seguros en esquemas adaptativos.' },
    { name: 'P_E', value: 'min', desc: 'Probabilidad de error de deteccion (vs SRNet/Yedroudj-Net/SRM-EC).' }
  ],
  applications: [
    'IoT industrial: cripto ligera (PRESENT, Speck, ASCON) + LSB selectivo',
    'Cloud storage cifrado con disimulo',
    'HIPAA: imagenes medicas con metadatos protegidos',
    'Militares: PQC + estego para operaciones COMSEC',
    'Banca: OTP en QR + HMAC'
  ]
}

// ============================================================================
// CONCLUSION GRUPAL
// ============================================================================
export const conclusion = {
  headline:
    'NO son alternativas excluyentes: son complementarias y ortogonales. La criptografia protege contenido; la esteganografia protege existencia. Cada una falla donde la otra es fuerte.',
  recommendation:
    'Paradigma hibrido: AES-GCM o ChaCha20-Poly1305 + esteganografia adaptativa (S-UNIWARD / HILL) + migracion planificada a ML-KEM-768 + ML-DSA-65 antes de 2030 (CNSA 2.0).',
  latamLines: [
    'Estegoanalisis CNN sobre trafico TLS 1.3',
    'Deteccion de covert channels en DNS-over-HTTPS (DoH)',
    'Evaluacion empirica de PQC en IoT industrial latinoamericano'
  ]
}

// ============================================================================
// REFERENCIAS APA 7
// ============================================================================
export const referencias = [
  {
    id: 'almomani-2022',
    apa:
      'Almomani, I., Alkhayer, A., & El-Shafai, W. (2022). A crypto-steganography approach for hiding ransomware within HEVC streams in Android IoT devices. Sensors, 22(6), 2281.',
    doi: '10.3390/s22062281',
    url: 'https://doi.org/10.3390/s22062281',
    tags: ['hibrido', 'iot', 'malware']
  },
  {
    id: 'anderson-1998',
    apa:
      'Anderson, R. J., & Petitcolas, F. A. P. (1998). On the limits of steganography. IEEE Journal on Selected Areas in Communications, 16(4), 474-481.',
    doi: '10.1109/49.668971',
    url: 'https://doi.org/10.1109/49.668971',
    tags: ['fundamentos', 'limites']
  },
  {
    id: 'auerbach-2025',
    apa:
      'Auerbach, B., Katsumata, S., & Prest, T. (2025). Sparse Post-Quantum Ratchet (SPQR): A post-quantum extension for the Signal protocol. PQShield / NYU / AIST.',
    url: 'https://signal.org/blog/spqr/',
    tags: ['pqc', 'signal']
  },
  {
    id: 'boroumand-2019',
    apa:
      'Boroumand, M., Chen, M., & Fridrich, J. (2019). Deep residual network for steganalysis of digital images (SRNet). IEEE Transactions on Information Forensics and Security, 14(5), 1181-1193.',
    doi: '10.1109/TIFS.2018.2871749',
    url: 'https://doi.org/10.1109/TIFS.2018.2871749',
    tags: ['estegoanalisis', 'deep learning']
  },
  {
    id: 'cachin-1998',
    apa:
      'Cachin, C. (1998). An information-theoretic model for steganography. In Information Hiding (LNCS 1525, pp. 306-318). Springer.',
    doi: '10.1007/3-540-49380-8_21',
    url: 'https://doi.org/10.1007/3-540-49380-8_21',
    tags: ['fundamentos', 'modelo formal']
  },
  {
    id: 'cogranne-2020',
    apa:
      'Cogranne, R., Giboulot, Q., & Bas, P. (2020). ALASKA #2: Challenging academic research on steganalysis with realistic images. IEEE WIFS 2020.',
    url: 'https://hal.archives-ouvertes.fr/hal-02945679',
    tags: ['estegoanalisis', 'dataset']
  },
  {
    id: 'cox-2007',
    apa:
      'Cox, I. J., Miller, M. L., Bloom, J. A., Fridrich, J., & Kalker, T. (2007). Digital watermarking and steganography (2nd ed.). Morgan Kaufmann.',
    tags: ['watermarking', 'libro']
  },
  {
    id: 'cuzco-2019',
    apa:
      'Cuzco, M., Mantilla, M., Mendez, J., & Avila, P. (2019). Esquema hibrido de criptografia y esteganografia LSB. Revista Espacios, 40(38), 14. (ESPOCH, Ecuador).',
    url: 'https://www.revistaespacios.com/a19v40n38/19403814.html',
    tags: ['latam', 'hibrido']
  },
  {
    id: 'eset-2016',
    apa:
      'Lipovsky, R., & Kafka, A. (2016). Stegano exploit kit poisoning pixels. ESET WeLiveSecurity. Diciembre 2016.',
    url: 'https://www.welivesecurity.com/2016/12/06/readers-popular-websites-targeted-stealthy-stegano-exploit-kit-hiding-pixels-malicious-ads/',
    tags: ['malware', 'exploit kit']
  },
  {
    id: 'faou-2019',
    apa:
      'Faou, M. (2019). Turla LightNeuron: An email too far. ESET Research White Paper.',
    url: 'https://www.welivesecurity.com/wp-content/uploads/2019/05/ESET-LightNeuron.pdf',
    tags: ['apt', 'malware']
  },
  {
    id: 'filler-2011',
    apa:
      'Filler, T., Judas, J., & Fridrich, J. (2011). Minimizing additive distortion in steganography using syndrome-trellis codes. IEEE Transactions on Information Forensics and Security, 6(3), 920-935.',
    doi: '10.1109/TIFS.2011.2134094',
    url: 'https://doi.org/10.1109/TIFS.2011.2134094',
    tags: ['esteganografia', 'codigos']
  },
  {
    id: 'fridrich-2009',
    apa: 'Fridrich, J. (2009). Steganography in digital media: Principles, algorithms, and applications. Cambridge University Press.',
    tags: ['libro', 'fundamentos']
  },
  {
    id: 'fridrich-2001',
    apa:
      'Fridrich, J., Goljan, M., & Du, R. (2001). Detecting LSB steganography in color and grayscale images. ACM Workshop on Multimedia and Security, 22-28.',
    doi: '10.1145/1232454.1232466',
    tags: ['estegoanalisis']
  },
  {
    id: 'fridrich-2012',
    apa:
      'Fridrich, J., & Kodovsky, J. (2012). Rich models for steganalysis of digital images. IEEE Transactions on Information Forensics and Security, 7(3), 868-882.',
    doi: '10.1109/TIFS.2012.2190402',
    url: 'https://doi.org/10.1109/TIFS.2012.2190402',
    tags: ['estegoanalisis', 'SRM']
  },
  {
    id: 'gidney-2025',
    apa:
      'Gidney, C. (2025). How to factor 2048 bit RSA integers with less than a million noisy qubits. arXiv:2505.15917.',
    url: 'https://arxiv.org/abs/2505.15917',
    tags: ['cuantica', 'shor']
  },
  {
    id: 'holub-2012',
    apa:
      'Holub, V., & Fridrich, J. (2012). Designing steganographic distortion using directional filters (WOW). IEEE WIFS 2012, 234-239.',
    doi: '10.1109/WIFS.2012.6412655',
    url: 'https://doi.org/10.1109/WIFS.2012.6412655',
    tags: ['esteganografia', 'adaptativa']
  },
  {
    id: 'holub-2014',
    apa:
      'Holub, V., Fridrich, J., & Denemark, T. (2014). Universal distortion function for steganography in an arbitrary domain (UNIWARD). EURASIP Journal on Information Security, 2014(1), 1.',
    doi: '10.1186/1687-417X-2014-1',
    url: 'https://doi.org/10.1186/1687-417X-2014-1',
    tags: ['esteganografia', 'adaptativa']
  },
  {
    id: 'httparchive-2026',
    apa: 'HTTP Archive. (2026). Web Almanac 2025: Security chapter.',
    url: 'https://almanac.httparchive.org/en/2025/security',
    tags: ['tls', 'estadistica']
  },
  {
    id: 'kahn-1996',
    apa: 'Kahn, D. (1996). The codebreakers: The comprehensive history of secret communication from ancient times to the internet (2nd ed.). Scribner.',
    tags: ['historia', 'libro']
  },
  {
    id: 'kaspersky-2020',
    apa: 'Legezo, D. (2020). MontysThree: Industrial espionage with steganography and a Russian accent. Kaspersky GReAT.',
    url: 'https://securelist.com/montysthree-industrial-espionage/98972/',
    tags: ['apt', 'malware']
  },
  {
    id: 'katz-2020',
    apa: 'Katz, J., & Lindell, Y. (2020). Introduction to modern cryptography (3rd ed.). CRC Press.',
    tags: ['libro', 'criptografia']
  },
  {
    id: 'kerckhoffs-1883',
    apa: 'Kerckhoffs, A. (1883). La cryptographie militaire. Journal des sciences militaires, IX, 5-83.',
    tags: ['historia', 'principio']
  },
  {
    id: 'marlinspike-2016',
    apa: 'Marlinspike, M., & Perrin, T. (2016). The Double Ratchet Algorithm. Open Whisper Systems.',
    url: 'https://signal.org/docs/specifications/doubleratchet/',
    tags: ['signal', 'protocolos']
  },
  {
    id: 'mazurczyk-2008',
    apa:
      'Mazurczyk, W., & Szczypiorski, K. (2008). Steganography of VoIP streams. OTM Confederated International Conferences, 1001-1018.',
    doi: '10.1007/978-3-540-88873-4_6',
    tags: ['red', 'voip']
  },
  {
    id: 'nist-2024a',
    apa: 'National Institute of Standards and Technology. (2024a). FIPS 203: Module-Lattice-Based Key-Encapsulation Mechanism Standard (ML-KEM).',
    url: 'https://csrc.nist.gov/pubs/fips/203/final',
    tags: ['pqc', 'estandar']
  },
  {
    id: 'nist-2024b',
    apa: 'National Institute of Standards and Technology. (2024b). FIPS 204: Module-Lattice-Based Digital Signature Standard (ML-DSA).',
    url: 'https://csrc.nist.gov/pubs/fips/204/final',
    tags: ['pqc', 'estandar']
  },
  {
    id: 'nist-2024c',
    apa: 'National Institute of Standards and Technology. (2024c). FIPS 205: Stateless Hash-Based Digital Signature Standard (SLH-DSA).',
    url: 'https://csrc.nist.gov/pubs/fips/205/final',
    tags: ['pqc', 'estandar']
  },
  {
    id: 'pevny-2010',
    apa:
      'Pevny, T., Filler, T., & Bas, P. (2010). Using high-dimensional image models to perform highly undetectable steganography (HUGO). Information Hiding (LNCS 6387, pp. 161-177).',
    doi: '10.1007/978-3-642-16435-4_13',
    tags: ['esteganografia', 'adaptativa']
  },
  {
    id: 'provos-2003',
    apa:
      'Provos, N., & Honeyman, P. (2003). Hide and seek: An introduction to steganography. IEEE Security & Privacy, 1(3), 32-44.',
    doi: '10.1109/MSECP.2003.1203220',
    tags: ['fundamentos', 'estegoanalisis']
  },
  {
    id: 'rosas-2024',
    apa:
      'Rosas, J., Izurieta, M., & Buenano, A. (2024). Esteganografia y criptografia: Revision sistematica. Polo del Conocimiento, 9(3). (Universidad Central del Ecuador).',
    url: 'https://polodelconocimiento.com/ojs/index.php/es',
    tags: ['latam', 'revision']
  },
  {
    id: 'segura-2014',
    apa: 'Segura, J. (2014). Hiding in plain sight: A story about ZeusVM malware configuration. Malwarebytes Labs.',
    url: 'https://www.malwarebytes.com/blog/news/2014/02/hiding-in-plain-sight-a-story-about-a-sneaky-banking-trojan',
    tags: ['malware', 'banking']
  },
  {
    id: 'shannon-1949',
    apa: 'Shannon, C. E. (1949). Communication theory of secrecy systems. Bell System Technical Journal, 28(4), 656-715.',
    doi: '10.1002/j.1538-7305.1949.tb00928.x',
    tags: ['fundamentos', 'historia']
  },
  {
    id: 'shor-1997',
    apa:
      'Shor, P. W. (1997). Polynomial-time algorithms for prime factorization and discrete logarithms on a quantum computer. SIAM Journal on Computing, 26(5), 1484-1509.',
    doi: '10.1137/S0097539795293172',
    tags: ['cuantica', 'algoritmo']
  },
  {
    id: 'simmons-1984',
    apa: 'Simmons, G. J. (1984). The prisoners problem and the subliminal channel. Advances in Cryptology - CRYPTO 83, 51-67.',
    doi: '10.1007/978-1-4684-4730-9_5',
    tags: ['fundamentos', 'modelo']
  },
  {
    id: 'stone-gross-2014',
    apa: 'Stone-Gross, B. (2014). Malware analysis of the Lurk Downloader. Dell SecureWorks Counter Threat Unit.',
    url: 'https://www.secureworks.com/research/malware-analysis-of-the-lurk-downloader',
    tags: ['malware', 'crimeware']
  },
  {
    id: 'symantec-2022',
    apa:
      'Symantec Threat Hunter Team. (2022). Witchetty: Group uses updated toolset in attacks on governments in Middle East. Symantec Enterprise Blogs.',
    url: 'https://symantec-enterprise-blogs.security.com/threat-intelligence/witchetty-steganography-espionage',
    tags: ['apt', 'malware']
  },
  {
    id: 'velasquez-2017',
    apa:
      'Velasquez-Moreira, R., Molina-Sabando, L., & Briones-Veliz, J. (2017). Tecnicas de esteganografia en audio e imagen. Polo del Conocimiento, 2(1). (ULEAM, Ecuador).',
    tags: ['latam']
  },
  {
    id: 'westfeld-2000',
    apa:
      'Westfeld, A., & Pfitzmann, A. (2000). Attacks on steganographic systems. Information Hiding (LNCS 1768, pp. 61-76). Springer.',
    doi: '10.1007/10719724_5',
    tags: ['estegoanalisis', 'chi2']
  },
  {
    id: 'yedroudj-2018',
    apa:
      'Yedroudj, M., Comby, F., & Chaumont, M. (2018). Yedroudj-Net: An efficient CNN for spatial steganalysis. IEEE ICASSP 2018, 2092-2096.',
    doi: '10.1109/ICASSP.2018.8461438',
    tags: ['estegoanalisis', 'deep learning']
  },
  {
    id: 'ye-2017',
    apa:
      'Ye, J., Ni, J., & Yi, Y. (2017). Deep learning hierarchical representations for image steganalysis. IEEE Transactions on Information Forensics and Security, 12(11), 2545-2557.',
    doi: '10.1109/TIFS.2017.2710946',
    tags: ['estegoanalisis', 'deep learning']
  }
]
