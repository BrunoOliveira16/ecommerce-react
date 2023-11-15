import { useParams } from 'react-router-dom'

const Product = () => {
  const { id } = useParams()

  return <div>Produto {id}</div>
}

export default Product
