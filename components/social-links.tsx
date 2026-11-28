const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/kastaraya",
    icon: <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.6" cy="6.7" r=".8" fill="currentColor" stroke="none"/></svg>,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@kastaraya",
    icon: <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M14.2 3h-3.1v11.1a3.15 3.15 0 1 1-2.7-3.11V7.8a6.2 6.2 0 1 0 5.8 6.2V8.45a8.1 8.1 0 0 0 4.4 1.3V6.6c-2.45-.08-4.2-1.48-4.4-3.6Z"/></svg>,
  },
  {
    label: "Linktree",
    href: "https://linktr.ee/kamwisterbanjogja",
    icon: <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21V9M5 11h14M8 11 4.5 7.5M16 11l3.5-3.5M12 9V4M8 15h8M9.5 18h5"/></svg>,
  },
]

export function SocialLinks() {
  return (
    <nav className="footer-socials" aria-label="Social media">
      {socials.map(({ label, href, icon }) => (
        <a className="footer-social-link" key={label} href={href} target="_blank" rel="noreferrer" aria-label={`Kastaraya on ${label}`} title={label}>
          {icon}<span>{label}</span>
        </a>
      ))}
    </nav>
  )
}
