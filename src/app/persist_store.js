import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import persistConfig from './persist-config';
import userReducer from '../pages/login/reducers/userSlice';
import favouriteReducer from '../pages/favourite/reducer/favouriteSlice';
import transactionReducer from '../pages/transaction/reducer/transactionSlice';
import loadingReducer from '../reducers/loading/loadingSlice';

const persistedReducer = persistReducer(persistConfig, combineReducers({
  loading: loadingReducer,
  user: userReducer,
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