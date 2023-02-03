import React from "react";
import "./search-box.styles.css";

function SearchBox({className , onChangeHandler , placeholder}) {
  return (
    <div className="search--container">
      <input
        type="search"
        placeholder={placeholder}
        className={className}
        onChange={onChangeHandler}
      />
    </div>
  );
}

export default SearchBox;
