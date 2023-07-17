import React from "react";
import defaultImg from "../../../../assets/avatar.jpg";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaIdCard } from "react-icons/fa";

const Setting = () => {
  const data = JSON.parse(localStorage.getItem("me"));
  const User = data;
  return (
    <React.Fragment>
      <div className="flex items-center mt-16 leading-7">
        <img
          style={{ width: 100 }}
          src={User.picture ? User.picture : defaultImg}
          alt=""
        />
        <div>
          <div className="flex items-center">
            <FaIdCard />
            <p className="font-bold ml-4">{User.name}</p>
          </div>
          <div className="flex items-center">
            <FaEnvelope />
            <p className="ml-4">
              {User.email ? User.email : <em>Chưa có email</em>}
            </p>
          </div>
          <div className="flex items-center">
            <FaPhoneAlt />
            <p className="ml-4">
              {User.tel ? User.tel : <em>Chưa có điện thoại</em>}
            </p>
          </div>
        </div>
      </div>
      <div className="m-4 font-semibold">Tài khoản</div>
    </React.Fragment>
  );
};

export default Setting;
