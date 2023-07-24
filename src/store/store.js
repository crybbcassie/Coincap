import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cryptoReducer from "./cryptoSlice";
import walletReducer from './walletSlice'
import thunk from "redux-thunk";

const rootReducer = combineReducers

const persistConfig = {
  key: "root",
  storage,
};

export default configureStore({
  reducer: {
    cryptos: cryptoReducer,
    walletItems: walletReducer,
  },
  middleware: [thunk],
});
