import React from "react";

function Coin({ image, name, symbol, price, volume, priceChange, marketcap }) {
  return (
    <div className="flex space-x-5 mb-6 pb-4 border-b-2 text-left text-white">
      <img src={image} alt="crypto" className="w-8 h-8 mr-4"/>
      <h1 className="w-32">{name}</h1>
      <p className="w-14 uppercase">{symbol}</p>

      <p className="w-24">${price}</p>
      <p className="w-32">${volume.toLocaleString()}</p>
      {priceChange < 0 ? <p className="text-red-800 w-16">{priceChange.toFixed(2)}%</p>: <p className="text-green-800 w-16">{priceChange.toFixed(2)}%</p>}
      <p>Mkt Cap: ${marketcap.toLocaleString()}</p>
    </div>
  );
}

export default Coin;
