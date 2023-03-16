import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: "",
}

export const favouriteCompanySlice = createSlice({
  name: 'favouriteCompany',
  initialState,
  reducers: {
    set_favourite_company: (state = initialState, action) => {
      state.value = action.payload
    },
    clear_favourite_company: (state = initialState) => {
      state.value = ""
    }
  }
  })

export const { set_favourite_company } = favouriteCompanySlice.actions

export default favouriteCompanySlice.reducer