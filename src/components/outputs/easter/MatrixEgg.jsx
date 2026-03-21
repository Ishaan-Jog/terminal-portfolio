import { useState, useEffect } from 'react'

const CHARS = "アイウエオカキクケコABCDEF0123456789"

export default function MatrixEgg({ t }) {
  const [grid, setGrid] = useState(() =>
    Array.from({ length: 48 }, () => CHARS[Math.floor(Math.random() * CHARS.length)])
  )
  useEffect(() => {
    const iv = setInterval(() => {
      setGrid(g => g.map(() => CHARS[Math.floor(Math.random() * CHARS.length)]))
    }, 80)
    return () => clearInterval(iv)
  }, [])
  return (
    <div className={`py-1 font-mono text-xs leading-tight ${t.text} opacity-80`}>
      <div className="flex flex-wrap w-64">
        {grid.map((c, i) => <span key={i}>{c}</span>)}
      </div>
      <div className={`mt-1 ${t.dim}`}>Wake up, Neo…</div>
    </div>
  )
}