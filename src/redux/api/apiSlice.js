import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// https://api.freecurrencyapi.com/v1/latest?apikey=QVQWzkx8xuv7RC74ioyn2oIkGqRQuWcQWBONFbG9&currencies=PLN&base_currency=EUR
// https://api.freecurrencyapi.com/v1/historical?apikey=QVQWzkx8xuv7RC74ioyn2oIkGqRQuWcQWBONFbG9&currencies=EUR&date_from=2023-04-04T19%3A00%3A01.931Z&date_to=2023-04-06T19%3A00%3A01.932Z
// https://api.freecurrencyapi.com/v1/historical?apikey=QVQWzkx8xuv7RC74ioyn2oIkGqRQuWcQWBONFbG9&currencies=EUR&date_from=2023-04-01T19%3A00%3A01.931Z&date_to=2023-04-06T19%3A00%3A01.932Z

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
    // getHistoricalRate: builder.query({
    //     query: (firstCurrency, secondCurrency) =>
    // })
  })
});

export const { useGetLatestRateQuery } = currencyApi;
