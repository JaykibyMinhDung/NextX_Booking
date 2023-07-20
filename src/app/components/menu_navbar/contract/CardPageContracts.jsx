// import React from 'react'
import style from "./contract.module.css";
// import { FaRegCalendar } from "react-icons/fa";
import avatarDefau from "../../../../assets/avatar.jpg";

const CardPageContracts = (props) => {
  const dataParent = props;
  const createDate = new Date(dataParent.created_at);
  const endDate = new Date(dataParent.ended_at);

  const create_date =
    createDate.getDay() +
    "-" +
    createDate.getMonth() +
    "-" +
    createDate.getFullYear();
  const end_date =
    endDate.getDay() + "-" + endDate.getMonth() + "-" + endDate.getFullYear();
  return (
    <div onClick={dataParent.onClick} className={style.card__frame}>
      <div>
        <img
          src={dataParent.image ? dataParent.image : avatarDefau}
          width={60}
          alt="error"
        />
      </div>
      <div style={{ width: "80%" }}>
        <div className={style.card__mainInfor}>
          <div>
            <h2>{dataParent.subject}</h2>
            <p>{dataParent.name}</p>
            <p>{dataParent.branch}</p>
            <p>{dataParent.dayTrainer}</p>
          </div>
          <div style={{ textAlign: "center", marginRight: "0.5rem" }}>
            <p style={{ color: "blue", fontWeight: 550 }}>
              {dataParent.price.toLocaleString()}đ
            </p>
            <button className={style.btn__contracts}>
              {dataParent.expire}
            </button>
          </div>
        </div>
        <hr />
        <div className={style.card__footer}>
          <p style={{ color: "green", fontWeight: 700 }}>3{create_date}</p>
          <p style={{ color: "red", fontWeight: 700 }}>3{end_date}</p>
        </div>
      </div>
    </div>
  );
};

export default CardPageContracts;
