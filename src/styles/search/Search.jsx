// import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";

import "./search.css";

const Search = () => {
  return (
    <div className="search__header">
      <div className="search__header--input">
        <FaSearch />
        <input type="text" placeholder="Tìm kiếm hợp đồng" />
        <FaTimes />
      </div>
      <div className="search__main">
        <HiAdjustmentsHorizontal />
      </div>
    </div>
  );
};

export default Search;
