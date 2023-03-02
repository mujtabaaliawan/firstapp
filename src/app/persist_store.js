import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import persistConfig from './persist-config';
import loggedReducer from '../features/user/userSlice';
import tokenReducer from '../features/token/tokenSlice';
import favouriteReducer from '../features/favourite/favouriteSlice';
import transactionReducer from '../features/transaction/transactionSlice';

const persistedReducer = persistReducer(persistConfig, combineReducers({
  logged: loggedReducer,
  token: tokenReducer,
  favourite: favouriteReducer,
  transaction: transactionReducer,
}));

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export const persistor = persistStore(store);