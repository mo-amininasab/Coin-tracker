import React, { useState, useEffect } from "react";

// api
import { fetchCoins } from "./api/index";

function App() {
  const [coins, setCoins] = useState("");

  useEffect(() => {
    const fetchCoinsFromAPI = async () => {
      setCoins(await fetchCoins());
    };

    fetchCoinsFromAPI();
  }, []);

  console.log(coins);

  return (
    <div className="text-red-500">
      <div>
        <h1>Search a currency</h1>
        <form>
          <input type="text" placeholder="Search"></input>
        </form>
      </div>
    </div>
  );
}

export default App;
