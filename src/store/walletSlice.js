import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const walletSlice = createSlice({
  name: "walletItems",
  initialState: {
    walletItems: [],
    status: null,
    error: null,
  },
  reducers: {
    addCrypto(state, action) {
      state.walletItems.push(action.payload);
      console.log(action.payload);
    },
    removeCrypto(state, action) {
      state.walletItems = state.walletItems.filter(
        (item) => item.name !== action.payload.name
      );
      console.log(action.payload)
    },
  },
});

export const {
  addCrypto, removeCrypto
} = walletSlice.actions;

export default walletSlice.reducer;