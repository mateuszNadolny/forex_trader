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
    setWalletCurrencies: (state, action) => {
      const { currencyToSell, currencyToBuy, amountToSell, amountToBuy } = action.payload;
      state[currencyToSell] = (+state[currencyToSell] - amountToSell).toFixed(2);
      state[currencyToBuy] = (+state[currencyToBuy] + amountToBuy).toFixed(2);
    }
  }
});

export const { setWalletCurrencies } = myWalletSlice.actions;

export default myWalletSlice;
