export default function CoffeeEgg({ t }) {
  return (
    <div className={`py-1 ${t.text}`}>
      <pre className={`text-xs ${t.accent}`}>{`
    ( (
     ) )
  ........
  |      |]
  \\      /
   \`----'
`}</pre>
      <div className={t.dim}>Here's your ☕ — compiling ideas...</div>
    </div>
  )
}