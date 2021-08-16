import React from "react";

// redux
import { useSelector } from "react-redux";

function Coin() {
  const fetchedCurrencies = useSelector((state) => state.currencies.currencies);
  const userSearch = useSelector((state) => state.currencies.userSearch);
  const filteredCurrencies = Object.values(fetchedCurrencies).filter(
    (currency) =>
      currency.name
        .trim()
        .toLowerCase()
        .includes(userSearch.trim().toLowerCase())
  );

  return (
    <div className="border-gray-200 rounded-sm overflow-hidden font-Titillium text-xs sm:text-sm md:text-md overflow-x-scroll overflow-y-scroll h-screen md:overflow-x-hidden mx-auto">
      <table className="w-full divide-y divide-gray-200 text-white">
        <thead className="bg-primary text-left">
          <tr>
            <th className="px-3 py-2 text-left text-xs md:text-sm font-medium text-gray-300 uppercase tracking-wider">
              Currency
            </th>
            <th className="px-3 py-2 text-left text-xs md:text-sm font-medium text-gray-300 uppercase tracking-wider">
              Symbol
            </th>
            <th className="px-3 py-2 text-left text-xs md:text-sm font-medium text-gray-300 uppercase tracking-wider">
              Price
            </th>
            <th className="px-3 py-2 text-left text-xs md:text-sm font-medium text-gray-300 uppercase tracking-wider">
              Volume
            </th>
            <th className="px-3 py-2 text-left text-xs md:text-sm font-medium text-gray-300 uppercase tracking-wider">
              Price Change
            </th>
            <th className="px-3 py-2 text-left text-xs md:text-sm font-medium text-gray-300 uppercase tracking-wider">
              Mkt Cap
            </th>
          </tr>
        </thead>
        {!fetchedCurrencies ? (
          <p>Loading...</p>
        ) : (
          <tbody className="divide-y divide-gray-600 text-left">
            {filteredCurrencies.map((currency) => (
              <tr key={currency.id}>
                <td className="flex px-3 py-2 items-center">
                  <img
                    src={currency.image}
                    alt="currency"
                    className="w-7 h-7 mr-4"
                  />
                  {currency.name}
                </td>
                <td className="px-3 py-2 uppercase">{currency.symbol}</td>
                <td className="px-3 py-2">
                  $ {currency.current_price.toLocaleString()}
                </td>
                <td className="px-3 py-2">
                  $ {currency.total_volume.toLocaleString()}
                </td>
                {currency.price_change_percentage_24h < 0 ? (
                  <td className="px-3 py-2 text-red-500">
                    {currency.price_change_percentage_24h.toLocaleString()} %
                  </td>
                ) : (
                  <td className="px-3 py-2 text-green-500">
                    {currency.price_change_percentage_24h.toLocaleString()} %
                  </td>
                )}
                <td className="px-3 py-2">
                  $ {currency.market_cap.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
}

export default Coin;
