import { useDispatch } from 'react-redux'

import { add, open } from '../../store/reducers/cart'
import { getPrices } from '../../utils/functions'

import Button from '../Button'
import Tag from '../Tag'

import * as S from './styles'

type GameHeroProps = {
  game: GameProps
}

const Hero = ({ game }: GameHeroProps) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(game))
    dispatch(open())
  }

  return (
    <S.Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <S.Infos>
          <h2>{game.name}</h2>
          {game.prices?.current && (
            <>
              <p>
                {game.prices?.discount && (
                  <span>De {getPrices(game.prices?.old)}</span>
                )}
                Por {getPrices(game.prices?.current)}
              </p>
              <Button
                variant="primary"
                kind="button"
                title="Clique aqui para adicionar o jogo ao carrinho"
                onClick={addToCart}
              >
                Adicionar ao carrinho
              </Button>
            </>
          )}
        </S.Infos>
      </div>
    </S.Banner>
  )
}

export default Hero
