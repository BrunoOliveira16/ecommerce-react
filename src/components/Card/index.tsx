import { Container } from './styles'

type CardProps = {
  title: string
  children?: JSX.Element
}

const Card = ({ children, title }: CardProps) => {
  return (
    <Container>
      <h2>{title}</h2>
      {children}
    </Container>
  )
}

export default Card
