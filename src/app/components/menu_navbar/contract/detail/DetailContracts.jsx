// import React from 'react'
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import avatarImage from "../../../../../assets/avatar.jpg";
import TitlePage from "../../../../../styles/titlepage/TitlePage";
import Checkin from "../checkin/Checkin";
import TimeTables from "../timetable/TimeTables";
import Logs from "../logs/Logs";
import { FaUserAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

import "swiper/css";

const arrayHeader = [
  "Thông tin",
  "Lịch sử checkin",
  "Lịch sử gói tập",
  "Khung giờ tập",
];

const DetailContracts = () => {
  const [active, isActive] = useState("Thông tin");
  const location = useLocation();
  const data = location.state.data.find(
    (e) => e.prcode_text === location.state.prcode
  );
  const activeHandle = (prop) => {
    return isActive(prop);
  };
  // console.log(data);
  // const data = location.state.data;
  const backgroundInforClient = () => {
    return (
      <>
        <div key={data.order_id} className="flex justify-between items-center">
          <div className="w-2/5">
            <img
              className="w-full"
              src={!data.member_avatar ? avatarImage : data.member_avatar}
              alt=""
            />
          </div>
          <div className="w-4/5 mt-4">
            <div className="flex items-center mb-1 mt-1">
              <FaUserAlt />
              <p className="ml-2">{data.member_full_name}</p>
            </div>
            <div className="flex items-center mb-1 mt-1">
              <FaPhoneAlt />
              <p className="ml-2">
                {data.member_tel ? (
                  data.member_tel
                ) : (
                  <em className="text-red-500">Chưa có điện thoại</em>
                )}
              </p>
            </div>
            <div className="flex items-center mb-1 mt-1">
              <FaMapMarkerAlt />
              <p className="ml-2">Phường Nghĩa Đô, Cầu Giấy, Hà Nội</p>
            </div>
          </div>
        </div>

        <div className="flex justify-between m-4">
          <p>Ngày hợp đồng: </p>
          <p>{data.created_at}</p>
        </div>
        <hr />
        <div className="flex justify-between m-4">
          <p>Trạng thái: </p>
          <p>{data.order_active}</p>
        </div>
        <hr />
        <div className="flex justify-between m-4">
          <p>Số buổi đã tập: </p>
          <p>{data.rehearsal_status}</p>
        </div>
        <hr />
        <div className="flex justify-between m-4">
          <p>Số tháng: </p>
          <p>{data.number_month}</p>
        </div>
        <hr />
        <div className="flex justify-between m-4">
          <p>Số ngày: </p>
          <p>{data.number_day}</p>
        </div>
        <hr />
        <div className="flex justify-between m-4">
          <p>Số buổi: </p>
          <p>{data.number_rehearsal}</p>
        </div>
        <hr />
        <div className="flex justify-between m-4">
          <p>Số tháng KM: </p>
          <p>10-06-2023</p>
        </div>
        <hr />
        <div className="flex justify-between m-4">
          <p>Số ngày KM: </p>
          <p>10-06-2023</p>
        </div>
        <hr />
        <div className="flex justify-between m-4">
          <p>Số buổi KM: </p>
          <p>10-06-2023</p>
        </div>
        <hr />
        <div className="flex justify-between m-4">
          <p>Dịch vụ: </p>
          <p>{data.tableprices_name}</p>
        </div>
        <hr />
        <div className="flex justify-between m-4">
          <p>Ngày bắt đầu: </p>
          <p>{data.begin_date}</p>
        </div>
        <hr />
        <div className="flex justify-between m-4">
          <p>Ngày kết thúc: </p>
          <p>{data.end_date}</p>
        </div>
        <hr />
        <div className="flex justify-between m-4">
          <p>Thanh toán: </p>
          <p>{data.total_order.toLocaleString()}</p>
        </div>
        <hr />
        <div className="flex justify-between m-4">
          <p>Giá trị hợp đồng: </p>
          <p>{data.total_money_payment.toLocaleString()}</p>
        </div>
        <hr />
        <div className="flex justify-between m-4">
          <p>Đã thanh toán: </p>
          <p>{data.total_money_payment}</p>
        </div>
        <hr />
        <div className="flex justify-between m-4">
          <p>Còn nợ: </p>
          <p>{data.debit}</p>
        </div>
        <hr />
        <div className="flex justify-between m-4">
          <p>Nhân viên sale: </p>
          <p>{data.sale.length}</p>
        </div>
        <hr />
        <div className="flex justify-between m-4">
          <p>Nhân viên PT: </p>
          <p>{data.pts.length}</p>
        </div>
        <hr />
      </>
    );
  };
  const navigateSlide = () => {
    if (active === "Thông tin") {
      return backgroundInforClient();
    }
    if (active === "Lịch sử checkin") {
      // console.log(data.order_id, "checkin");
      return <Checkin idCheckin={data.order_id} />;
    }
    if (active === "Lịch sử gói tập") {
      return <Logs idLog={data.order_id} />;
    }
    if (active === "Khung giờ tập") {
      return <TimeTables id={data.order_id} />;
    }
  };

  return (
    <div>
      <TitlePage title={location.state.prcode} navigateBack={"/contract"} />
      <Swiper spaceBetween={10} slidesPerView={3}>
        {arrayHeader.map((e) => (
          <SwiperSlide key={e}>
            <div
              onClick={() => activeHandle(e)}
              className={
                active === e
                  ? "border-2 border-white border-b-indigo-500 transition-transform ease-in-out delay-500 pb-2"
                  : ""
              }
              style={{
                width: "8rem",
                textAlign: "center",
                margin: "0.1rem",
                marginTop: "3.8rem",
              }}
            >
              {e}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {data && navigateSlide()}
    </div>
  );
};

export default DetailContracts;
