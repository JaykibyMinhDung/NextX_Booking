// import React from 'react'
import "./history.css";
import avatarDefau from "../../../assets/avatar.jpg";
import { FaIdCard, FaPhoneAlt, FaCalendarCheck, FaClock } from "react-icons/fa";

const CardHistory = (props) => {
  const dataParent = props;
  return (
    <div onClick={dataParent.data.onClick} className={"card__framehis"}>
      <div>
        <img
          className="img_history"
          src={
            dataParent.data.employee_avatar
              ? dataParent.data.employee_avatar
              : avatarDefau
          }
          width={60}
          alt="error"
        />
      </div>
      <div style={{ width: "80%" }}>
        <div className={"card__mainInfor"}>
          <div style={{ marginLeft: "1rem" }}>
            {/* <h2>{dataParent.data.subject}</h2> */}
            <h2 className="font-bold">PT: {dataParent.data.employee_name}</h2>
            <p className="flex items-center">
              <FaIdCard />{" "}
              <span className="ml-2">{dataParent.data.member_name}</span>
            </p>
            <p className="flex items-center">
              <FaPhoneAlt />
              <span className="ml-2">{dataParent.data.member_tel}</span>
            </p>
          </div>
          <div style={{ textAlign: "center", marginRight: "0.5rem" }}>
            <p style={{ color: "blue", fontWeight: 550 }}>
              {/* {dataParent.data.price}đ */}
            </p>

            <button
              className={"btn__contracts"}
              style={{
                backgroundColor:
                  dataParent.data.status_description === "Quá giờ"
                    ? "green"
                    : dataParent.data.status_description === "Đã hủy"
                    ? "red"
                    : "rgb(0, 153, 255)",
              }}
            >
              {dataParent.data.status_description}
            </button>
          </div>
        </div>
        <hr />
        <div
          className={"card__footer--history text-sm"}
          style={{ marginLeft: "1rem" }}
        >
          <div className="flex items-center mt-1">
            <FaCalendarCheck className="mb-1" />
            <p className="ml-2" style={{ color: "green", fontWeight: 700 }}>
              {dataParent.data.date_time}
            </p>
          </div>
          <div className="flex items-center mt-1">
            <FaClock className="" />
            <p className="ml-2" style={{ color: "red", fontWeight: 700 }}>
              {dataParent.data.start_time} - {dataParent.data.end_time}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardHistory;
