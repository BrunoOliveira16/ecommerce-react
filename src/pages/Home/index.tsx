import { useGetOnSalesQuery, useGetSoonQuery } from '../../services/api'

import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

export interface GalleryItemProps {
  type: 'image' | 'video'
  url: string
}

export type GameProps = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number | null
    old?: number | null
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItemProps[]
  }
}

const Home = () => {
  const { data: onSaleGames } = useGetOnSalesQuery()
  const { data: soonGames } = useGetSoonQuery()

  if (onSaleGames && soonGames) {
    return (
      <>
        <Banner />
        <ProductsList games={onSaleGames} title="Promoções" background="gray" />
        <ProductsList games={soonGames} title="Em Breve" background="black" />
      </>
    )
  }

  return <h4>Carregando</h4>
}

export default Home
