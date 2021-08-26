// API
import axios from "axios";

const url = "https://api.coingecko.com/api/v3";

// constants
import {
  COIN_LIST_REQUEST,
  COIN_LIST_SUCCESS,
  COIN_LIST_FAIL,
} from "../constants/coinsConstants";

export const coinListAction = () => async (dispatch, getState) => {
  try {
    dispatch({ type: COIN_LIST_REQUEST });

    const { data } = await axios.get(
      `${url}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=150&page=1&sparkline=false`
    );

    dispatch({ type: COIN_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: COIN_LIST_FAIL, payload: error });
  }
};
