import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const helpSlice = createSlice({
  name: 'help',
  initialState,
  reducers: {
    help_on: (state) => {
      state.value = true
    },
    help_off: (state) => {
      state.value = false
    },
  },
})

// Action creators are generated for each case reducer function
export const { help_on, help_off } = helpSlice.actions

export default helpSlice.reducer