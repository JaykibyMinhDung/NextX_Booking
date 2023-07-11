import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { FaExpand } from "react-icons/fa";
import { FaLanguage } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { FaHourglassHalf } from "react-icons/fa";
import ButtonChange from "../../../../styles/ButtonChange/ButtonChange";

import "./feature.css";

const arrListFeature = [
  {
    id: "1a",
    icon: <FaInfoCircle />,
    text: "Lịch sử checkin",
    isExpand: true,
  },
  {
    id: "2a",
    icon: <FaHistory />,
    text: "Lịch sử giao dịch",
    isExpand: true,
  },
  {
    id: "3a",
    icon: <FaExpand />,
    text: "Face ID",
    isExpand: false,
  },
  {
    id: "4a",
    icon: <FaLanguage />,
    text: "Ngôn ngữ",
    isExpand: false,
  },
  {
    id: "5a",
    icon: <FaLock />,
    text: "Đổi mật khẩu",
    isExpand: true,
  },
  {
    id: "6a",
    icon: <FaTrashAlt />,
    text: "Xóa tài khoản",
    isExpand: true,
  },
  {
    id: "7a",
    icon: <FaSignOutAlt />,
    text: "Lịch sử checkin",
    isExpand: true,
  },
  {
    id: "8a",
    icon: <FaHourglassHalf />,
    text: "Phiên bản",
    isExpand: true,
  },
];

const Feature = () => {
  return (
    <React.Fragment>
      {arrListFeature.map((e) => (
        <div key={e.id}>
          <div className="feature__form">
            {e.icon}
            <h3 style={{ marginLeft: e.isExpand ? "" : "2rem" }}>{e.text}</h3>
            {e.isExpand ? <FaAngleRight /> : <ButtonChange />}
          </div>
          <hr />
        </div>
      ))}
    </React.Fragment>
  );
};

export default Feature;
