import { useEffect, useState } from 'react'
import { GameProps } from '../../pages/Home'
import Tag from '../Tag'
import Button from '../Button'
import { Image, Prices, Title } from './styles'
import { getPrices } from '../../utils/functions'

const Banner = () => {
  const [game, setGame] = useState<GameProps>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/destaque')
      .then((res) => res.json())
      .then((res) => setGame(res))
  }, [])

  if (!game) {
    return <h3>Carregando...</h3>
  }

  return (
    <Image style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Title>{game.name}</Title>
          <Prices>
            De <span>{getPrices(game.prices?.old)}</span>
            <br />
            por apenas {getPrices(game.prices?.current)}
          </Prices>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Clique aqui para aproveitar está oferta"
        >
          Aproveitar
        </Button>
      </div>
    </Image>
  )
}

export default Banner
