import React from "react";
import defaultImg from "../../../../assets/avatar.jpg";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaIdCard } from "react-icons/fa";

const Setting = () => {
  return (
    <React.Fragment>
      <div className="flex items-center leading-7">
        <img style={{ width: 100 }} src={defaultImg} alt="" />
        <div>
          <div className="flex items-center">
            <FaIdCard />
            <p className="font-bold ml-4">Vũ Tuấn Anh</p>
          </div>
          <div className="flex items-center">
            <FaEnvelope />
            <p className="ml-4">bvụdsbvdsjkvjk</p>
          </div>
          <div className="flex items-center">
            <FaPhoneAlt />
            <p className="ml-4">0902243822</p>
          </div>
        </div>
      </div>
      <div className="m-4 font-semibold">Tài khoản</div>
    </React.Fragment>
  );
};

export default Setting;
