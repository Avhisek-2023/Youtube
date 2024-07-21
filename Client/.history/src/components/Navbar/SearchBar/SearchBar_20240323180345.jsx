import React from "react";
import "../SearchBar/SearchBar.css";
import { FaSearch, FaMicrophone } from "react-icons/fa";

function SearchBar() {
  return (
    <div className="SearchBar_Conatiner">
      <div className="SearchBar_Conatiner2">
        <div className="search_div">
          <input type="text" className="iBox_SearchBar" />
          {/* <Search_Box /> */}
          <FaSearch className="searchIcon_SearchBar" />
          <FaMicrophone className="searchIcon_SearchBar" />
          {/* <Search className="searchIcon_SearchBar" /> */}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
