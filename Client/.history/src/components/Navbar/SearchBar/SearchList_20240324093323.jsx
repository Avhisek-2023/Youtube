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
            {e}
          </p>;
        })}
      </div>
    </>
  );
}

export default SearchList;
