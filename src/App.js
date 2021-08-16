import React, { useState, useEffect } from "react";

// api
import { fetchCoins } from "./api/index";

// components
import Coin from "./components/Coin";

function App() {
  const [coins, setCoins] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchCoinsFromAPI = async () => {
      setCoins(await fetchCoins());
    };

    fetchCoinsFromAPI();
  }, []);
  console.log('coins',coins);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = Object.values(coins).filter((coin) =>
    coin.name.trim().toLowerCase().includes(search.trim().toLowerCase())
  );

  return (
    <div>
      <div>
        <h1 className="text-white">Search a currency</h1>
        <form>
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={handleChange}
          ></input>
        </form>
        {filteredCoins.map((coin) => (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            volume={coin.total_volume}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            marketcap={coin.market_cap}
          ></Coin>
        ))}
      </div>
    </div>
  );
}

export default App;
