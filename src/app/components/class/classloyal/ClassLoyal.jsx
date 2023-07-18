// import React from "react";
import { FaExclamationCircle } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import "./classloyal.css";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { BookingClassPayment } from "../../../../store/recoil/store";

const ClassLoyal = (props) => {
  const navigate = useNavigate();
  const dataParents = props;
  const BookingClass = useSetRecoilState(BookingClassPayment);
  const PaymentHandle = () => {
    BookingClass(dataParents);
    navigate("/membership/nhanhchinh", { state: "Yoga" });
  };
  const hours =
    new Date(dataParents.endHour).getHours() -
    new Date(dataParents.startHour).getHours();
  return (
    <div className="header__frame">
      <div className="w-2/6">
        <p>{dataParents.hour} AM</p>
        <p>{hours} hours</p>
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
            onClick={() => PaymentHandle()}
            className="flex justify-between items-center "
          >
            <p className="flex justify-center items-center w-15vw h-15vw rounded-full text-black border-green-800 border-2">
              {dataParents.numbook}/{dataParents.numTotal}
            </p>
            <FaPlay />
          </div>
          <div className="header__registration">
            <FaExclamationCircle />
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default ClassLoyal;
