export default function SudoEgg({ t }) {
  return (
    <div className="py-1 space-y-1">
      <div className={t.error}>Permission denied: Nice try 😄</div>
      <div className={t.dim}>This incident will be reported.</div>
    </div>
  )
}