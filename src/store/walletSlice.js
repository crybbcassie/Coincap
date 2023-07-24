import { createSlice } from "@reduxjs/toolkit";

const walletSlice = createSlice({
  name: "walletItems",
  initialState: {
    walletItems: [],
    status: null,
    error: null,
  },
  reducers: {
    addCrypto(state, action) {
      const { key, amount, total } = action.payload;
      const existingCryptoIndex = state.walletItems.findIndex(
        (crypto) => crypto.key === key
      );
      if (existingCryptoIndex !== -1) {
        state.walletItems[existingCryptoIndex].amount += amount;
        state.walletItems[existingCryptoIndex].total += total;
      } else {
        state.walletItems.push(action.payload);
      }
    },
    removeCrypto(state, action) {
      state.walletItems = state.walletItems.filter(
        (item) => item.name !== action.payload.name
      );
    },
  },
});

export const {
  addCrypto, removeCrypto
} = walletSlice.actions;

export default walletSlice.reducer;