// import React from 'react'
import "./history.css";
import avatarDefau from "../../../assets/avatar.jpg";

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
            <h2>{dataParent.data.employee_name}</h2>
            <p>{dataParent.data.member_name}</p>
            <p>{dataParent.data.member_tel}</p>
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
          <p style={{ color: "green", fontWeight: 700 }}>
            {dataParent.data.date_time}
          </p>
          <p style={{ color: "red", fontWeight: 700 }}>
            {dataParent.data.start_time} - {dataParent.data.end_time}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardHistory;
