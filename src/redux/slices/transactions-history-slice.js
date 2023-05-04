import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const transactionsHistorySlice = createSlice({
  name: 'transactionsHistory',
  initialState,
  reducers: {
    addTransaction: (state, { payload }) => {
      return [
        ...state,
        {
          currencySold: payload.currencySold,
          currencySoldAmount: payload.currencySoldAmount,
          currencyReceived: payload.currencyReceived,
          currencyReceivedAmount: payload.currencyReceivedAmount,
          exchangeRate: payload.exchangeRate,
          date: payload.date
        }
      ];
    }
  }
});

export const { addTransaction } = transactionsHistorySlice.actions;

export default transactionsHistorySlice;
