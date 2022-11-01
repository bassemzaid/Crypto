import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiheader = {
  "X-RapidAPI-Key": "cd74f8576emsh1c46460e68b1d6bp1e7a1cjsnb4a38d68e60b",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const request = (url) => ({ url, headers: cryptoApiheader });

export const CryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCrypto: builder.query({
      query: (count) => request(`/coins?limit=${count}`),
    }),
    getDetail: builder.query({
      query: (coinId) => request(`/coin/${coinId}`),
    }),
    getHistory: builder.query({
      query: ({ coinId, state }) =>
        request(`/coin/${coinId}/history?state=${state}`),
    }),
  }),
});
export const { useGetCryptoQuery, useGetDetailQuery, useGetHistoryQuery } =
  CryptoApi;
