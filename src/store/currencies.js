import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currencies: [],
  userSearch: "",
  isLoading: true,
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
    isLoadingHandler(state) {
      state.isLoading = false;
    },
  },
});

export const currenciesActions = currenciesSlice.actions;
export default currenciesSlice;
