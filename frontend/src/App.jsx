import './App.css'
import './styles/frontpage.css'
import Arbeidskrav from './components/Arbeidskrav'
import Arbeidskravliste from './components/Arbeidskravliste.jsx'
import Header from './components/Header'

function App() {
  return (
    <main>
      <Header />
      <Arbeidskravliste />
    </main>
  )
}

export default App
