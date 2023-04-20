import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const transactionsHistorySlice = createSlice({
  name: 'transactionsHistory',
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      state.push({
        currencySold: action.payload.currencySold,
        currencySoldAmount: action.payload.currencySoldAmount,
        currencyReceived: action.payload.currencyReceived,
        currencyReceivedAmount: action.payload.currencyReceivedAmount,
        date: action.payload.date
      });
    }
  }
});

export const { addTransaction } = transactionsHistorySlice.actions;

export default transactionsHistorySlice;
