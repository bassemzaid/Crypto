import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const newsHeader = {
  "X-BingApis-SDK": "true",
  "X-RapidAPI-Key": "cd74f8576emsh1c46460e68b1d6bp1e7a1cjsnb4a38d68e60b",
  "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
};

const baseUrl = "https://bing-news-search1.p.rapidapi.com";

const request = (url) => ({ url, headers: newsHeader });

export const CryptoNews = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getNewsCrypto: builder.query({
      query: ({ newsCategory, count }) =>
        request(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});
export const { useGetNewsCryptoQuery } = CryptoNews;
