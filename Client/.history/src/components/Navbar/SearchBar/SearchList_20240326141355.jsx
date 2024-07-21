import React from "react";
import "./SearchList.css";
import { FaSearch } from "react-icons/fa";
function SearchList({ title, setsearchQuery }) {
  console.log(title);
  return (
    <>
      <div className="Conatiner_SearchList">
        {title.map((e, i) => (
          <p className="titleItem" key={i}>
            <FaSearch />
            {e}
            onClick ={() => setsearchQuery(e)}
          </p>
        ))}
      </div>
    </>
  );
}

export default SearchList;
