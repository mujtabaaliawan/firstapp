import { configureStore } from '@reduxjs/toolkit'
import loggedReducer from '../features/user/userSlice'
import tokenReducer from '../features/token/tokenSlice'
export const store = configureStore({
  reducer: {
    logged: loggedReducer,
    token: tokenReducer,
  },
})