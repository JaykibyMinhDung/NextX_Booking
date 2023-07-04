// import React from 'react'

import { useLocation } from "react-router-dom";
import TitlePage from "../../../../../styles/titlepage/TitlePage";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";

import "swiper/css";

const arrayHeader = [
  "Thông tin",
  "Lịch sử checkin",
  "Lịch sử gói tập",
  "Khung giờ tập",
];

const DetailContracts = () => {
  const [active, isActive] = useState(null);
  const location = useLocation();
  const informationHandle = () => {
    return location.state.data.find(
      (e) => e.prcode_text === location.state.prcode
    );
  };
  const activeHandle = (prop) => {
    return isActive(prop);
  };
  // const dataNavigate =
  informationHandle();
  return (
    <div>
      <TitlePage title={location.state.prcode} />
      <Swiper spaceBetween={10} slidesPerView={3}>
        {arrayHeader.map((e) => (
          <SwiperSlide key={e}>
            <div
              onClick={() => activeHandle(e)}
              className={active === e ? "border-b-blue-500 text-red-600" : ""}
              style={{ width: "8rem", textAlign: "center" }}
            >
              {e}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DetailContracts;
