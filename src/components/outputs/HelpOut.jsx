const COMMANDS = [
  ["about",    "Who I am"],
  ["skills",   "Tech I work with"],
  ["projects", "Things I've built"],
  ["contact",  "Ways to reach me"],
  ["theme",    "Switch color theme  (e.g. theme nord)"],
  ["themes",   "List all themes"],
  ["history",  "Show command history"],
  ["clear",    "Clear the terminal"],
  ["help",     "Show this message"],
]

export default function HelpOut({ t }) {
  return (
    <div className="py-1 space-y-1">
      <div className={t.accent}>Available commands:</div>
      {COMMANDS.map(([cmd, desc]) => (
        <div key={cmd} className={t.text}>
          <span className={`w-20 inline-block font-mono font-bold ${t.accent}`}>{cmd}</span>
          <span className={t.dim}> — </span>{desc}
        </div>
      ))}
      <div className={t.dim}>Tip: press TAB to autocomplete, ↑↓ to navigate history.</div>
    </div>
  )
}
