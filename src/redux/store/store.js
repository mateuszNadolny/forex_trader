import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { currencyApi } from '../api/apiSlice';

import currencyRatesSlice from '../slices/currency-rates-slice';

export const store = configureStore({
  reducer: {
    [currencyApi.reducerPath]: currencyApi.reducer,
    currencyRates: currencyRatesSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(currencyApi.middleware)
});

setupListeners(store.dispatch);
