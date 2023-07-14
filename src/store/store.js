import { configureStore } from "@reduxjs/toolkit";
import cryptoReducer from "./cryptoSlice";

export default configureStore({
  reducer: {
    cryptos : cryptoReducer,
  },
});
