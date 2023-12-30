import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type Product = {
  id: number
  price: number
}

type PurchasePayload = {
  products: Product[]
  billing: {
    name: string
    email: string
    document: string
  }
  delivery: {
    email: string
  }
  payment: {
    card: {
      active: boolean
      owner?: {
        name: string
        document: string
      }
      name?: string
      number?: string
      expires?: {
        month?: number
        year?: number
      }
      code?: number
    }
    installments: number
  }
}

type PurchaseResponse = {
  orderId: string
}

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
      query: () => 'simulacao'
    }),
    getFightGames: builder.query<GameProps[], void>({
      query: () => 'luta'
    }),
    getRpgGames: builder.query<GameProps[], void>({
      query: () => 'rpg'
    }),
    getGame: builder.query<GameProps, string>({
      query: (id) => `jogos/${id}`
    }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
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
  useGetGameQuery,
  usePurchaseMutation
} = api

export default api
