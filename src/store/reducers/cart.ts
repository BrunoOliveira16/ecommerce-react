import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GameProps } from '../../pages/Home'

type CartState = {
  items: GameProps[]
}

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<GameProps>) => {
      state.items.push(action.payload)
    }
  }
})

export const { add } = cartSlice.actions
export default cartSlice.reducer
