import { THEMES } from '../../data/themes'

export default function ThemesOut({ t, onSet }) {
  return (
    <div className="py-1 space-y-1">
      <div className={t.accent}>Available themes:</div>
      {Object.keys(THEMES).map(name => (
        <div key={name} className="flex items-center gap-3">
          <span className={t.text}>{name}</span>
          <button onClick={() => onSet(name)} className={`text-xs underline ${t.link} hover:opacity-80`}>
            apply
          </button>
        </div>
      ))}
      <div className={t.dim}>Usage: theme &lt;name&gt;</div>
    </div>
  )
}
