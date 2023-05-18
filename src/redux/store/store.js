import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { currencyApi } from '../api/apiSlice';

import myWalletSlice from '../slices/my-wallet-slice';
import transactionsHistorySlice from '../slices/transactions-history-slice';
import userSlice from '../slices/user-slice';

export const store = configureStore({
  reducer: {
    [currencyApi.reducerPath]: currencyApi.reducer,
    myWallet: myWalletSlice.reducer,
    transactionsHistory: transactionsHistorySlice.reducer,
    userSlice: userSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(currencyApi.middleware)
});

setupListeners(store.dispatch);
