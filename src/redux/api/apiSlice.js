// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const currencyApi = createApi({
//   reducerPath: 'currencysApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: `https://api.freecurrencyapi.com/v1/latest?apikey=QVQWzkx8xuv7RC74ioyn2oIkGqRQuWcQWBONFbG9&`
//   }),
//   endpoints: (builder) => ({
//     getLatestRate: builder.query({
//       query: (firstCurrency, secondCurrency) =>
//         `currencies=${secondCurrency}&base_currency=${firstCurrency}`
//     }),
//     getHistoricalRate: builder.query({
//       query: (firstCurrency, secondCurrency, startDate, endDate) =>
//         `currencies=${secondCurrency}&base_currency=${firstCurrency}&date_from=${startDate}T18%3A48%3A17.196Z&date_to=${endDate}T18%3A48%3A17.196Z`
//     })
//   })
// });

// export const { useGetLatestRateQuery, useGetHistoricalRateQuery } = currencyApi;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const historicalRatesBaseUrl =
  'https://api.freecurrencyapi.com/v1/historical?apikey=QVQWzkx8xuv7RC74ioyn2oIkGqRQuWcQWBONFbG9';

export const currencyApi = createApi({
  reducerPath: 'currencysApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.freecurrencyapi.com/v1/latest?apikey=QVQWzkx8xuv7RC74ioyn2oIkGqRQuWcQWBONFbG9&`
  }),
  endpoints: (builder) => ({
    getLatestRate: builder.query({
      query: (firstCurrency, secondCurrency) =>
        `currencies=${secondCurrency}&base_currency=${firstCurrency}`
    }),
    getHistoricalRate: builder.query({
      query: (firstCurrency, secondCurrency, startDate, endDate) =>
        `${historicalRatesBaseUrl}&currencies=${secondCurrency}&base_currency=${firstCurrency}&date_from=${startDate}T18%3A48%3A17.196Z&date_to=${endDate}T18%3A48%3A17.196Z`
    })
  })
});

export const { useGetLatestRateQuery } = currencyApi;

export const useGetHistoricalRateQuery = currencyApi.injectEndpoints({
  endpoints: (builder) => ({
    getHistoricalRate: builder.query({
      query: (firstCurrency, secondCurrency, startDate, endDate) =>
        `${historicalRatesBaseUrl}&currencies=${secondCurrency}&base_currency=${firstCurrency}&date_from=${startDate}T18%3A48%3A17.196Z&date_to=${endDate}T18%3A48%3A17.196Z`
    })
  }),
  baseQuery: fetchBaseQuery({ baseUrl: historicalRatesBaseUrl }),
  overrideExisting: true
}).useGetHistoricalRateQuery;
