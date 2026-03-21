import { CONTENT } from '../../data/content'

export default function AboutOut({ t }) {
  const { name, role, location, bio } = CONTENT.about
  return (
    <div className="space-y-1 py-1">
      <div className={t.accent}>╔══════════════════════════╗</div>
      <div className={t.accent}>║         ABOUT ME         ║</div>
      <div className={t.accent}>╚══════════════════════════╝</div>
      <div className={t.text}><span className={t.dim}>name     </span>{name}</div>
      <div className={t.text}><span className={t.dim}>role     </span>{role}</div>
      <div className={t.text}><span className={t.dim}>location </span>{location}</div>
      <div className={t.text}><span className={t.dim}>bio      </span>{bio}</div>
    </div>
  )
}
