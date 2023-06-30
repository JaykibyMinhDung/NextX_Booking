// import React from 'react'

import TitlePage from "../../../../styles/titlepage/TitlePage";
import "./membership.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import BarPage from "../../../../styles/barPage/BarPage";

const Membership = () => {
  return (
    <div>
      <TitlePage title={"Membership"} />
      <div className="membership__titlemain">
        <p style={{ textAlign: "center" }}>Chọn chi nhánh</p>
      </div>
      <BarPage icon={FaMapMarkerAlt} text={"Chi nhánh chính"} />
      <BarPage icon={FaMapMarkerAlt} text={"Chi nhánh 2"} />
    </div>
  );
};

export default Membership;
