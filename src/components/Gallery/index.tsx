import Section from '../Section'
import { Itens, Item } from './styles'
import zelda from '../../assets/images/zelda.png'

const Gallery = () => (
  <Section title="Galeria" background="black">
    <Itens>
      <Item>
        <img src={zelda} alt="imagem do link" />
      </Item>
      <Item>
        <img src={zelda} alt="imagem do link" />
      </Item>
      <Item>
        <img src={zelda} alt="imagem do link" />
      </Item>
      <Item>
        <img src={zelda} alt="imagem do link" />
      </Item>
    </Itens>
  </Section>
)

export default Gallery
