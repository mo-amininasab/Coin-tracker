import React, { useState, useEffect } from "react";

// redux
import { useDispatch } from "react-redux";
import { currenciesActions } from "./store/currencies";

// api
import { fetchCoins } from "./api/index";

// components
import Coin from "./components/Coin";
import SearchBox from "./components/SearchBox";
import Footer from "./components/Footer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCoinsFromAPI = async () => {
      const data = await fetchCoins();
      dispatch(currenciesActions.setCurrencies(data));
      dispatch(currenciesActions.isLoadingHandler())
    };

    fetchCoinsFromAPI();
  }, []);

  return (
    <div>
      <section>
        <SearchBox />
      </section>
      <section className="m-12">
        <Coin />
      </section>
      <Footer />
    </div>
  );
}

export default App;
