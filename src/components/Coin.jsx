import React from "react";

function Coin({ image, name, symbol, price, volume, priceChange, marketCap }) {
  return (
    <>
            <div className="border-gray-200 rounded-sm overflow-hidden">
          <table className="w-full divide-y divide-gray-200 text-white">
            <thead className="bg-primary text-left">
              <tr>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Currency</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Symbol</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Price</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Volume</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Price Change</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Mkt Cap</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-left">
              <tr>
                <td className="px-3 py-2">{name}</td>
                <td className="px-3 py-2">{symbol}</td>
                <td className="px-3 py-2">{price}</td>
                <td className="px-3 py-2">{volume}</td>
                <td className="px-3 py-2">{priceChange}</td>
                <td className="px-3 py-2">{marketCap}</td>
              </tr>
            </tbody>
          </table>
        </div>

      {/* <div className="flex space-x-5 mb-6 pb-4 border-b-2 text-left text-white">
        <img src={image} alt="crypto" className="w-8 h-8 mr-4" />
        <h1 className="w-32">{name}</h1>
        <p className="w-14 uppercase">{symbol}</p>

        <p className="w-24">${price}</p>
        <p className="w-32">${volume.toLocaleString()}</p>
        {priceChange < 0 ? (
          <p className="text-red-600 w-16">{priceChange.toFixed(2)}%</p>
        ) : (
          <p className="text-green-600 w-16">{priceChange.toFixed(2)}%</p>
        )}
        <p>Mkt Cap: ${marketCap.toLocaleString()}</p>
      </div> */}
    </>
  );
}

export default Coin;
