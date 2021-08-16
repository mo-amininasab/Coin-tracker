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
    <div className="border-gray-200 rounded-sm overflow-hidden">
      <table className="w-full divide-y divide-gray-200 text-white">
        <thead className="bg-primary text-left">
          <tr>
            <th className="px-3 py-2 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
              Currency
            </th>
            <th className="px-3 py-2 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
              Symbol
            </th>
            <th className="px-3 py-2 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
              Price
            </th>
            <th className="px-3 py-2 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
              Volume
            </th>
            <th className="px-3 py-2 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
              Price Change
            </th>
            <th className="px-3 py-2 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
              Mkt Cap
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-left">
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
              <td className="px-3 py-2">{currency.current_price}</td>
              <td className="px-3 py-2">{currency.total_volume}</td>
              <td className="px-3 py-2">
                {currency.price_change_percentage_24h}
              </td>
              <td className="px-3 py-2">{currency.market_cap}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Coin;
