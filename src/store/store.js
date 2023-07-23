import { configureStore } from "@reduxjs/toolkit";
import cryptoReducer from "./cryptoSlice";
import walletReducer from './walletSlice'
import thunk from "redux-thunk";

export default configureStore({
  reducer: {
    cryptos: cryptoReducer,
    walletItems: walletReducer,
  },
  middleware: [thunk],
});
