import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: true,
}

export const tourModeSlice = createSlice({
  name: 'tourMode',
  initialState,
  reducers: {
    set_tourMode: (state = initialState, action) => {
      state.value = action.payload
    },
    },
})

// Action creators are generated for each case reducer function
export const { set_tourMode } = tourModeSlice.actions

export default tourModeSlice.reducer
