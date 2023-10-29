import { BrowserRouter } from 'react-router-dom'
import Rotas from './routes/routes'

import Header from './components/Header'
import { GlobalStyles } from './global/styles'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <div className="container">
        <Header />
      </div>
      <Rotas />
    </BrowserRouter>
  )
}

export default App
