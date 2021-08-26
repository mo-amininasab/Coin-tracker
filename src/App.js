import React, { useEffect, useState } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";

// actios
import { coinListAction } from "./store/actions/action";

// components
import Coin from "./components/Coin";
import SearchBox from "./components/SearchBox";
import Footer from "./components/Footer";
import CoinsSkeleton from "./components/CoinsSkeleton";

function App() {
  const dispatch = useDispatch();

  const [userSearch, setUserSearch] = useState("");

  const coinList = useSelector((state) => state.coins);
  const { coins, loading, error } = coinList;

  // filtering data.
  let filteredCoins = "";
  if (coins) {
    filteredCoins = Object.values(coins).filter((coin) =>
      coin.name.trim().toLowerCase().includes(userSearch.trim().toLowerCase())
    );
  }

  useEffect(() => {
    dispatch(coinListAction());
  }, [dispatch]);

  return (
    <div>
      <section>
        <SearchBox userSearch={userSearch} setUserSearch={setUserSearch} />
      </section>
      <section className="m-6 md:m-12">
        {loading ? (
          <CoinsSkeleton />
        ) : error ? (
          console.log(error)
        ) : (
          <Coin coins={filteredCoins} />
        )}
      </section>
      <Footer />
    </div>
  );
}

export default App;
