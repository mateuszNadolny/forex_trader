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
        url: `historical?currencies=${secondCurrency}&base_currency=${firstCurrency}&date_from=${startDate}T15%3A30%3A16.449Z&date_to=${endDate}T15%3A30%3A16.449Z`
      })
    })
  })
});

export const { useGetLatestRateQuery, useGetHistoricalRateQuery } = currencyApi;
