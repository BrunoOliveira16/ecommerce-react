import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// Components
import Banner from './components/Banner'
import Header from './components/Header'
import ProductsList from './components/ProductsList'
// Styles
import { GlobalStyles } from './global/styles'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Banner />
        <ProductsList title="Promoções" background="gray" />
      </>
    )
  }
])

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
