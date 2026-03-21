import { CONTENT } from '../../data/content'

export default function SkillsOut({ t }) {
  return (
    <div className="py-1 space-y-1">
      <div className={t.accent}>Skills & Technologies:</div>
      <div className="flex flex-wrap gap-2 mt-1">
        {CONTENT.skills.map(s => (
          <span key={s} className={`border ${t.border} px-2 py-0.5 text-sm rounded ${t.text}`}>
            {s}
          </span>
        ))}
      </div>
    </div>
  )
}
