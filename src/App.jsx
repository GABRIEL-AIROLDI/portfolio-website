import Header from './Header'
import Hero from './Hero'
import Competencias from './Competencias'
import Formacao from './Formacao'
import Contact from './Contact'
import Footer from './Footer'
import Certificados from './Certificados'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Competencias />
        <Formacao />
        <Certificados />
        <Contact />
      </main>
      <Footer />
    </>
  )
}