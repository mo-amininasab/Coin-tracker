import {
  COIN_LIST_REQUEST,
  COIN_LIST_SUCCESS,
  COIN_LIST_FAIL,
} from "../constants/coinsConstants";

const initialState = {
  coins: [],
  loading: true,
  error: "",
};

export const coinListReducer = (state = initialState, action) => {
  switch (action.type) {
    case COIN_LIST_REQUEST:
      return { ...state, loading: true, coins: [] };

    case COIN_LIST_SUCCESS:
      return { ...state, loading: false, coins: action.payload };

    case COIN_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
