import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const activeSlice = createSlice({
  name: 'activeSub',
  initialState,
  reducers: {
    set_activeSub: (state) => {
      state.value = true
    },
    clear_activeSub: (state) => {
      state.value = false
    },
  },
})

// Action creators are generated for each case reducer function
export const { set_activeSub, clear_activeSub } = activeSlice.actions

export default activeSlice.reducer
