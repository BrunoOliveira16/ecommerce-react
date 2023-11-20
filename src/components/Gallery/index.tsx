import Section from '../Section'
import { Itens, Item, Action, Modal, ModalContent } from './styles'

import horgwarts from '../../assets/images/horgwats-img.png'
import horgwartsImg from '../../assets/images/image10.png'
import play from '../../assets/images/play.png'
import zoom from '../../assets/images/zoom.png'
import close from '../../assets/images/close.png'

type GalleryItemProps = {
  type: 'image' | 'video'
  url: string
}

type GalleryProps = {
  defaultCover: string
  name: string
}

const mock: GalleryItemProps[] = [
  {
    type: 'image',
    url: horgwarts
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/hcPbMyHC3-Q?si=9dKJA-q2PiXUb6Br'
  },
  {
    type: 'image',
    url: horgwarts
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/hcPbMyHC3-Q?si=9dKJA-q2PiXUb6Br'
  }
]

const Gallery = ({ defaultCover, name }: GalleryProps) => {
  const getMediaCover = (item: GalleryItemProps) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItemProps) => {
    if (item.type === 'image') return zoom
    return play
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <Itens>
          {mock.map((media, index) => (
            <Item key={index}>
              <img
                src={getMediaCover(media)}
                alt={`Midia ${index} de ${name}`}
              />
              <Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique aqui para maximizar a midia"
                />
              </Action>
            </Item>
          ))}
        </Itens>
      </Section>
      <Modal>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={close} alt="Fechar" />
          </header>
          <img src={horgwartsImg} alt={name} />
        </ModalContent>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}

export default Gallery
