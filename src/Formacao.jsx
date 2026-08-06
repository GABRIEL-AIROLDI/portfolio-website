import { formacaoAcademica } from './data/portfolio'

export default function Formacao() {
  return (
    <section id="formacao" className="section">
      <div className="container">
        <h2 className="section__title">Formação acadêmica</h2>

        <div className="timeline">
          {formacaoAcademica.map((f) => (
            <div className="timeline-item" key={f.curso + f.periodo}>
              <span className="timeline-item__periodo">{f.periodo}</span>
              <h3>{f.curso}</h3>
              <span className="timeline-item__local">{f.instituicao}</span>
              <p>{f.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}