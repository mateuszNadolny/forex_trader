import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const currencyApi = createApi({
  reducerPath: 'currencyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.freecurrencyapi.com/v1/`,
    prepareHeaders: (headers) => {
      headers.set('apikey', 'QVQWzkx8xuv7RC74ioyn2oIkGqRQuWcQWBONFbG9');
      return headers;
    }
  }),
  endpoints: (builder) => ({
    getLatestRate: builder.query({
      query: ({ firstCurrency, secondCurrency }) => ({
        url: `latest?currencies=${secondCurrency}&base_currency=${firstCurrency}`
      })
    }),
    getHistoricalRate: builder.query({
      query: ({ firstCurrency, secondCurrency, startDate, endDate }) => ({
        url: `historical?currencies=${secondCurrency}&base_currency=${firstCurrency}&date_from=${startDate}T00%3A00%3A00.000Z&date_to=${endDate}T00%3A00%3A00.000Z`
      })
    })
  })
});

export const { useGetLatestRateQuery, useGetHistoricalRateQuery } = currencyApi;

// https://api.freecurrencyapi.com/v1/historical?apikey=QVQWzkx8xuv7RC74ioyn2oIkGqRQuWcQWBONFbG9&currencies=PLN&base_currency=EUR&date_from=2023-04-07T08%3A49%3A13.340Z&date_to=2023-04-17T08%3A49%3A13.341Z
