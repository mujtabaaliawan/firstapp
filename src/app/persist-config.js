import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  // add any persist configuration options here
};

export default persistConfig;