import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const crytoNewsApiHeaders = {
  'x-bingapis-sdk': 'true',
  'x-rapidapi-host': process.env.REACT_APP_NEWS_RAPIDAPI_HOST,
  'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
};

const baseUrl = process.env.REACT_APP_NEWS_API_URL;

const createRequest = (url) => ({ url, headers: crytoNewsApiHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/search?q=${
            newsCategory || 'cryptocurrency'
          }&safeSearch=off&textFormat=Raw&freshness=Day&count=${count}`,
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
