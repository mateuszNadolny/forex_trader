import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  EUR: 0.0,
  USD: 0.0,
  GBP: 0.0,
  PLN: 10000.0
};

export const myWalletSlice = createSlice({
  name: 'myWallet',
  initialState,
  reducers: {
    setCurrencyValue: (state, action) => {
      const { currencyToSell, currencyToBuy, valueToSell, valueToBuy } = action.payload;
      state[currencyToSell] = (+state[currencyToSell] - valueToSell).toFixed(2);
      state[currencyToBuy] = (+state[currencyToBuy] + valueToBuy).toFixed(2);
    }
  }
});

export const { setCurrencyValue } = myWalletSlice.actions;

export default myWalletSlice;
