import { configureStore } from "@reduxjs/toolkit";
import cryptoReducer from "./cryptoSlice";
import thunk from "redux-thunk";

export default configureStore({
  reducer: {
    cryptos: cryptoReducer,
  },
  middleware: [thunk],
});
