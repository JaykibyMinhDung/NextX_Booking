import React from "react";
import TitlePage from "../../../styles/titlepage/TitlePage";
import moment from "moment/moment";
import { useRecoilValue } from "recoil";
import { getFormBookingPT } from "../../../store/recoil/store";
import { useLocation } from "react-router-dom";

const FormResgisterBooking = () => {
  const location = useLocation();

  const totalDataFormBooking = useRecoilValue(getFormBookingPT);
  const hours = moment().add(30, "minutes").format("MMMM Do YYYY, h:mm:ss");
  return (
    <div>
      <TitlePage
        title={"Đăng kí học tập"}
        icon={null}
        navigateBack={"/booking"}
      />
      <div className="mt-16">
        <div className="m-4">
          <p className="font-semibold">Chi nhánh</p>
        </div>
        <div className="m-4 card_payment">
          <div className="flex justify-between">
            <p>{totalDataFormBooking.branch}</p>
          </div>
        </div>
        <div className="m-4">
          <h2 className="font-semibold">Thời gian</h2>
        </div>
        <div className="m-4 card_payment">
          <div className="flex justify-between">
            <p>Ngày bắt đầu: </p>
            <p>{location.state}</p>
          </div>
          <div className="flex justify-between">
            <p>Ngày kết thúc: </p>
            <p>{hours}</p>
          </div>
          <div>
            <button className="w-20 p-2 mt-4 rounded-2xl bg-green-400 text-white ">
              30 Phút
            </button>
          </div>
        </div>
        <div className="m-4">
          <h2 className="font-semibold">PT</h2>
        </div>
        <div className="m-4 card_payment">
          <div className="flex justify-between">
            <p>{totalDataFormBooking.PT}</p>
          </div>
        </div>
        <div className="m-4">
          <h2 className="font-semibold">Dịch vụ đi kèm</h2>
        </div>
        <div className="m-4 card_payment">
          <div className="flex justify-between">
            <p>Dịch vụ đi kèm</p>
          </div>
        </div>
        <p className="m-4 font-semibold">Ghi chú</p>
        <div className="flex items-center m-4">
          <input
            className="w-full"
            type="text"
            max={200}
            placeholder="Ghi chú"
          />
        </div>
        <div className="flex items-center m-4">
          <i className="fa fa-check" aria-hidden="true"></i>
          <p className="ml-3">
            Tôi đã đọc, hiểu, chấp nhận và đồng ý với điều khoản và điều kiện
          </p>
        </div>
      </div>
      <button className="btn">Đăng kí</button>
    </div>
  );
};

export default FormResgisterBooking;
