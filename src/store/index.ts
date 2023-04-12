import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import { apiSlice } from './slices/api/apiSlice';

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    apiSlice.middleware,
    logger,
  ],
  devTools: process.env.NODE_ENV === 'development',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type DispatchType = typeof store.dispatch;
export default store;
