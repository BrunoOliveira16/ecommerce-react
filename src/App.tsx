// Components
import Banner from './components/Banner'
import Header from './components/Header'

// Styles
import { GlobalStyles } from './global/styles'

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="container">
        <Header />
      </div>
      <Banner />
    </>
  )
}

export default App
