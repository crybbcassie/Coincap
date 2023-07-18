import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCryptos = createAsyncThunk(
  "cryptos/fetchCryptos",
  async function (_, { rejectWithValue }) {
    try {
      const response = await axios.get("https://api.coincap.io/v2/assets?limit=5");
      console.log(response.data.data);
      return response.data.data
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

const cryptoSlice = createSlice({
  name: "cryptos",
  initialState: {
    cryptos: [],
    status: null,
    error: null,
  },
  extraReducers: {
    [fetchCryptos.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchCryptos.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.cryptos = action.payload;
    },
    [fetchCryptos.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

// export const { } = cryptoSlice.actions;

export default cryptoSlice.reducer;
