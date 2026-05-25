// Pills horizontales scrollable para sub-secciones dentro de una <section>.
export default function SubTabs({ tabs, active, onChange, ariaLabel = 'Sub-secciones' }) {
  return (
    <nav className="reveal -mx-2 overflow-x-auto mb-6" aria-label={ariaLabel}>
      <ul className="flex items-stretch gap-2 px-2 min-w-max">
        {tabs.map(({ id, label, Icon }) => {
          const isActive = id === active
          return (
            <li key={id}>
              <button
                onClick={() => onChange(id)}
                className={`sub-tab ${isActive ? 'is-active' : ''}`}
                aria-current={isActive ? 'true' : undefined}
              >
                {Icon && <Icon size={13} />}
                <span>{label}</span>
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
