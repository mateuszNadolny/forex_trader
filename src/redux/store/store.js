import { configureStore } from '@reduxjs/toolkit';

import currencyRatesSlice from '../slices/currency-rates-slice';

export const store = configureStore({
  reducer: { currencyRates: currencyRatesSlice.reducer }
});
