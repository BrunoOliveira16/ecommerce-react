import Product from '../Product'
import { Container, List, Title } from './styles'

type Props = {
  title: string
  background: 'gray' | 'black'
}

const ProductsList = ({ title }: Props) => (
  <Container>
    <div className="container">
      <Title>{title}</Title>
      <List>
        <Product />
        <Product />
        <Product />
        <Product />
      </List>
    </div>
  </Container>
)

export default ProductsList
