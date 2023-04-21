import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    currencySold: 'PLN',
    currencySoldAmount: '12',
    currencyReceived: 'USD',
    currencyReceivedAmount: '1.54',
    exchangeRate: '0.24',
    date: '2023-04-12'
  }
];

export const transactionsHistorySlice = createSlice({
  name: 'transactionsHistory',
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      return [
        ...state,
        {
          currencySold: action.payload.currencySold,
          currencySoldAmount: action.payload.currencySoldAmount,
          currencyReceived: action.payload.currencyReceived,
          currencyReceivedAmount: action.payload.currencyReceivedAmount,
          exchangeRate: action.payload.exchangeRate,
          date: action.payload.date
        }
      ];
    }
  }
});

export const { addTransaction } = transactionsHistorySlice.actions;

export default transactionsHistorySlice;
