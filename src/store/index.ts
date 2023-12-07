import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {}
})

export type RootReducer = ReturnType<typeof store.getState>
