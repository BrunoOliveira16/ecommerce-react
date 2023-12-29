import Product from '../Product'
import { GameProps } from '../../pages/Home'
import { formatPrice, getTitle } from '../../utils/functions'
import * as S from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: GameProps[]
  id?: string
}

const ProductsList = ({ background, title, games, id }: Props) => {
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
    <S.Container id={id} background={background}>
      <div className="container">
        <S.Title>{getTitle(title)}</S.Title>
        <S.List>
          {games.map((game) => (
            <li key={game.id}>
              <Product
                id={game.id}
                category={game.details.category}
                description={game.description}
                image={game.media.thumbnail}
                infos={getGameTags(game)}
                system={game.details.system}
                title={game.name}
              />
            </li>
          ))}
        </S.List>
      </div>
    </S.Container>
  )
}

export default ProductsList
