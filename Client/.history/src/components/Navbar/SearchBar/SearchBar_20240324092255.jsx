import React from "react";
import "../SearchBar/SearchBar.css";
import { FaSearch, FaMicrophone } from "react-icons/fa";
import SearchList from "./SearchList";
import { useState } from "react";

function SearchBar() {
  const [searchQuery, setsearchQuery] = useState("");
  const [searchListA, setSearchList] = useState(false);
  return (
    <div className="SearchBar_Conatiner">
      <div className="SearchBar_Conatiner2">
        <div className="search_div">
          <input
            type="text"
            className="iBox_SearchBar"
            placeholder="Search"
            onChange={(e) => setsearchQuery(e.target.value)}
            onClick={(e) => setSearchList(false)}
          />
          {/* <Search_Box /> */}
          <FaSearch
            className="searchIcon_SearchBar"
            onClick={(e) => setSearchList(true)}
          />
          <FaMicrophone className="searchIcon_SearchBar" />
          {searchQuery && searchListA && <SearchList />}
          {/* <Search className="searchIcon_SearchBar" /> */}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
