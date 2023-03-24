import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const subscriptionSlice = createSlice({
  name: 'subscription',
  initialState,
  reducers: {
    set_subscription: (state) => {
      state.value = true
    },
    clear_subscription: (state) => {
      state.value = false
    },
  },
})

// Action creators are generated for each case reducer function
export const { set_subscription, clear_subscription } = subscriptionSlice.actions

export default subscriptionSlice.reducer
