import { perfil } from './data/portfolio'

export default function Hero() {
  const iniciais = perfil.nome
    .split(' ')
    .slice(0, 2)
    .map((p) => p[0])
    .join('')

  return (
    <section id="sobre" className="hero section">
      <div className="container hero__grid">
        <div className="hero__photo-wrap">
          {perfil.fotoUrl ? (
            <img className="hero__photo" src={perfil.fotoUrl} alt={`Foto de ${perfil.nome}`} />
          ) : (
            <div className="hero__photo hero__photo--placeholder" aria-hidden="true">
              {iniciais}
            </div>
          )}
        </div>

        <div>
          <h1 className="hero__name">{perfil.nome}</h1>
          <p className="hero__role">
            {perfil.cargo} · {perfil.idade} anos
          </p>
          <p className="hero__summary">{perfil.descricao}</p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#contato">
              falar comigo
            </a>
            <a className="btn btn--ghost" href={perfil.linkedin} target="_blank" rel="noopener noreferrer">
              ver LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}