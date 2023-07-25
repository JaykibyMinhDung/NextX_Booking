import React from "react";

import TitlePage from "../../../../styles/titlepage/TitlePage";
import { useLocation } from "react-router-dom";
import { deleteBookingPT } from "../../../../api/api";

const DetailHistory = () => {
  const location = useLocation();
  const data = location.state;
  const DeleteBookinggymHandle = () => {
    return deleteBookingPT(data.id);
  };
  return (
    <React.Fragment>
      <TitlePage title={"Chi tiết lịch tập"} navigateBack={"/log"} />
      <div className="mx-3 mt-16">
        <div className="flex items-center justify-between my-4">
          <p>PT:</p>
          <p>{data.employee_name}</p>
        </div>
        <hr />
        <div className="flex items-center justify-between my-4">
          <p>Hội viên:</p>
          <p className="text-blue-600">{data.member_name}</p>
        </div>
        <hr />
        <div className="flex items-center justify-between my-4">
          <p>Gói tập:</p>
          <p>{}</p>
        </div>
        <hr />
        <div className="flex items-center justify-between my-4">
          <p>Ngày bắt đầu:</p>
          <p>
            {data.start_time} : {data.date_time}
          </p>
        </div>
        <hr />
        <div className="flex items-center justify-between my-4">
          <p>Ngày kết thúc:</p>
          <p>
            {data.end_time} : {data.date_time}
          </p>
        </div>
        <hr />
        <div className="flex items-center justify-between my-4">
          <p>Trạng thái:</p>
          <p>{data.status_code}</p>
        </div>
        <hr />
        <div className="flex items-center justify-between my-4">
          <p>Lý do hủy:</p>
          <p></p>
        </div>
        <hr />
        <div className="flex items-center justify-between my-4">
          <p>Ghi chú:</p>
          <p></p>
        </div>
        <hr />
        <div className="text-center">
          <button
            onClick={DeleteBookinggymHandle}
            className="bg-red-500 rounded-2xl text-white py-1 mt-3 shadow-3xl w-2/4"
          >
            Hủy lịch
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DetailHistory;
