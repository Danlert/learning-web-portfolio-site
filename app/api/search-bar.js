"use client";
import { useState } from "react";
function SearchBar({ setAPISearch }) {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setAPISearch(searchText)
    setSearchText("")
  };

  const handleSearchText = (e) => {
   setSearchText(e.target.value)
  }
  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search Itunes for songs"
        value={searchText}
        onChange={handleSearchText}
        className={`p-1 rounded-sm bg-mauve-100 text-mauve-500 ${
         searchText ? "text-mauve-900" : "text-mauve-200"
        }`}
      ></input>
      <input
        type="submit"
        value="Search"
        className="p-1 ml-3 rounded-sm bg-blue-600"
      ></input>
    </form>
  );
}

export default SearchBar;
