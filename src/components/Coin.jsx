import React from "react";

// redux
import { useSelector } from "react-redux";

// components
import CoinsSkeleton from "./CoinsSkeleton";

function Coin() {
  const isLoading = useSelector((state) => state.currencies.isLoading);
  const fetchedCurrencies = useSelector((state) => state.currencies.currencies);
  const userSearch = useSelector((state) => state.currencies.userSearch);
  let filteredCurrencies = "";
  if (fetchedCurrencies) {
    filteredCurrencies = Object.values(fetchedCurrencies).filter((currency) =>
      currency.name
        .trim()
        .toLowerCase()
        .includes(userSearch.trim().toLowerCase())
    );
  }
  console.log(fetchedCurrencies);

  return (
    <div className="border-gray-200 rounded-sm overflow-hidden font-Titillium text-xs sm:text-sm md:text-md overflow-x-scroll overflow-y-scroll h-screen md:overflow-x-hidden mx-auto">
      {!isLoading ? (
        <table className="w-full divide-y divide-gray-200 text-white">
          <thead className="bg-primary text-left">
            <tr>
              <th className="w-24 whitespace-nowrap md:w-40 px-3 py-2 text-left text-xs md:text-sm font-medium text-gray-300 uppercase tracking-wider">
                Coin
              </th>
              <th className="w-10 whitespace-nowrap px-3 py-2 text-left text-xs md:text-sm font-medium text-gray-300 uppercase tracking-wider hidden md:block">
                Symbol
              </th>
              <th className="w-min whitespace-nowrap px-3 py-2 text-left text-xs md:text-sm font-medium text-gray-300 uppercase tracking-wider">
                Price
              </th>
              <th className="w-36 whitespace-nowrap px-3 py-2 text-left text-xs md:text-sm font-medium text-gray-300 uppercase tracking-wider">
                Total Volume
              </th>
              <th className="w-15 whitespace-nowrap px-3 py-2 text-left text-xs md:text-sm font-medium text-gray-300 uppercase tracking-wider">
                24H
              </th>
              <th className="w-36 whitespace-nowrap px-3 py-2 text-left text-xs md:text-sm font-medium text-gray-300 uppercase tracking-wider">
                Mkt Cap
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-600 text-left">
            {filteredCurrencies.map((currency) => (
              <tr key={currency.id}>
                <td className="flex px-3 py-2 items-center uppercase">
                  <img
                    src={currency.image}
                    alt="currency"
                    className="w-7 h-7 mr-4"
                  />
                  <span className="mr-6 hidden md:block">{currency.name}</span>
                  <span className="md:hidden">{currency.symbol}</span>
                </td>
                <td className="px-3 py-2 uppercase hidden md:table-cell">
                  {currency.symbol}
                </td>
                <td className="px-3 py-2">
                  ${currency.current_price.toLocaleString()}
                </td>
                <td className="px-3 py-2">
                  ${currency.total_volume.toLocaleString()}
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
                  ${currency.market_cap.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <CoinsSkeleton />
      )}
    </div>
  );
}

export default Coin;
