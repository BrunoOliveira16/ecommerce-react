import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { GameProps } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/eplay'
  }),
  endpoints: (builder) => ({
    getFeaturedGame: builder.query<GameProps, void>({
      query: () => 'destaque'
    }),
    getOnSales: builder.query<GameProps[], void>({
      query: () => 'promocoes'
    }),
    getSoon: builder.query<GameProps[], void>({
      query: () => 'em-breve'
    }),
    getActionGames: builder.query<GameProps[], void>({
      query: () => 'acao'
    }),
    getSportGames: builder.query<GameProps[], void>({
      query: () => 'esportes'
    }),
    getSimulationGames: builder.query<GameProps[], void>({
      query: () => 'simulação'
    }),
    getFightGames: builder.query<GameProps[], void>({
      query: () => 'luta'
    }),
    getRpgGames: builder.query<GameProps[], void>({
      query: () => 'rpg'
    }),
    getGame: builder.query<GameProps, string>({
      query: (id) => `jogos/${id}`
    })
  })
})

export const {
  useGetFeaturedGameQuery,
  useGetOnSalesQuery,
  useGetSoonQuery,
  useGetActionGamesQuery,
  useGetSportGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetGameQuery
} = api

export default api
