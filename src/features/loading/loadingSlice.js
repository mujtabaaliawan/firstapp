import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    loading_on: (state) => {
      state.value = true
    },
    loading_off: (state) => {
      state.value = false
    },
  },
})

// Action creators are generated for each case reducer function
export const { loading_on, loading_off } = loadingSlice.actions

export default loadingSlice.reducer