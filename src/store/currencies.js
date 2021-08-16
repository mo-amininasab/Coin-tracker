import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currencies: [],
  userSearch: "",
};

const currenciesSlice = createSlice({
  name: "currencies",
  initialState: initialState,
  reducers: {
    setCurrencies(state, action) {
      state.currencies = action.payload;
    },
    userSearchChangeHandler(state, action) {
      state.userSearch = action.payload;
    },
  },
});

export const currenciesActions = currenciesSlice.actions;
export default currenciesSlice;
