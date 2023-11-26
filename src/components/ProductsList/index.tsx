import Product from '../Product'
import { GameProps } from '../../pages/Home'
import { formatPrice } from '../../utils/functions'
import { Container, List, Title } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: GameProps[]
}

const ProductsList = ({ background, title, games }: Props) => {
  const getGameTags = (game: GameProps) => {
    const tags = []

    if (game.release_date) {
      tags.push(game.release_date)
    }

    if (game.prices?.discount) {
      tags.push(`${game.prices.discount}%`)
    }

    if (game.prices?.current) {
      tags.push(formatPrice(game.prices.current))
    }

    return tags
  }

  return (
    <Container background={background}>
      <div className="container">
        <Title>{title}</Title>
        <List>
          {games.map((game) => (
            <Product
              key={game.id}
              category={game.details.category}
              description={game.description}
              image={game.media.thumbnail}
              infos={getGameTags(game)}
              system={game.details.system}
              title={game.name}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductsList
