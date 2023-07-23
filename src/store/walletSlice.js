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
      state.walletItems.push(action.payload.data);
      console.loh(state, action)
    },
    removeCrypto(state, action) {
      state.walletItems = state.walletItems.filter(
        (item) => item.id !== action.payload.id
      );
      console.log(state, action)
    },
  },
});

export const {
  addCrypto, removeCrypto
} = walletSlice.actions;

export default walletSlice.reducer;