import './App.css'
import './styles/frontpage.css'
import Arbeidskrav from './components/Arbeidskrav'
import Arbeidskravliste from './components/Arbeidskravliste.jsx'
import Header from './components/Header'
import Daniel from './components/Daniel.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
    <Header />
    <main>
      <Daniel />
      <Arbeidskravliste />
    </main>
    <Footer />
    </>
  )
}

export default App