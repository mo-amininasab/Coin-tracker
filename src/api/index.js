import axios from "axios";

const url = "https://api.coingecko.com/api/v3";

export const fetchCoins = async () => {
  try {
    const { data } = await axios.get(
      `${url}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
