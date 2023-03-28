import { configureStore } from '@reduxjs/toolkit';

import currencyRatesSlice from '../slices/currency-rates-slice';

export const store = configureStore({
  reducer: { currencyRates: currencyRatesSlice.reducer }
});

// preventing dropdowns from displaying the same value
// useEffect(() => {
//   if (firstSelectedCurrency === secondSelectedCurrency) {
//     setSecondSelectedCurrency(secondDropdownOptions[1].name);
//   }
// }, [firstSelectedCurrency]);
