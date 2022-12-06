import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  counter: number
  value: number
  isLogin: Boolean
}

const initialState: CounterState = {
  value: 0,
  isLogin: false,
  counter: 0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },

    decrement: (state) => {
      state.value -= 1
    },

    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },

    loginUser: (state) => {
      state.isLogin = true;
    },

    logoutUser: (state) => {
      state.isLogin = false;
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, loginUser, logoutUser } = counterSlice.actions

export default counterSlice.reducer