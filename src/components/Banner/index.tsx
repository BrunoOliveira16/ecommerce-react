//Components
import Tag from '../Tag'
import Button from '../Button'
//Styles and Images
import { Image, Prices, Title } from './styles'
import bannerImg from '../../assets/images/banner-homem-aranha.png'

const Banner = () => (
  <Image style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Tag size="big">Destaque do dia</Tag>
      <div>
        <Title>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</Title>
        <Prices>
          De <span>R$ 250,00</span>
          <br />
          por apenas R$ 99,90
        </Prices>
      </div>
      <Button
        type="link"
        to="/produto"
        title="Clique aqui para aproveitar está oferta"
      >
        Aproveitar
      </Button>
    </div>
  </Image>
)

export default Banner
