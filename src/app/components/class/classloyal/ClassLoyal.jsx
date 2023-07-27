// import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaExclamationCircle } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import "./classloyal.css";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { BookingClassPayment } from "../../../../store/recoil/store";
// import { useState } from "react";
// import PopupNotification from "../../../../styles/modalnotification/ModalNotification";
import { deleteBookingYoga } from "../../../../api/api";

const ClassLoyal = (props) => {
  const navigate = useNavigate();
  const dataParents = props;
  const BookingClass = useSetRecoilState(BookingClassPayment);
  // const [displayPopup, setDisplayPopup] = useState(null);
  // const deleteScheduleYoga = () => {
  // console.log(dataParents);
  //   return ;
  // };
  const PaymentHandle = (enabled, booked) => {
    if (!enabled && !booked) {
      BookingClass(dataParents);
      navigate("/membership/nhanhchinh");
    }
    if (enabled && !booked) {
      // BookingClass(dataParents);
      navigate("/class/bookingclass", { state: dataParents });
    }
    if (booked && enabled) {
      toast(() => (
        <div>
          <p>Bạn có chắc muốn hủy lịch đăng kí?</p>
          <button
            className="text-red-500 mt-2"
            onClick={() => deleteBookingYoga(dataParents.id)}
          >
            {" "}
            Đồng ý{" "}
          </button>
        </div>
      ));
    }
  };
  // const onClosePopNotification = () => {
  //   return setDisplayPopup(null);
  // };

  const hours =
    new Date(dataParents.endHour).getHours() -
    new Date(dataParents.startHour).getHours();
  return (
    <div className="header__frame">
      <ToastContainer
        position="top-right"
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
      <div className="w-2/6">
        <p>{dataParents.hour} AM</p>
        <p>{hours} hours</p>
        {dataParents.numbook === 1 && dataParents.enabled === 1 ? (
          <button className="bg-[#3b9254ff] text-white rounded-xl px-3 my-1">
            Đã đặt
          </button>
        ) : (
          ""
        )}
      </div>
      <div className="flex justify-between items-center w-full mx-4">
        <div style={{ width: "90%" }}>
          <h2 className="text-base font-semibold">{dataParents.category}</h2>
          <div className="text-sm">
            <p>{dataParents.nameclass}</p>
            <p>{dataParents.namePT}</p>
            <p>{dataParents.branch}</p>
          </div>
        </div>
        <div
          className="relative w-2/4"
          // style={{ textAlign: "center", marginRight: "0.5rem" }}
        >
          <div
            onClick={() =>
              PaymentHandle(dataParents.enabled, dataParents?.numbook)
            }
            className="flex justify-between items-center "
          >
            <p className="flex justify-center items-center w-15vw h-15vw rounded-full text-black border-green-800 border-2">
              {dataParents.numbook}/{dataParents.numTotal}
            </p>
            <FaPlay />
          </div>
          <div className="header__registration">
            <div>
              {dataParents.enabled === 0 ? <FaExclamationCircle /> : ""}
            </div>
          </div>
        </div>
      </div>
      <hr />
      {/* {displayPopup && (
        <PopupNotification onClose={onClosePopNotification}>
          <div className="text-center text-xl">
            <h2 className="font-bold mb-2">Thông báo</h2>
            <p>Bạn có chắc muốn hủy lịch đăng kí?</p>
          </div>
          <div
            style={{ marginTop: "50px", marginLeft: "10px" }}
            className="w-full text-lg flex items-center justify-evenly"
          >
            <button onClick={onClosePopNotification} className="text-blue-500">
              Hủy
            </button>
            <button
              onClick={() => deleteScheduleYoga(dataParents.id)}
              className="text-red-500"
            >
              Đồng ý
            </button>
          </div>
        </PopupNotification>
      )} */}
    </div>
  );
};

export default ClassLoyal;
