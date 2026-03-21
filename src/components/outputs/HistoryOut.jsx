export default function HistoryOut({ t, historyStack }) {
  return (
    <div className="py-1 space-y-0.5">
      {historyStack.length === 0
        ? <div className={t.dim}>No history yet.</div>
        : historyStack.map((h, i) => (
            <div key={i} className={t.text}>
              <span className={t.dim}>{historyStack.length - i}  </span>{h}
            </div>
          ))
      }
    </div>
  )
}
