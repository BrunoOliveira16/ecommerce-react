import Tag from '../Tag'
import { Card, Title, Description } from './styles'

const Product = () => {
  return (
    <Card>
      <img src="//placehold.it/222x250" alt="card" />
      <Title>Nome do Jogo</Title>
      <Tag>Categoria</Tag>
      <Tag>Windows</Tag>
      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
        consequatur ea quaerat, nam odio distinctio totam voluptatibus rem, sed
        aliquam adipisci porro laudantium commodi, ipsam omnis repellendus
        veritatis! Quo, dolores!
      </Description>
    </Card>
  )
}

export default Product
