import { useGetFeaturedGameQuery } from '../../services/api'
import { getPrices } from '../../utils/functions'

import Tag from '../Tag'
import Button from '../Button'

import { Image, Prices, Title } from './styles'

const Banner = () => {
  const { data: game } = useGetFeaturedGameQuery()

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
          kind="link"
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
