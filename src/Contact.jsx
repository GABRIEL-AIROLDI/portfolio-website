import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { perfil } from './data/portfolio'

export default function Contact() {
  return (
    <section id="contato" className="section">
      <div className="container">
        <h2 className="section__title">Contato</h2>

        <div className="contact-links">
          <a
            className="contact-link"
            href={perfil.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin aria-hidden="true" /> LinkedIn
          </a>
          <a
            className="contact-link"
            href={perfil.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub aria-hidden="true" /> GitHub
          </a>
        </div>
      </div>
    </section>
  )
}