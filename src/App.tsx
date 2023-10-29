import { BrowserRouter } from 'react-router-dom'
import Rotas from './routes/routes'

import Header from './components/Header'
import Footer from './components/Footer'
import { GlobalStyles } from './global/styles'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <div className="container">
        <Header />
      </div>
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
