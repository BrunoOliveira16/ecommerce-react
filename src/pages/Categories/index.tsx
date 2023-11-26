import { useEffect, useState } from 'react'
import ProductsList from '../../components/ProductsList'
import { GameProps } from '../Home'

const Categories = () => {
  const [rpgGames, setRpgGames] = useState<GameProps[]>([])
  const [fightGames, setFightGames] = useState<GameProps[]>([])
  const [sportsGames, setSportsGames] = useState<GameProps[]>([])
  const [actionGames, setActionGames] = useState<GameProps[]>([])
  const [simulationGames, setSimulationGames] = useState<GameProps[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
      .then((res) => res.json())
      .then((res) => setRpgGames(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
      .then((res) => res.json())
      .then((res) => setFightGames(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
      .then((res) => res.json())
      .then((res) => setSportsGames(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
      .then((res) => res.json())
      .then((res) => setActionGames(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
      .then((res) => res.json())
      .then((res) => setSimulationGames(res))
  }, [])

  return (
    <>
      <ProductsList games={actionGames} title="Ação" background="black" />
      <ProductsList games={sportsGames} title="Esporte" background="gray" />
      <ProductsList games={fightGames} title="Luta" background="black" />
      <ProductsList games={rpgGames} title="RPG" background="gray" />
      <ProductsList
        games={simulationGames}
        title="Simulação"
        background="black"
      />
    </>
  )
}

export default Categories
