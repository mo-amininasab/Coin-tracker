import React, { useState, useEffect } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";
import { currenciesActions } from "./store/currencies";

// api
import { fetchCoins } from "./api/index";

// components
import Coin from "./components/Coin";
import SearchBox from "./components/SearchBox";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCoinsFromAPI = async () => {
      const data = await fetchCoins();
      dispatch(currenciesActions.setCurrencies(data));
    };

    fetchCoinsFromAPI();
  }, []);

  return (
    <div>
      <section>
        <SearchBox />
      </section>
      <div className="m-12">
        <Coin />
      </div>
    </div>
  );
}

export default App;
