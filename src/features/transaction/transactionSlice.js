import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    increase_transaction: (state = initialState, action) => {
      state.value += 1
    },
    decrease_transaction: (state = initialState) => {
      state.value -= 1
    },
  }
  })

export const { increase_transaction, decrease_transaction } = transactionSlice.actions

export default transactionSlice.reducer