import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    set_token: (state = initialState, action) => {
      state.value = action.payload
    },
    clear_token: (state = initialState) => {
      state.value = 0
    },
  }
  })

export const { set_token, clear_token } = tokenSlice.actions

export default tokenSlice.reducer