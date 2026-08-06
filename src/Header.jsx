const links = [
  { href: '#sobre', label: 'sobre' },
  { href: '#competencias', label: 'competências' },
  { href: '#formacao', label: 'formação' },
  { href: '#contato', label: 'contato' },
]

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <nav className="site-nav" aria-label="Navegação principal">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}