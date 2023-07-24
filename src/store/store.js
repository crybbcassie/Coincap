import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cryptoReducer from "./cryptoSlice";
import walletReducer from './walletSlice'
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  cryptos: cryptoReducer,
  walletItems: walletReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store)

export default store
