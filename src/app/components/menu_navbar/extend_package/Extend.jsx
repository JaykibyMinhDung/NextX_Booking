import React from "react";
import TitlePage from "../../../../styles/titlepage/TitlePage";
import Search from "../../../../styles/search/Search";
import { FaSort } from "react-icons/fa";
import "./extend.css";

const Extend = () => {
  return (
    <React.Fragment>
      <TitlePage title={"Gia hạn"} icon={<FaSort />} />
      <Search />
      <div style={{ margin: "1rem" }}>
        <div className="extend__header">
          <p>{0} hợp đồng</p>
          <p>đã trả: {0}</p>
        </div>
        <img
          src="https://www.codewithrandom.com/wp-content/uploads/2022/08/Copy-of-Copy-of-Copy-of-SVG-in-HTML-10.png"
          alt=""
        />
      </div>
    </React.Fragment>
  );
};

export default Extend;
