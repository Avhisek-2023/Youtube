import React from "react";
import "./SearchList.css";
import { FaSearch } from "react-icons/fa";
function SearchList({ title }) {
  return (
    <>
      <div className="Conatiner_SearchList">
        {title.map((e) => {
          <p className="titleItem">
            <FaSearch />
            Item1
          </p>;
        })}

        <p className="titleItem">
          <FaSearch />
          Item2
        </p>
      </div>
    </>
  );
}

export default SearchList;
