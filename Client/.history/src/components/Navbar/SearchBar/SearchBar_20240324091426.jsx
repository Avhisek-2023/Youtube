import React from "react";
import "../SearchBar/SearchBar.css";
import { FaSearch, FaMicrophone } from "react-icons/fa";
import SearchList from "./SearchList";
import { useState } from "react";

function SearchBar() {
  const [searchQuery, setsearchQuery] = useState("");
  return (
    <div className="SearchBar_Conatiner">
      <div className="SearchBar_Conatiner2">
        <div className="search_div">
          <input
            type="text"
            className="iBox_SearchBar"
            placeholder="Search"
            onChange={(e) => setsearchQuery(e.target.value)}
          />
          {/* <Search_Box /> */}
          <FaSearch className="searchIcon_SearchBar" />
          <FaMicrophone className="searchIcon_SearchBar" />
          {<SearchList />}
          {/* <Search className="searchIcon_SearchBar" /> */}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
