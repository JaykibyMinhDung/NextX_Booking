// import React from 'react'

import TitlePage from "../../../styles/titlepage/TitlePage";
import imageCash from "../../../assets/21.jpg";

const Payment = () => {
  return (
    <div className="mt-16">
      <TitlePage title={"Thanh toán"} icon={null} />
      <div>
        <p>Đơn thanh toán</p>
      </div>
      <div>
        <div className="flex justify-between">
          <p>Gói: Gym 1T</p>
          <p> 500.000đ</p>
        </div>
      </div>
      <div>
        <div className="flex justify-between">
          <p>Tổng tiền: </p>
          <p>500.000đ</p>
        </div>
      </div>
      <p>Phương thức thanh toán</p>
      <div className="flex items-center">
        <img src={imageCash} width={50} alt="" />
        <p>Thanh toán tại quầy</p>
      </div>
      <div className="flex items-center">
        <i className="fa fa-check" aria-hidden="true"></i>
        <p>Tôi đã đọc, hiểu, chấp nhận và đồng ý với điều khoản và điều kiện</p>
      </div>
    </div>
  );
};

export default Payment;
