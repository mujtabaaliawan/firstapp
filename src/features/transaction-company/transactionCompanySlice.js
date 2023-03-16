import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: "",
}

export const transactionCompanySlice = createSlice({
  name: 'transactionCompany',
  initialState,
  reducers: {
    set_transaction_company: (state = initialState, action) => {
      state.value = action.payload
    },
    clear_transaction_company: (state = initialState) => {
      state.value = ""
    }
  }
  })

export const { set_transaction_company, clear_transaction_company} = transactionCompanySlice.actions

export default transactionCompanySlice.reducer