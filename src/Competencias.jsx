import { competencias } from './data/portfolio'

export default function Competencias() {
  return (
    <section id="competencias" className="section">
      <div className="container">
        <h2 className="section__title">Competências</h2>

        <div className="competencias-grid">
          {competencias.map((c) => (
            <div className="competencia-card" key={c.titulo}>
              <h3>{c.titulo}</h3>
              <p>{c.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
