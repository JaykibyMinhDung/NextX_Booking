import React from "react";
import defaultImg from "../../../../assets/avatar.jpg";

const Setting = () => {
  return (
    <React.Fragment>
      <div className="flex items-center">
        <img style={{ width: 100 }} src={defaultImg} alt="" />
        <div>
          <p className="font-bold">name: Vũ Tuấn Anh</p>
          <p>email: bvụdsbvdsjkvjk</p>
          <p>0902243822</p>
        </div>
      </div>
      <div className="m-4 font-semibold">Tài khoản</div>
    </React.Fragment>
  );
};

export default Setting;
