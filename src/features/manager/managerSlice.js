import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const managerSlice = createSlice({
  name: 'role',
  initialState,
  reducers: {
    set_manager: (state) => {
      state.value = true
    },
    not_manager: (state) => {
      state.value = false
    },
  },
})

// Action creators are generated for each case reducer function
export const { set_manager, not_manager } = managerSlice.actions

export default managerSlice.reducer
