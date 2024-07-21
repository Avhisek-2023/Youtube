import React from "react";
import "../SearchBar/SearchBar.css";
import Search_Box from "/images/search.svg";

function SearchBar() {
  return (
    <div className="SearchBar_Conatiner">
      <div className="SearchBar_Conatiner2">
        <div className="search_div">
          <input type="text" className="iBox_SearchBar" />
          {/* <Search_Box /> */}
          {/* <Search className="searchIcon_SearchBar" /> */}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
