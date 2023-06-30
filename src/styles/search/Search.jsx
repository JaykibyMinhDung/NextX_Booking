// import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";

import "./search.css";
import { useNavigate } from "react-router-dom";

const Search = (props) => {
  const dataParent = props;
  const navigate = useNavigate();
  const navigateHandle = () => {
    navigate("/branch");
  };
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
      {dataParent.location && (
        <div onClick={navigateHandle} className="location__frame">
          <div className="location">
            <i className="fas fa-location    "></i>
            <p>Chọn chi nhánh</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
