import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const loggedSlice = createSlice({
  name: 'logged',
  initialState,
  reducers: {
    logged_in: (state) => {
      state.value = true
    },
    logged_out: (state) => {
      state.value = false
    },
  },
})

// Action creators are generated for each case reducer function
export const { logged_in, logged_out} = loggedSlice.actions

export default loggedSlice.reducer