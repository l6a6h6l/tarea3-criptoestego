import { useMemo, useState } from 'react'
import { BookMarked, Search, ExternalLink, Copy, Check, BookOpen, FileText, Shield, AlertTriangle, MapPin } from 'lucide-react'
import { referencias, referenceCategories, apaString } from '../data.js'
import SubTabs from './SubTabs.jsx'

const CATEGORY_ICONS = {
  libros:     BookOpen,
  seminales:  FileText,
  estandares: Shield,
  amenazas:   AlertTriangle,
  latam:      MapPin
}

const REF_BY_ID = Object.fromEntries(referencias.map((r) => [r.id, r]))

function renderParts(parts) {
  return parts.map((p, i) =>
    typeof p === 'string' ? (
      <span key={i}>{p}</span>
    ) : (
      <em key={i}>{p.italic}</em>
    )
  )
}

function ReferenceEntry({ entry, copied, onCopy }) {
  return (
    <li className="group">
      <p className="hanging-indent font-serif text-[13px] md:text-sm text-slate-200">
        {renderParts(entry.parts)}
        {entry.doi && (
          <>
            {' '}
            <a
              href={`https://doi.org/${entry.doi}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline break-all"
            >
              https://doi.org/{entry.doi}
              <ExternalLink size={10} className="inline ml-1 -mt-0.5" />
            </a>
          </>
        )}
        {!entry.doi && entry.url && (
          <>
            {' '}
            <a
              href={entry.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline break-all"
            >
              {entry.url}
              <ExternalLink size={10} className="inline ml-1 -mt-0.5" />
            </a>
          </>
        )}
      </p>
      <div className="hanging-indent mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={() => onCopy(entry)}
          className="inline-flex items-center gap-1 text-[11px] text-slate-500 hover:text-gold font-mono"
          title="Copiar referencia APA al portapapeles"
        >
          {copied === entry.id ? (
            <>
              <Check size={10} className="text-green-400" /> Copiado
            </>
          ) : (
            <>
              <Copy size={10} /> Copiar APA
            </>
          )}
        </button>
      </div>
    </li>
  )
}

export default function References() {
  const [activeCat, setActiveCat] = useState(referenceCategories[0].id)
  const [q, setQ] = useState('')
  const [copied, setCopied] = useState(null)

  const tabs = referenceCategories.map((c) => ({
    id: c.id,
    label: `${c.label} (${c.ids.length})`,
    Icon: CATEGORY_ICONS[c.id]
  }))

  const cat = referenceCategories.find((c) => c.id === activeCat)
  const entries = cat ? cat.ids.map((id) => REF_BY_ID[id]).filter(Boolean) : []

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase()
    if (!term) return entries
    return entries.filter((e) => apaString(e).toLowerCase().includes(term))
  }, [entries, q])

  const copy = async (entry) => {
    try {
      await navigator.clipboard.writeText(apaString(entry))
      setCopied(entry.id)
      setTimeout(() => setCopied(null), 1600)
    } catch {
      /* noop */
    }
  }

  return (
    <section id="referencias" className="section">
      <header className="reveal mb-8 max-w-3xl">
        <p className="kicker mb-2 flex items-center gap-2">
          <BookMarked size={11} /> Bibliografía
        </p>
        <h2 className="h-section mb-4">
          Referencias <span className="gradient-text">APA 7</span>
        </h2>
        <p className="text-slate-400 text-lg">
          {referencias.length} referencias indexadas (IEEE, ACM, Springer,
          Cambridge UP, Morgan Kaufmann, CRC Press, NIST, arXiv) y reportes de
          inteligencia de amenazas (Kaspersky, ESET, Symantec, Dell SecureWorks,
          Malwarebytes). Formato APA 7 estricto con sangría francesa.
        </p>
      </header>

      <SubTabs
        tabs={tabs}
        active={activeCat}
        onChange={(id) => {
          setActiveCat(id)
          setQ('')
        }}
        ariaLabel="Categorías de la bibliografía"
      />

      <div className="reveal mb-6 flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-[260px] max-w-md">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Buscar por autor, año, título…"
            className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-slate-950 border border-slate-700 focus:border-gold/60 focus:ring-1 focus:ring-gold/40 outline-none text-sm"
          />
        </div>
        <span className="text-xs font-mono text-slate-500">
          {filtered.length} / {entries.length} en esta categoría
        </span>
      </div>

      <div className="reveal uees-card p-6 md:p-8">
        {filtered.length === 0 ? (
          <p className="text-center py-8 text-slate-500 font-mono text-sm">
            Sin coincidencias para “{q}” en esta categoría.
          </p>
        ) : (
          <ol className="space-y-5 list-none">
            {filtered.map((e) => (
              <ReferenceEntry key={e.id} entry={e} copied={copied} onCopy={copy} />
            ))}
          </ol>
        )}
      </div>

      <p className="reveal mt-6 text-xs text-slate-500 italic max-w-3xl">
        Formato APA 7ma edición. Títulos de revistas y libros en cursiva,
        volúmenes en cursiva y números entre paréntesis sin cursiva, DOI como
        hipervínculo completo, sangría francesa de 2.5 em.
      </p>
    </section>
  )
}
