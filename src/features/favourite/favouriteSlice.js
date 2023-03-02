import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const favouriteSlice = createSlice({
  name: 'favourite',
  initialState,
  reducers: {
    increase_favourite: (state = initialState, action) => {
      state.value += 1
    },
    decrease_favourite: (state = initialState) => {
      state.value -= 1
    },
  }
  })

export const { increase_favourite, decrease_favourite } = favouriteSlice.actions

export default favouriteSlice.reducer