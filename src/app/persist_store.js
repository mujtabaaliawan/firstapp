import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import persistConfig from './persist-config';
import loggedReducer from '../features/user/userSlice';
import tokenReducer from '../features/token/tokenSlice';
import favouriteReducer from '../features/favourite/favouriteSlice';
import transactionReducer from '../features/transaction/transactionSlice';
import managerReducer from '../features/manager/managerSlice';
import favouriteCompanyReducer from '../features/favourite-company/favouriteCompanySlice';
import transactionCompanyReducer from '../features/transaction-company/transactionCompanySlice';
import activeSubReducer from '../features/subscription/activeSlice';
import trialSubReducer from '../features/subscription/trialSlice';
import tourReducer from '../features/tour/tourSlice';
import loadingReducer from '../features/loading/loadingSlice';

const persistedReducer = persistReducer(persistConfig, combineReducers({
  logged: loggedReducer,
  token: tokenReducer,
  favourite: favouriteReducer,
  transaction: transactionReducer,
  manager: managerReducer,
  favouriteCompany: favouriteCompanyReducer,
  transactionCompany: transactionCompanyReducer,
  activeSub: activeSubReducer,
  trialSub: trialSubReducer,
  tourMode: tourReducer,
  loading: loadingReducer,
}));

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export const persistor = persistStore(store);