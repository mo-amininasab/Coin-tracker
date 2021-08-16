import React from "react";

// redux
import { useDispatch, useSelector } from "react-redux";
import { currenciesActions } from "../store/currencies";

function SearchBox() {
  const dispatch = useDispatch();
  const userSearch = useSelector((state) => state.currencies.userSearch);

  const onChangeHandler = (e) => {
    dispatch(currenciesActions.userSearchChangeHandler(e.target.value));
  };

  return (
    <form className="mx-auto my-10 w-min font-Titillium">
      <input
        type="text"
        placeholder="Search"
        value={userSearch}
        onChange={onChangeHandler}
        className="text-white px-3 py-2 rounded-sm w-64 border-none focus:outline-none bg-primary placeholder-gray-100"
      ></input>
    </form>
  );
}

export default SearchBox;
