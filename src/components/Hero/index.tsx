import { useDispatch } from 'react-redux'

import { add, open } from '../../store/reducers/cart'
import { getPrices } from '../../utils/functions'
import { GameProps } from '../../pages/Home'

import Button from '../Button'
import Tag from '../Tag'

import { Banner, Infos } from './styles'

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
    <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <Infos>
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
                type="button"
                title="Clique aqui para adicionar o jogo ao carrinho"
                onClick={addToCart}
              >
                Adicionar ao carrinho
              </Button>
            </>
          )}
        </Infos>
      </div>
    </Banner>
  )
}

export default Hero
