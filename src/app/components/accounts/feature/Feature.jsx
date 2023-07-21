import React, { useState } from "react";
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
import { isLogin } from "../../../../store/recoil/authenticate";

import "./feature.css";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import PopupNotification from "../../../../styles/modalnotification/ModalNotification";
import SignOutWeb from "./logout/logout";
import NewVersion from "./updateversion/NewVersion";
import Popup from "../../../../styles/modal/Modal";
import DeleteAccount from "./deleteaccount/DeleteAccount";
import ChangePassword from "./changepw/ChangePassword";
import { postDeleteAccount } from "../../../../api/api";
import { DeleteAccountUser } from "../../../../store/recoil/store";

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
    text: "Đăng xuất",
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
  // const parentData = props;
  const navigate = useNavigate();
  const [modalPopup, setmodalPopup] = useState(null);
  const [showPopUp, setShowPopUp] = useState(null);
  // const [ContentModal, setContentModal] = useState(null);
  const setStateGetOut = useSetRecoilState(isLogin);
  const getStateDeleteAccount = useRecoilValue(DeleteAccountUser);
  const closeModalHandle = () => {
    setmodalPopup(null);
  };
  const closePopupHandle = () => {
    setShowPopUp(null);
  };
  const LogOutHandle = () => {
    setStateGetOut(false);
    localStorage.removeItem("tenant_packs");
    localStorage.removeItem("me");
    setTimeout(() => {
      console.log("cancel");
      return navigate("/homelogin");
    }, 1000);
  };
  const featureClickHandle = (text) => {
    if (text === "Đăng xuất") {
      return setmodalPopup(text);
    }
    if (text === "Lịch sử checkin") {
      return navigate("/account/checkinpt");
    }
    if (text === "Lịch sử giao dịch") {
      return navigate("/account/transaction");
    }
    if (text === "Phiên bản") {
      return setmodalPopup(text);
    }
    if (text === "Đổi mật khẩu") {
      return setShowPopUp(text);
    }
    if (text === "Xóa tài khoản") {
      postDeleteAccount(getStateDeleteAccount);
      return setShowPopUp(text);
    }
  };
  return (
    <React.Fragment>
      {arrListFeature.map((e) => (
        <div key={e.id}>
          <div
            onClick={() => featureClickHandle(e.text)}
            className="feature__form"
          >
            <div className="flex items-center justify-between">
              {e.icon}
              <h3 style={{ marginLeft: e.isExpand ? "1rem" : "1rem" }}>
                {e.text}
              </h3>
            </div>
            {e.isExpand ? <FaAngleRight /> : <ButtonChange />}
          </div>
          <hr />
        </div>
      ))}
      {modalPopup && (
        <PopupNotification onClose={closeModalHandle}>
          {modalPopup === "Đăng xuất" ? (
            <SignOutWeb logout={LogOutHandle} onClose={closeModalHandle} />
          ) : (
            <NewVersion onClose={closeModalHandle} />
          )}
        </PopupNotification>
      )}
      {showPopUp && (
        <Popup onClose={closePopupHandle}>
          {showPopUp === "Đổi mật khẩu" ? (
            <ChangePassword logout={LogOutHandle} onClose={closeModalHandle} />
          ) : (
            <DeleteAccount onClose={closeModalHandle} />
          )}
        </Popup>
      )}
    </React.Fragment>
  );
};

export default Feature;
