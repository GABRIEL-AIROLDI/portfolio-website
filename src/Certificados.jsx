import { certificados } from "./data/portfolio";
export default function Certificados() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section__title">Certificados</h2>
        <div className="certificados-grid">
          {certificados.map((cert, index) => (
            <div key={index} className="certificado-card">
              <h3>{cert.titulo}</h3>
              <p>{cert.instituicao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}