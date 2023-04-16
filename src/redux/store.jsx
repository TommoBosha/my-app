import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './auth/authSlice';
import testReducer from './test/testSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ["userData", "accessToken", "isLogin", "token"],
};

const testPersistConfig = {
  key: 'test',
  storage,
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    test: persistReducer(testPersistConfig, testReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

  devTools: process.env.NODE_ENV !== 'production',
});
export const persistor = persistStore(store);
