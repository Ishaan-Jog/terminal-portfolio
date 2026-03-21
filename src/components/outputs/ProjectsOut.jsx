import { CONTENT } from '../../data/content'

export default function ProjectsOut({ t }) {
  return (
    <div className="py-1 space-y-2">
      <div className={t.accent}>Projects:</div>
      {CONTENT.projects.map(p => (
        <div key={p.name} className="pl-2 border-l-2 border-current border-opacity-30">
          <div className={`font-bold ${t.accent}`}>{p.name}</div>
          <div className={t.text}>{p.desc}</div>
          <a href={p.url} target="_blank" rel="noreferrer" className={`text-sm underline ${t.link}`}>
            {p.url}
          </a>
        </div>
      ))}
    </div>
  )
}
