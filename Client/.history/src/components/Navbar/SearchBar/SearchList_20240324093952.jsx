import React from "react";
import "./SearchList.css";
import { FaSearch } from "react-icons/fa";
function SearchList(props) {
  console.log(props);
  return (
    <>
      <div className="Conatiner_SearchList">
        {props.title.map((e, i) => {
          <p className="titleItem" key={i}>
            <FaSearch />
            {e}
          </p>;
        })}
      </div>
    </>
  );
}

export default SearchList;
