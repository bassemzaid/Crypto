import { configureStore } from "@reduxjs/toolkit";
import { CryptoApi } from "../api/CryptoApi";
import { CryptoNews } from "../api/CryptoNews";

export default configureStore({
  reducer: {
    [CryptoApi.reducerPath]: CryptoApi.reducer,
    [CryptoNews.reducerPath]: CryptoNews.reducer,
  },
});
