// currencyRatesSlice.js

import { createSlice } from '@reduxjs/toolkit';

const currencyRatesSlice = createSlice({
  name: 'currencyRates',
  initialState: ['test value', 'test value 2'],
  reducers: {
    filterCurrencyRates: (state, action) => {
      const { obj, currency } = action.payload;
      const newObj = { data: {} };
      for (const date in obj.data) {
        newObj.data[date] = {};
        newObj.data[date][currency] = obj.data[date][currency];
      }
      const array = Object.values(newObj.data).map((item) => item[currency]);
      state = [...array];
    }
  }
});

export const currencyActions = currencyRatesSlice.actions;

export default currencyRatesSlice;
