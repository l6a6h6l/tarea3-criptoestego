import { BookMarked, Sparkle } from 'lucide-react'

// === BIBLIOGRAFIA EN FORMATO APA 7 ===
// Cada entrada es JSX directo. Los titulos de libros, nombres de revistas y
// volumenes van en <em>. DOI/URL como <a target="_blank">. La sangria
// francesa la aplica .hanging-indent (ver index.css).
const bibliography = {
  'Libros y obras de referencia': [
    <>Cox, I. J., Miller, M. L., &amp; Bloom, J. A. (2007). <em>Digital watermarking and steganography</em> (2nd ed.). Morgan Kaufmann.</>,
    <>Fridrich, J. (2009). <em>Steganography in digital media: Principles, algorithms, and applications</em>. Cambridge University Press.</>,
    <>Kahn, D. (1996). <em>The codebreakers: The comprehensive history of secret communication from ancient times to the Internet</em> (Rev. ed.). Scribner.</>,
    <>Katz, J., &amp; Lindell, Y. (2020). <em>Introduction to modern cryptography</em> (3rd ed.). CRC Press.</>
  ],
  'Artículos seminales': [
    <>Almomani, I., Alkhayer, A., &amp; El-Shafai, W. (2022). A crypto-steganography approach for hiding ransomware within HEVC streams in Android IoT devices. <em>Sensors, 22</em>(6), 2281. <a href="https://doi.org/10.3390/s22062281" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">https://doi.org/10.3390/s22062281</a></>,
    <>Anderson, R. J., &amp; Petitcolas, F. A. P. (1998). On the limits of steganography. <em>IEEE Journal on Selected Areas in Communications, 16</em>(4), 474–481. <a href="https://doi.org/10.1109/49.668971" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">https://doi.org/10.1109/49.668971</a></>,
    <>Auerbach, B., Katsumata, S., &amp; Prest, T. (2025). <em>SPQR: A sparse post-quantum ratchet for the Signal Protocol</em> [Whitepaper]. PQShield, NYU, AIST. <a href="https://signal.org/blog/spqr/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">https://signal.org/blog/spqr/</a></>,
    <>Boroumand, M., Chen, M., &amp; Fridrich, J. (2019). Deep residual network for steganalysis of digital images. <em>IEEE Transactions on Information Forensics and Security, 14</em>(5), 1181–1193. <a href="https://doi.org/10.1109/TIFS.2018.2871749" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">https://doi.org/10.1109/TIFS.2018.2871749</a></>,
    <>Cachin, C. (1998). An information-theoretic model for steganography. En <em>Information Hiding: Second International Workshop</em> (LNCS 1525, pp. 306–318). Springer. <a href="https://doi.org/10.1007/3-540-49380-8_21" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">https://doi.org/10.1007/3-540-49380-8_21</a></>,
    <>Cogranne, R., Giboulot, Q., &amp; Bas, P. (2020). ALASKA #2: Challenging academic research on steganalysis with realistic images. En <em>2020 IEEE International Workshop on Information Forensics and Security (WIFS)</em> (pp. 1–5). IEEE. <a href="https://doi.org/10.1109/WIFS49906.2020.9360896" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">https://doi.org/10.1109/WIFS49906.2020.9360896</a></>,
    <>Filler, T., Judas, J., &amp; Fridrich, J. (2011). Minimizing additive distortion in steganography using syndrome-trellis codes. <em>IEEE Transactions on Information Forensics and Security, 6</em>(3), 920–935. <a href="https://doi.org/10.1109/TIFS.2011.2134094" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">https://doi.org/10.1109/TIFS.2011.2134094</a></>,
    <>Fridrich, J., Goljan, M., &amp; Du, R. (2001). Reliable detection of LSB steganography in color and grayscale images. En <em>Proceedings of the 2001 Workshop on Multimedia and Security: New Challenges</em> (pp. 27–30). Association for Computing Machinery. <a href="https://doi.org/10.1145/1232454.1232466" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">https://doi.org/10.1145/1232454.1232466</a></>,
    <>Fridrich, J., &amp; Kodovský, J. (2012). Rich models for steganalysis of digital images. <em>IEEE Transactions on Information Forensics and Security, 7</em>(3), 868–882. <a href="https://doi.org/10.1109/TIFS.2012.2190402" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">https://doi.org/10.1109/TIFS.2012.2190402</a></>,
    <>Gidney, C. (2025). <em>How to factor 2048 bit RSA integers with less than a million noisy qubits</em>. arXiv. <a href="https://arxiv.org/abs/2505.15917" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">https://arxiv.org/abs/2505.15917</a></>,
    <>Holub, V., &amp; Fridrich, J. (2012). Designing steganographic distortion using directional filters. En <em>2012 IEEE International Workshop on Information Forensics and Security (WIFS)</em> (pp. 234–239). IEEE. <a href="https://doi.org/10.1109/WIFS.2012.6412655" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">https://doi.org/10.1109/WIFS.2012.6412655</a></>,
    <>Holub, V., Fridrich, J., &amp; Denemark, T. (2014). Universal distortion function for steganography in an arbitrary domain. <em>EURASIP Journal on Information Security, 2014</em>(1), 1. <a href="https://doi.org/10.1186/1687-417X-2014-1" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">https://doi.org/10.1186/1687-417X-2014-1</a></>,
    <>Kerckhoffs, A. (1883). La cryptographie militaire. <em>Journal des Sciences Militaires, IX</em>, 5–83.</>,
    <>Marlinspike, M., &amp; Perrin, T. (2016). <em>The Double Ratchet algorithm</em> [Especificación técnica]. Signal Foundation. <a href="https://signal.org/docs/specifications/doubleratchet/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">https://signal.org/docs/specifications/doubleratchet/</a></>,
    <>Mazurczyk, W., &amp; Szczypiorski, K. (2008). Steganography of VoIP streams. En R. Meersman &amp; Z. Tari (Eds.), <em>On the Move to Meaningful Internet Systems: OTM 2008</em> (LNCS 5332, pp. 1001–1018). Springer. <a href="https://doi.org/10.1007/978-3-540-88873-4_6" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">https://doi.org/10.1007/978-3-540-88873-4_6</a></>,
    <>Pevný, T., Filler, T., &amp; Bas, P. (2010). Using high-dimensional image models to perform highly undetectable steganography. En R. Böhme, P. W. L. Fong, &amp; R. Safavi-Naini (Eds.), <em>Information Hiding: 12th International Conference</em> (LNCS 6387, pp. 161–177). Springer. <a href="https://doi.org/10.1007/978-3-642-16435-4_13" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">https://doi.org/10.1007/978-3-642-16435-4_13</a></>,
    <>Provos, N., &amp; Honeyman, P. (2003). Hide and seek: An introduction to steganography. <em>IEEE Security &amp; Privacy, 1</em>(3), 32–44. <a href="https://doi.org/10.1109/MSECP.2003.1203220" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">https://doi.org/10.1109/MSECP.2003.1203220</a></>,
    <>Shannon, C. E. (1949). Communication theory of secrecy systems. <em>Bell System Technical Journal, 28</em>(4), 656–715. <a href="https://doi.org/10.1002/j.1538-7305.1949.tb00928.x" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">https://doi.org/10.1002/j.1538-7305.1949.tb00928.x</a></>,
    <>Shor, P. W. (1997). Polynomial-time algorithms for prime factorization and discrete logarithms on a quantum computer. <em>SIAM Journal on Computing, 26</em>(5), 1484–1509. <a href="https://doi.org/10.1137/S0097539795293172" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">https://doi.org/10.1137/S0097539795293172</a></>,
    <>Simmons, G. J. (1984). The prisoners’ problem and the subliminal channel. En D. Chaum (Ed.), <em>Advances in Cryptology: Proceedings of CRYPTO ’83</em> (pp. 51–67). Plenum Press. <a href="https://doi.org/10.1007/978-1-4684-4730-9_5" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">https://doi.org/10.1007/978-1-4684-4730-9_5</a></>,
    <>Westfeld, A., &amp; Pfitzmann, A. (2000). Attacks on steganographic systems: Breaking the steganographic utilities EzStego, Jsteg, Steganos, and S-Tools — and some lessons learned. En A. Pfitzmann (Ed.), <em>Information Hiding: Third International Workshop</em> (LNCS 1768, pp. 61–76). Springer. <a href="https://doi.org/10.1007/10719724_5" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">https://doi.org/10.1007/10719724_5</a></>,
    <>Ye, J., Ni, J., &amp; Yi, Y. (2017). Deep learning hierarchical representations for image steganalysis. <em>IEEE Transactions on Information Forensics and Security, 12</em>(11), 2545–2557. <a href="https://doi.org/10.1109/TIFS.2017.2710946" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">https://doi.org/10.1109/TIFS.2017.2710946</a></>,
    <>Yedroudj, M., Comby, F., &amp; Chaumont, M. (2018). Yedroudj-Net: An efficient CNN for spatial steganalysis. En <em>2018 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)</em> (pp. 2092–2096). IEEE. <a href="https://doi.org/10.1109/ICASSP.2018.8461438" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">https://doi.org/10.1109/ICASSP.2018.8461438</a></>
  ],
  'Estándares y normativas': [
    <>National Institute of Standards and Technology. (2024a). <em>Module-Lattice-Based Key-Encapsulation Mechanism Standard</em> (FIPS PUB 203). U.S. Department of Commerce. <a href="https://doi.org/10.6028/NIST.FIPS.203" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">https://doi.org/10.6028/NIST.FIPS.203</a></>,
    <>National Institute of Standards and Technology. (2024b). <em>Module-Lattice-Based Digital Signature Standard</em> (FIPS PUB 204). U.S. Department of Commerce. <a href="https://doi.org/10.6028/NIST.FIPS.204" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">https://doi.org/10.6028/NIST.FIPS.204</a></>,
    <>National Institute of Standards and Technology. (2024c). <em>Stateless Hash-Based Digital Signature Standard</em> (FIPS PUB 205). U.S. Department of Commerce. <a href="https://doi.org/10.6028/NIST.FIPS.205" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">https://doi.org/10.6028/NIST.FIPS.205</a></>
  ],
  'Informes de inteligencia de amenazas': [
    <>ESET WeLiveSecurity. (2016, 6 de diciembre). <em>Stegano exploit kit poisoning pixels</em>. <a href="https://www.welivesecurity.com/2016/12/06/readers-popular-websites-targeted-stealthy-stegano-exploit-kit-hiding-pixels-malicious-ads/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">https://www.welivesecurity.com/2016/12/06/readers-popular-websites-targeted-stealthy-stegano-exploit-kit-hiding-pixels-malicious-ads/</a></>,
    <>Faou, M. (2019). <em>Turla LightNeuron: One email away from remote code execution</em> [White paper]. ESET. <a href="https://web-assets.esetstatic.com/wls/2019/05/ESET-LightNeuron.pdf" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">https://web-assets.esetstatic.com/wls/2019/05/ESET-LightNeuron.pdf</a></>,
    <>HTTP Archive. (2026). Security. En <em>Web Almanac 2025</em>. <a href="https://almanac.httparchive.org/en/2025/security" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">https://almanac.httparchive.org/en/2025/security</a></>,
    <>Kaspersky GReAT. (2020, 8 de octubre). MontysThree: Industrial espionage with steganography and a Russian accent on both sides. <em>Securelist</em>. <a href="https://securelist.com/montysthree-industrial-espionage/98972/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">https://securelist.com/montysthree-industrial-espionage/98972/</a></>,
    <>Segura, J. (2014, 25 de febrero). Hiding in plain sight: A story about a sneaky banking trojan. <em>Malwarebytes Labs</em>. <a href="https://www.malwarebytes.com/blog/news/2014/02/hiding-in-plain-sight-a-story-about-a-sneaky-banking-trojan" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">https://www.malwarebytes.com/blog/news/2014/02/hiding-in-plain-sight-a-story-about-a-sneaky-banking-trojan</a></>,
    <>Stone-Gross, B. (2014). <em>Malware analysis of the Lurk downloader</em> [Reporte técnico]. Dell SecureWorks Counter Threat Unit. <a href="https://www.secureworks.com/research/malware-analysis-of-the-lurk-downloader" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">https://www.secureworks.com/research/malware-analysis-of-the-lurk-downloader</a></>,
    <>Symantec Threat Hunter Team. (2022, 29 de septiembre). <em>Witchetty: Group uses updated toolset in attacks on governments in Middle East</em> [Reporte de inteligencia]. Broadcom. <a href="https://www.security.com/threat-intelligence/witchetty-steganography-espionage" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">https://www.security.com/threat-intelligence/witchetty-steganography-espionage</a></>
  ],
  'Producción académica latinoamericana': [
    <>Cuzco, R. H., Mantilla, C. E., Méndez, P. M., &amp; Ávila, D. F. (2019). Experiencia de aplicación de criptografía para mejorar la seguridad en un método esteganográfico en imágenes. <em>Revista Espacios, 40</em>(38), 6. <a href="https://www.revistaespacios.com/a19v40n38/19403806.html" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">https://www.revistaespacios.com/a19v40n38/19403806.html</a></>,
    <>Rosas, M., Izurieta, C., &amp; Buenaño, S. (2024). Esteganografía: el arte de ocultar información en medios digitales. <em>Polo del Conocimiento, 9</em>(3), 45–57. <a href="https://doi.org/10.23857/pc.v9i3.6626" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">https://doi.org/10.23857/pc.v9i3.6626</a></>,
    <>Velásquez-Moreira, G. M., Molina-Sabando, L. A., &amp; Briones-Véliz, Í. B. (2017). Análisis de técnicas de esteganografía aplicadas en archivos de audio e imagen. <em>Polo del Conocimiento, 2</em>(1), 51–67. <a href="https://doi.org/10.23857/pc.v2i1.10" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">https://doi.org/10.23857/pc.v2i1.10</a></>
  ]
}

const TOTAL = Object.values(bibliography).reduce((acc, arr) => acc + arr.length, 0)

export default function References() {
  return (
    <section className="py-12 px-6 md:px-12 max-w-5xl mx-auto">
      <header className="reveal mb-10">
        <p className="kicker mb-2 flex items-center gap-2">
          <BookMarked size={11} /> Bibliografía
        </p>
        <h2 className="h-section mb-4">
          Referencias <span className="gradient-text">APA 7</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-3xl">
          {TOTAL} referencias en formato APA 7ma edición, agrupadas por tipo de
          fuente: libros, artículos revisados por pares, estándares NIST,
          reportes de inteligencia de firmas de seguridad y producción
          académica latinoamericana.
        </p>
      </header>

      <div className="space-y-8">
        {Object.entries(bibliography).map(([category, entries]) => (
          <section key={category} className="reveal uees-card p-6 md:p-8">
            <header className="flex items-center gap-2 mb-5">
              <Sparkle size={16} className="text-gold" />
              <h3 className="text-base md:text-lg font-bold text-gold">
                {category} <span className="font-mono text-cream/55 font-normal text-sm">({entries.length})</span>
              </h3>
              <span className="flex-1 h-px bg-gradient-to-r from-gold/40 to-transparent ml-2" />
            </header>

            <div
              className="hanging-indent text-cream/85 text-[13px] md:text-sm"
              style={{ fontFamily: 'Georgia, ui-serif, serif' }}
            >
              {entries.map((entry, i) => (
                <p key={i}>{entry}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  )
}
