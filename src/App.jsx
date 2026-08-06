import Header from './Header'
import Hero from './Hero'
import Competencias from './Competencias'
import Formacao from './Formacao'
import Contact from './Contact'
import Footer from './Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Competencias />
        <Formacao />
        <Contact />
      </main>
      <Footer />
    </>
  )
}