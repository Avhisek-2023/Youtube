import React from "react";
import "../SearchBar/SearchBar.css";
import { FaSearch, FaMicrophone } from "react-icons/fa";
import SearchList from "./SearchList";
import { useState } from "react";

function SearchBar() {
  const [searchQuery, setsearchQuery] = useState("");
  const [searchListA, setSearchList] = useState(false);
  const titleArray = [
    "video1,video2,video3,animation video,serial,sports,music",
  ].filter((q) => q.includes);
  return (
    <div className="SearchBar_Conatiner">
      <div className="SearchBar_Conatiner2">
        <div className="search_div">
          <input
            type="text"
            className="iBox_SearchBar"
            placeholder="Search"
            onChange={(e) => setsearchQuery(e.target.value)}
            onClick={(e) => setSearchList(true)}
          />
          {/* <Search_Box /> */}
          <FaSearch
            className="searchIcon_SearchBar"
            onClick={(e) => setSearchList(false)}
          />
          <FaMicrophone className="searchIcon_SearchBar" />
          {searchQuery && searchListA && <SearchList title={titleArray} />}
          {/* <Search className="searchIcon_SearchBar" /> */}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
