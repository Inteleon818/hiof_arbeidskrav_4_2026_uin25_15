import './App.css'
import './styles/frontpage.css'
import Arbeidskrav from './components/Arbeidskrav'
import Arbeidskravliste from './components/Arbeidskravliste.jsx'
import Header from './components/Header'
import Daniel from './components/Daniel.jsx'

function App() {
  return (
    <main>
      <Header />
      <Daniel />
      <Arbeidskravliste />
    </main>
  )
}

export default App
