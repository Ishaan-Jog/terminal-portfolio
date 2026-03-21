import { useState, useEffect } from 'react'

export function useTypewriter(lines, speed = 28) {
  const [displayed, setDisplayed] = useState([])
  const [done, setDone] = useState(false)

  useEffect(() => {
    let li = 0, ci = 0, cancelled = false
    setDisplayed([])
    setDone(false)

    const tick = () => {
      if (cancelled) return
      if (li >= lines.length) { setDone(true); return }
      const line = lines[li]
      if (ci <= line.length) {
        setDisplayed(prev => {
          const next = [...prev]
          next[li] = line.slice(0, ci)
          return next
        })
        ci++
        setTimeout(tick, ci === 0 ? 120 : speed)
      } else {
        li++; ci = 0
        setTimeout(tick, 80)
      }
    }
    tick()
    return () => { cancelled = true }
  }, [])

  return { displayed, done }
}