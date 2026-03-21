import { CONTENT } from '../../data/content'

const RedirectIcon = ({ href, t }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className={`inline-block ml-2 ${t.link} hover:opacity-70 transition-opacity`}
    title={href}
  >
    ↗
  </a>
)

export default function ContactOut({ t }) {
  const { email, github, instagram, linkedin } = CONTENT.contact

  return (
    <div className="py-1 space-y-1">
      <div className={t.accent}>Get in touch:</div>
      <div className={t.text}>
        <span className={t.dim}>email     </span>{email}
        <RedirectIcon href={`mailto:${email}`} t={t} />
      </div>
      <div className={t.text}>
        <span className={t.dim}>github    </span>{github}
        <RedirectIcon href={"https://github.com/" + github} t={t} />
      </div>
      <div className={t.text}>
        <span className={t.dim}>instagram </span>{instagram}
        <RedirectIcon href={"https://instagram.com/" + instagram.replace('@', '')} t={t} />
      </div>
      <div className={t.text}>
        <span className={t.dim}>linkedin  </span>{linkedin}
        <RedirectIcon href={"https://linkedin.com/in/" + linkedin} t={t} />
      </div>
    </div>
  )
}