import { CONTENT } from '../data/content'

export default function Prompt({ t }) {
  return (
    <span>
      <span className={`font-bold ${t.host}`}>{CONTENT.user}@{CONTENT.host}</span>
      <span className={t.dim}>:</span>
      <span className={`font-bold ${t.prompt}`}>~</span>
      <span className={t.dim}>$ &nbsp;</span>
    </span>
  )
}