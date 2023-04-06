import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const tourTwoSlice = createSlice({
  name: 'tourTwo',
  initialState,
  reducers: {
      set_tourTwo: (state = initialState, action) => {
          state.value = true
      },
      clear_tourTwo: (state = initialState, action) => {
          state.value = false
      },
    },
})

// Action creators are generated for each case reducer function
export const { set_tourTwo, clear_tourTwo } = tourTwoSlice.actions

export default tourTwoSlice.reducer
