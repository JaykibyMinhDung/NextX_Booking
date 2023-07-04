// import React from 'react'

import TitlePage from "../../../../styles/titlepage/TitlePage";
import "./membership.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import BarPage from "../../../../styles/barPage/BarPage";
import { useQuery } from "react-query";
import { GET_BRANCH } from "../../../../constants/queryKeys";
import { getBranch } from "../../../../api/api";
// import { useNavigate } from "react-router-dom";

const Membership = () => {
  // const navigate = useNavigate()
  // const navigateHandle = (branch) => {
  //   navigate(`/membership/${branch}`)
  // }
  const { data, isLoading } = useQuery([GET_BRANCH], () => getBranch());
  if (isLoading) {
    return <div>loading...</div>;
  }
  // console.log(data);
  return (
    <div>
      <TitlePage title={"Membership"} />
      <div className="membership__titlemain">
        <p style={{ textAlign: "center" }}>Chọn chi nhánh</p>
      </div>
      <BarPage
        // onNavigate={navigateHandle}
        coupon={data.data}
        icon={FaMapMarkerAlt}
        text={"Chi nhánh chính"}
      />
      <BarPage
        coupon={data.data}
        // onNavigate={navigateHandle}
        icon={FaMapMarkerAlt}
        text={"Chi nhánh 2"}
      />
    </div>
  );
};

export default Membership;
