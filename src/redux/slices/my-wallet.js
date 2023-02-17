// this is a redux toolkit slices to help manage the global state of user's currencies
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  euro: 0,
  usd: 0,
  gbp: 0,
  pln: 0
};

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setCurrencyValue: (state, action) => {
      const { currency, value } = action.payload;
      state[currency] = value;
    }
  }
});

export const { setCurrencyValue } = currencySlice.actions;

export default currencySlice.reducer;

// future component code
// import { useSelector, useDispatch } from 'react-redux';
// import { setCurrencyValue } from './currencySlice';

// function CurrencyConverter() {
//   const euro = useSelector((state) => state.currency.euro);
//   const dispatch = useDispatch();

//   const handleEuroChange = (event) => {
//     dispatch(setCurrencyValue({ currency: 'euro', value: event.target.value }));
//   };

//   // render UI for the other currencies...
// }
