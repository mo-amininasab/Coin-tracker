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

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = Object.values(coins).filter((coin) =>
    coin.name.trim().toLowerCase().includes(search.trim().toLowerCase())
  );

  return (
    <div>
      <section>
        <form className="mx-auto my-10 w-min">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={handleChange}
            className="px-3 py-2 rounded-sm w-64 border-none focus:outline-none bg-primary placeholder-gray-100"
          ></input>
        </form>
      </section>
      <div className="m-12">

        {filteredCoins.map((coin) => (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            volume={coin.total_volume}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            marketCap={coin.market_cap}
          ></Coin>
        ))}
      </div>
    </div>
  );
}

export default App;
