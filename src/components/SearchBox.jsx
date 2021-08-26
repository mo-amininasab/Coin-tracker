import React from "react";

function SearchBox({ userSearch, setUserSearch }) {
  return (
    <form className="mx-auto my-10 w-min font-Titillium">
      <input
        type="text"
        placeholder="Search"
        value={userSearch}
        onChange={(event) => setUserSearch(event.target.value)}
        className="text-white px-3 py-2 rounded-sm w-64 border-none focus:outline-none bg-primary placeholder-gray-100"
      ></input>
    </form>
  );
}

export default SearchBox;
