import { useState } from 'react'

import Section from '../Section'
import { GalleryItemProps } from '../../pages/Home'
import { Itens, Item, Action, Modal, ModalContent } from './styles'

import horgwarts from '../../assets/images/fundo_hogwarts.png'
import play from '../../assets/images/play.png'
import zoom from '../../assets/images/zoom.png'
import close from '../../assets/images/close.png'

type GalleryProps = {
  defaultCover: string
  name: string
}

interface ModalStateProps extends GalleryItemProps {
  isVisible?: boolean
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
  const [modal, setModal] = useState<ModalStateProps>({
    isVisible: false,
    type: 'image',
    url: ''
  })

  const getMediaCover = (item: GalleryItemProps) => {
    if (item.type === 'image') return item.url

    return defaultCover
  }

  const getMediaIcon = (item: GalleryItemProps) => {
    if (item.type === 'image') return zoom

    return play
  }

  const openModal = (media: ModalStateProps) => {
    setModal({
      isVisible: true,
      type: media.type,
      url: media.url
    })
  }

  const closeModal = () => {
    setModal({
      isVisible: false,
      type: 'image',
      url: ''
    })
  }

  const handleShowImageOrVideo = (modal: ModalStateProps) => {
    if (modal.type === 'image') return <img src={modal.url} alt={name} />

    return <iframe frameBorder={0} src={modal.url} title={name} />
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <Itens>
          {mock.map((media, index) => (
            <Item key={media.url} onClick={() => openModal(media)}>
              <img
                src={getMediaCover(media)}
                alt={`Midia ${index + 1} de ${name}`}
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
      <Modal className={modal.isVisible ? 'visible' : ''}>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={close} alt="Fechar" onClick={closeModal} />
          </header>
          {handleShowImageOrVideo(modal)}
        </ModalContent>
        <div className="overlay" onClick={closeModal}></div>
      </Modal>
    </>
  )
}

export default Gallery
