import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const currencyApi = createApi({
  reducerPath: 'currencyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.freecurrencyapi.com/v3/`,
    prepareHeaders: (headers) => {
      headers.set('apikey', process.env.NEXT_PUBLIC_CURRENCY_API_KEY);
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
