import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const trialSlice = createSlice({
  name: 'trialSub',
  initialState,
  reducers: {
    set_trialSub: (state) => {
      state.value = true
    },
    clear_trialSub: (state) => {
      state.value = false
    },
  },
})

// Action creators are generated for each case reducer function
export const { set_trialSub, clear_trialSub } = trialSlice.actions

export default trialSlice.reducer
