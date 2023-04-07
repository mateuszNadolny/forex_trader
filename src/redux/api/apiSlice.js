import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// https://api.freecurrencyapi.com/v1/latest?apikey=QVQWzkx8xuv7RC74ioyn2oIkGqRQuWcQWBONFbG9&currencies=PLN&base_currency=EUR

export const currencyApi = createApi({
  reducerPath: 'currencysApi',
  baseQuery: fetchBaseQuery({
    baseUrl:
      'https://api.freecurrencyapi.com/v1/latest?apikey=QVQWzkx8xuv7RC74ioyn2oIkGqRQuWcQWBONFbG9&'
  }),
  endpoints: (builder) => ({
    getLatestRate: builder.query({
      query: (firstCurrency, secondCurrency) =>
        `currencies=${secondCurrency}&base_currency=${firstCurrency}`
    })
  })
});

export const { useGetLatestRateQuery } = currencyApi;
