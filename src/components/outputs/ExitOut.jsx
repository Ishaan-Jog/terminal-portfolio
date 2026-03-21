export default function ExitOut({ t }) {
    return (
        <div className="py-1 space-y-1">
            <div className={t.accent}>Bye visitor!</div>
            <span className={t.dim}>You need to close this tab by yourself though.</span>
        </div>
    )
}