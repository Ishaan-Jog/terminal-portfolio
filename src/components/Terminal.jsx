import { useState, useRef, useCallback } from 'react'
import { THEMES } from '../data/themes'
import { KNOWN_COMMANDS } from '../data/content'
import Welcome from './Welcome'
import Prompt from './Prompt'
import AboutOut from './outputs/AboutOut'
import SkillsOut from './outputs/SkillsOut'
import ProjectsOut from './outputs/ProjectsOut'
import ContactOut from './outputs/ContactOut'
import HelpOut from './outputs/HelpOut'
import ThemesOut from './outputs/ThemesOut'
import HistoryOut from './outputs/HistoryOut'
import MatrixEgg from './outputs/easter/MatrixEgg'
import SudoEgg from './outputs/easter/SudoEgg'
import CoffeeEgg from './outputs/easter/CoffeeEgg'
import BananaEgg from './outputs/easter/BananaEgg'
import ExitOut from './outputs/ExitOut'

export default function Terminal() {
  const [themeName, setThemeName] = useState('dark')
  const t = THEMES[themeName]

  const [entries, setEntries] = useState([])
  const [input, setInput] = useState('')
  const [historyStack, setHistoryStack] = useState([])
  const [histIdx, setHistIdx] = useState(-1)
  const [inputLocked, setInputLocked] = useState(true)

  const bottomRef = useRef(null)
  const inputRef = useRef(null)

  const scrollBottom = () => bottomRef.current?.scrollIntoView({ behavior: 'smooth' })

  const pushEntry = (cmd, output) => {
    setEntries(prev => [...prev, { id: Date.now() + Math.random(), cmd, output }])
    setTimeout(scrollBottom, 50)
  }

  const runCommand = useCallback((raw) => {
    const trimmed = raw.trim()
    if (!trimmed) return

    setHistoryStack(h => [trimmed, ...h])
    setHistIdx(-1)

    const [cmd, ...args] = trimmed.toLowerCase().split(' ')

    switch (cmd) {
      case 'clear':
        setEntries([])
        break
      case 'about':
        pushEntry(trimmed, <AboutOut t={t} />)
        break
      case 'hi':
        pushEntry(trimmed, <AboutOut t={t} />)
        break
      case 'skills':
        pushEntry(trimmed, <SkillsOut t={t} />)
        break
      case 'projects':
        pushEntry(trimmed, <ProjectsOut t={t} />)
        break
      case 'contact':
        pushEntry(trimmed, <ContactOut t={t} />)
        break
      case 'help':
        pushEntry(trimmed, <HelpOut t={t} />)
        break
      case '?':
        pushEntry(trimmed, <HelpOut t={t} />)
        break
      case 'themes':
        pushEntry(trimmed, <ThemesOut t={t} onSet={n => setThemeName(n)} />)
        break
      case 'theme': {
        const name = args[0]
        if (THEMES[name]) {
          setThemeName(name)
          pushEntry(trimmed,
            <div className={t.text}>Theme set to <span className={t.accent}>{name}</span>.</div>
          )
        } else {
          pushEntry(trimmed,
            <div className={t.error}>Unknown theme: "{name}". Try 'themes' to list options.</div>
          )
        }
        break
      }
      case 'history':
        pushEntry(trimmed, <HistoryOut t={t} historyStack={historyStack} />)
        break
      case 'matrix':
        pushEntry(trimmed, <MatrixEgg t={t} />)
        break
      case 'sudo':
        pushEntry(trimmed, <SudoEgg t={t} />)
        break
      case 'coffee':
        pushEntry(trimmed, <CoffeeEgg t={t} />)
        break
      case 'banana':
        pushEntry(trimmed, <BananaEgg t={t} />)
        break
      case 'exit':
        pushEntry(trimmed, <ExitOut t={t} />)
        break
      default:
        pushEntry(trimmed,
          <div className={t.error}>
            Command not found: <span className="font-bold">{cmd}</span>. Type 'help' for available commands.
          </div>
        )
    }
  }, [t, historyStack])

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      runCommand(input)
      setInput('')
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      const next = Math.min(histIdx + 1, historyStack.length - 1)
      setHistIdx(next)
      setInput(historyStack[next] ?? '')
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      const next = Math.max(histIdx - 1, -1)
      setHistIdx(next)
      setInput(next === -1 ? '' : historyStack[next])
    } else if (e.key === 'Tab') {
      e.preventDefault()
      const match = KNOWN_COMMANDS.find(c => c.startsWith(input) && c !== input)
      if (match) setInput(match)
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault()
      setEntries([])
    }
  }

  return (
    <div
      className={`min-h-screen ${t.bg} flex items-center justify-center p-4 font-mono`}
      onClick={() => inputRef.current?.focus()}
    >
      <div className={`w-full max-w-3xl rounded-xl overflow-hidden border ${t.border} shadow-2xl`}>

        {/* Title bar */}
        <div className={`flex items-center gap-2 px-4 py-2 ${t.bar}`}>
          {t.barDot.map((cls, i) => <div key={i} className={`w-3 h-3 rounded-full ${cls}`} />)}
          <span className={`mx-auto text-sm ${t.barText}`}>ishaan@dev — bash</span>
        </div>

        {/* Terminal body */}
        <div className={`${t.bg} p-4 h-[520px] overflow-y-auto text-sm`}>
          <Welcome t={t} onDone={() => {
            setInputLocked(false)
            setTimeout(() => inputRef.current?.focus(), 50)
          }} />

          {entries.map(e => (
            <div key={e.id} className="mb-2">
              <div><Prompt t={t} /><span className={t.text}>{e.cmd}</span></div>
              <div>{e.output}</div>
            </div>
          ))}

          {!inputLocked && (
            <div className="flex items-center">
              <Prompt t={t} />
              <div className="relative flex-1">
                <span className={`${t.input} whitespace-pre`}>{input}</span>
                <span className={`animate-pulse ${t.text} opacity-80`}>▌</span>
                <input
                  ref={inputRef}
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={handleKey}
                  className="absolute inset-0 opacity-0 w-full cursor-default"
                  autoComplete="off"
                  spellCheck={false}
                  aria-label="terminal input"
                />
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>

      </div>
    </div>
  )
}