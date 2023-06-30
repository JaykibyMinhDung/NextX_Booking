// import React from "react";
import "./banner.css";
import QRcode from "../../../../../assets/QRcode-test.png";

const Banner = (props) => {
  const contract = props;
  const data = contract.inforContract;
  const dateGYM = new Date(data.order_date);
  return (
    <div className="banner__background">
      <div className="banner__align--QRcode">
        <div style={{ width: "100%" }}>
          <div className="banner__title--calender">
            <i className="fa fa-calendar" aria-hidden="true"></i>
            <div>
              <p>{data.tableprices_name}</p>
            </div>
          </div>
        </div>
        <div style={{ width: "30%" }}>
          <img className="QR__code--styled" src={QRcode} alt="" />
        </div>
      </div>
      <div className="banner__information--staff">
        <div className="banner__card--infor">
          <p>{data.member_full_name.toUpperCase()}</p>
          <p>{data.member_tel}</p>
        </div>
        <div>
          <p>
            EXP:{" "}
            {dateGYM.getDate() +
              "/ " +
              dateGYM.getMonth() +
              "/ " +
              dateGYM.getFullYear()}
          </p>
          <p>{data.rehearsal_status}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
