import React from // , { useState }
  "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./feature.css";
import { useNavigate } from "react-router-dom";
import {
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

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
import { SwitchFaceId } from "../../../../store/recoil/store";

// import PopupNotification from "../../../../styles/modalnotification/ModalNotification";
// import SignOutWeb from "./logout/logout";
// import NewVersion from "./updateversion/NewVersion";
// import Popup from "../../../../styles/modal/Modal";
// import DeleteAccount from "./deleteaccount/DeleteAccount";
// import ChangePassword from "./changepw/ChangePassword";
// // import { postDeleteAccount } from "../../../../api/api";
// import { DeleteAccountUser } from "../../../../store/recoil/store";

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
  // {
  //   id: "3a",
  //   icon: <FaExpand />,
  //   text: "Face ID",
  //   isExpand: false,
  // },
  {
    id: "4a",
    icon: <FaLanguage />,
    text: "Night mode",
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
  // const [modalPopup, setmodalPopup] = useState(null);
  // const [showPopUp, setShowPopUp] = useState(null);
  // const [ContentModal, setContentModal] = useState(null);
  const setStateGetOut = useSetRecoilState(isLogin);
  const receiveFaceId = useRecoilValue(SwitchFaceId)
  // const getStateDeleteAccount = useRecoilValue(DeleteAccountUser);
  // const closeModalHandle = () => {
  //   // setmodalPopup(null);
  // };
  // const closePopupHandle = () => {
  //   // setShowPopUp(null);
  // };
  const LogOutHandle = () => {
    setStateGetOut(null);
    localStorage.removeItem("tenant_packs");
    localStorage.removeItem("me");
    setTimeout(() => {
      return navigate("/homelogin");
    }, 500);
  };
  const featureClickHandle = (text) => {
    if (text === "Đăng xuất") {
      return toast(() => (
        <div>
          <p>Bạn có chắc muốn đăng xuất?</p>
          <button className="text-red-500 mt-2" onClick={() => LogOutHandle()}>
            {" "}
            Đồng ý{" "}
          </button>
        </div>
      ));
    }

    if (receiveFaceId === "Night mode") {
      console.log(receiveFaceId)
      return toast.error(
        "Chức năng này hiện chỉ có bên app. Hãy tải app để sử dụng tối đa dịch vụ bên mình nhé!",
        {
          style: {
            border: "1px solid #713200",
            padding: "16px",
            color: "#713200",
          },
          iconTheme: {
            primary: "#713200",
            secondary: "#FFFAEE",
          },
        }
      );
    }
    if (text === "Lịch sử checkin") {
      return navigate("/account/checkinpt");
    }
    if (text === "Lịch sử giao dịch") {
      return navigate("/account/transaction");
    }
    if (text === "Phiên bản") {
      return toast.success("Hiện tại đây là phiên bản mới nhất!", {
        style: {
          border: "1px solid #713200",
          padding: "16px",
          color: "#713200",
        },
        iconTheme: {
          primary: "#713200",
          secondary: "#FFFAEE",
        },
      });
    }
    if (text === "Đổi mật khẩu") {
      return toast.error(
        "Hãy chuyển sang app hoặc web để đổi mật khẩu! Chức năng này hiện đang cập nhật ở zalo",
        {
          style: {
            border: "1px solid #713200",
            padding: "16px",
            color: "#713200",
          },
          iconTheme: {
            primary: "#713200",
            secondary: "#FFFAEE",
          },
        }
      );
    }
    if (text === "Xóa tài khoản") {
      // console.log("cancel");
      //   postDeleteAccount(getStateDeleteAccount)
      //     .then((results) => {
      //       toast.error(results.meta.message, {
      //         position: "bottom-right",
      //         autoClose: 5000,
      //         hideProgressBar: false,
      //         closeOnClick: true,
      //         pauseOnHover: true,
      //         draggable: true,
      //         progress: undefined,
      //         theme: "light",
      //       });
      //     })
      //     .catch((err) => console.log(err));
      //   return setShowPopUp(text);
      return toast.error(
        "Hãy chuyển sang app hoặc web để xóa tài khoản! Chức năng này hiện đang cập nhật",
        {
          style: {
            border: "1px solid #713200",
            padding: "16px",
            color: "#713200",
          },
          iconTheme: {
            primary: "#713200",
            secondary: "#FFFAEE",
          },
        }
      );
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
            {e.isExpand ? <FaAngleRight /> : <ButtonChange title={e.text} />}
          </div>
          <hr />
        </div>
      ))}
      {/* {modalPopup && (
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
      )} */}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </React.Fragment>
  );
};

export default Feature;
