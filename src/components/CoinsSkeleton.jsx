import React from "react";

function CoinsSkeleton() {
  return (
    <div>
      <table className="w-full divide-y divide-gray-200 animate-pulse">
        <thead className="bg-primary">
          <tr>
            <th className="w-24 whitespace-nowrap md:w-40 px-3 py-2 text-xs md:text-sm font-medium text-gray-300">
              <div className="bg-gray-400 w-full h-4 my-1 rounded-md"></div>
            </th>
            <th className="w-10 whitespace-nowrap px-3 py-2 text-xs md:text-sm font-medium text-gray-300">
              <div className="bg-gray-400 w-14 h-4 my-1 rounded-md"></div>
            </th>
            <th className="w-min whitespace-nowrap px-3 py-2 text-xs md:text-sm font-medium text-gray-300">
              <div className="bg-gray-400 w-full h-4 my-1 rounded-md"></div>
            </th>
            <th className="w-36 whitespace-nowrap px-3 py-2 text-xs md:text-sm font-medium text-gray-300">
              <div className="bg-gray-400 w-full h-4 my-1 rounded-md"></div>
            </th>
            <th className="w-15 whitespace-nowrap px-3 py-2 text-xs md:text-sm font-medium text-gray-300">
              <div className="bg-gray-400 w-full h-4 my-1 rounded-md"></div>
            </th>
            <th className="w-36 whitespace-nowrap px-3 py-2 text-xs md:text-sm font-medium text-gray-300">
              <div className="bg-gray-400 w-full h-4 my-1 rounded-md"></div>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-600">
          <tr>
            <td className="flex px-3 py-2 items-center">
              <div className="bg-gray-400 w-7 h-7 mr-4 rounded-md flex-shrink-0"></div>
              <div className="bg-gray-400 w-full h-4 rounded-md"></div>
            </td>
            <td className="px-3 py-2">
              <div className="bg-gray-400 w-full h-4 rounded-md"></div>
            </td>
            <td className="px-3 py-2">
              <div className="bg-gray-400 w-full h-4 rounded-md"></div>
            </td>
            <td className="px-3 py-2">
              <div className="bg-gray-400 w-full h-4 rounded-md"></div>
            </td>
            <td className="px-3 py-2 text-red-500">
              <div className="bg-gray-400 w-full h-4 rounded-md"></div>
            </td>

            <td className="px-3 py-2">
              <div className="bg-gray-400 w-full h-4 rounded-md"></div>
            </td>
          </tr>
          <tr>
            <td className="flex px-3 py-2 items-center">
              <div className="bg-gray-400 w-7 h-7 mr-4 rounded-md flex-shrink-0"></div>
              <div className="bg-gray-400 w-full h-4 rounded-md"></div>
            </td>
            <td className="px-3 py-2">
              <div className="bg-gray-400 w-full h-4 rounded-md"></div>
            </td>
            <td className="px-3 py-2">
              <div className="bg-gray-400 w-full h-4 rounded-md"></div>
            </td>
            <td className="px-3 py-2">
              <div className="bg-gray-400 w-full h-4 rounded-md"></div>
            </td>
            <td className="px-3 py-2 text-red-500">
              <div className="bg-gray-400 w-full h-4 rounded-md"></div>
            </td>

            <td className="px-3 py-2">
              <div className="bg-gray-400 w-full h-4 rounded-md"></div>
            </td>
          </tr>
          <tr>
            <td className="flex px-3 py-2 items-center">
              <div className="bg-gray-400 w-7 h-7 mr-4 rounded-md flex-shrink-0"></div>
              <div className="bg-gray-400 w-full h-4 rounded-md"></div>
            </td>
            <td className="px-3 py-2">
              <div className="bg-gray-400 w-full h-4 rounded-md"></div>
            </td>
            <td className="px-3 py-2">
              <div className="bg-gray-400 w-full h-4 rounded-md"></div>
            </td>
            <td className="px-3 py-2">
              <div className="bg-gray-400 w-full h-4 rounded-md"></div>
            </td>
            <td className="px-3 py-2 text-red-500">
              <div className="bg-gray-400 w-full h-4 rounded-md"></div>
            </td>

            <td className="px-3 py-2">
              <div className="bg-gray-400 w-full h-4 rounded-md"></div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CoinsSkeleton;
