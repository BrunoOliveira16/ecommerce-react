import { useEffect, useState } from 'react'

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
  prices?: {
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
  const [deals, setDeals] = useState<GameProps[]>([])
  const [comingSoon, setComingSoon] = useState<GameProps[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/promocoes')
      .then((res) => res.json())
      .then((res) => setDeals(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/em-breve')
      .then((res) => res.json())
      .then((res) => setComingSoon(res))
  }, [])

  return (
    <>
      <Banner />
      <ProductsList games={deals} title="Promoções" background="gray" />
      <ProductsList games={comingSoon} title="Em Breve" background="black" />
    </>
  )
}

export default Home
