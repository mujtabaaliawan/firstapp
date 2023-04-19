import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  logged: false,
  token: 0,
  tour: true,
  activeSub: false,
  trialSub: false,
  manager: false,
}


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logged_in: (state) => {
      state.logged = true
    },
    logged_out: (state) => {
      state.logged = false
    },
    set_token: (state = initialState, action) => {
      state.token = action.payload
    },
    clear_token: (state = initialState) => {
      state.token = 0
    },
    set_tourMode: (state = initialState, action) => {
      state.tour = action.payload
    },
    set_activeSub: (state) => {
      state.activeSub = true
    },
    clear_activeSub: (state) => {
      state.activeSub = false
    },
    set_trialSub: (state) => {
      state.trialSub = true
    },
    clear_trialSub: (state) => {
      state.trialSub = false
    },
    set_manager: (state) => {
      state.manager = true
    },
    not_manager: (state) => {
      state.manager = false
    },
  },
})

// Action creators are generated for each case reducer function
export const { logged_in, logged_out, set_token, clear_token,
              set_tourMode, set_activeSub, clear_activeSub, set_trialSub, clear_trialSub,
              set_manager, not_manager} = userSlice.actions

export default userSlice.reducer