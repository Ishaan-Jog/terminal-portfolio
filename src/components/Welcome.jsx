import { useEffect } from 'react'
import { useTypewriter } from '../hooks/useTypewriter'
import { BANNER_LINES } from '../data/content'

export default function Welcome({ t, onDone }) {
  const { displayed, done } = useTypewriter(BANNER_LINES, 5)
  useEffect(() => { if (done) onDone() }, [done])

  return (
    <div className={`font-mono text-xs sm:text-sm whitespace-pre ${t.accent} mb-2`}>
      {displayed.map((line, i) => <div key={i}>{line}</div>)}
    </div>
  )
}