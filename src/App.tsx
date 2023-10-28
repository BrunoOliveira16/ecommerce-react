import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// Components
import Banner from './components/Banner'
import Header from './components/Header'
// Styles
import { GlobalStyles } from './global/styles'

const rotas = createBrowserRouter([{ path: '/', element: <Banner /> }])

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="container">
        <Header />
      </div>
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
