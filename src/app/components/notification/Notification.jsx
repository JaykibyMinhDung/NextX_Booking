// import React from 'react'
// import { FaArrowLeft } from "react-icons/fa";
import { FaTicketAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";

import style from "./notification.module.css";
import TitlePage from "../../../styles/titlepage/TitlePage";

const Notification = () => {
  return (
    <div className={style.notification__header}>
      <TitlePage title={"Thông báo"} />
      <main className="mt-16">
        <div>
          <p>Tất cả thông báo</p>
        </div>
        <div className={style.notification__main}>
          <div className={style.notification__logo}>
            <FaTicketAlt />
          </div>
          <div className={style.notification__text}>
            <p>Bạn đã có 1 book lịch</p>
            <p>Bạn đã book lịch thành công</p>
            <div className={style.notification__time}>
              <FaRegClock />
              <p style={{ color: "gray" }}>22/06/2022 21:17</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Notification;
