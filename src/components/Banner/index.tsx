import { useGetFeaturedGameQuery } from '../../services/api'
import { getPrices } from '../../utils/functions'

import Tag from '../Tag'
import Button from '../Button'
import Loader from '../Loader'

import * as S from './styles'

const Banner = () => {
  const { data: game } = useGetFeaturedGameQuery()

  if (!game) {
    return <Loader />
  }

  return (
    <S.Image style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <S.Title>{game.name}</S.Title>
          <S.Prices>
            De <span>{getPrices(game.prices?.old)}</span>
            <br />
            por apenas {getPrices(game.prices?.current)}
          </S.Prices>
        </div>
        <Button
          kind="link"
          to={`/product/${game.id}`}
          title="Clique aqui para aproveitar está oferta"
          variant="secondary"
        >
          Aproveitar
        </Button>
      </div>
    </S.Image>
  )
}

export default Banner
