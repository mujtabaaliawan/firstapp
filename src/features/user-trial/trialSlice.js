import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const trialSlice = createSlice({
  name: 'trial',
  initialState,
  reducers: {
    set_trial: (state) => {
      state.value = true
    },
    clear_trial: (state) => {
      state.value = false
    },
  },
})

// Action creators are generated for each case reducer function
export const { set_trial, clear_trial } = trialSlice.actions

export default trialSlice.reducer
