import { useState } from 'react'

import Section from '../Section'

import * as S from './styles'

import play from '../../assets/images/play.png'
import zoom from '../../assets/images/zoom.png'
import close from '../../assets/images/close.png'

type GalleryProps = {
  defaultCover: string
  name: string
  itens: GalleryItemProps[]
}

interface ModalStateProps extends GalleryItemProps {
  isVisible?: boolean
}

const Gallery = ({ defaultCover, name, itens }: GalleryProps) => {
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
        <S.Itens>
          {itens.map((media, index) => (
            <S.Item key={media.url} onClick={() => openModal(media)}>
              <img
                src={getMediaCover(media)}
                alt={`Midia ${index + 1} de ${name}`}
              />
              <S.Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique aqui para maximizar a midia"
                />
              </S.Action>
            </S.Item>
          ))}
        </S.Itens>
      </Section>
      <S.Modal className={modal.isVisible ? 'visible' : ''}>
        <S.ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={close} alt="Fechar" onClick={closeModal} />
          </header>
          {handleShowImageOrVideo(modal)}
        </S.ModalContent>
        <div className="overlay" onClick={closeModal}></div>
      </S.Modal>
    </>
  )
}

export default Gallery
