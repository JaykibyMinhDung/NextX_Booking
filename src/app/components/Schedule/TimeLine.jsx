// import React from "react";
import "./timeline.css";
import defaultImage from "../../../assets/avatar.jpg";
import { useState } from "react";
import Popup from "../../../styles/modal/Modal";
import OptionBookingPT from "./OptionBookingPT";
import { getBookingPTBranch } from "../../../api/api";
import { getBookingPTContract } from "../../../api/api";
import { getBookingPTListPT } from "../../../api/api";
import { useQuery } from "react-query";
import { useRecoilState, useRecoilValue } from "recoil";
import { DataPopupBookingPT } from "../../../store/recoil/store";
import { getBookingPTScheduleHours } from "../../../api/api";
import {
  DataPopupBookingBranch,
  DataPopupBookingContract,
  DataPopupBookingPersolnaltrainer,
} from "../../../store/recoil/store";

const TimeLine = (props) => {
  const dataParent = props;
  const [showPopup, setShowPopup] = useState(false);
  const [chooseOptionBookingPT, setChooseOptionBookingPT] =
    useRecoilState(DataPopupBookingPT);

  const takeValueBookingBranch = useRecoilValue(DataPopupBookingBranch);
  const takeValueBookingContract = useRecoilValue(DataPopupBookingContract);
  const takeValueBookingPersonaltrainer = useRecoilValue(
    DataPopupBookingPersolnaltrainer
  );
  // console.log(takeValueBookingBranch);
  const month = Number(new Date().getMonth()) + 1;
  const today =
    new Date().getDate() + "-" + month + "-" + new Date().getFullYear();
  const postDate =
    new Date().getFullYear() + "-" + month + "-" + new Date().getDate();
  const data1 = useQuery(["test1"], () => getBookingPTBranch());
  // const data1 = getBookingPTBranch();
  const data2 = useQuery(["test2"], () => getBookingPTContract());
  const data3 = useQuery(["test3"], () => getBookingPTListPT());
  const data4 = useQuery(["test4"], () =>
    getBookingPTScheduleHours(26359, 2518, postDate)
  );
  const showModalHandle = (ensign) => {
    document.body.style.overflow = "hidden";
    dataParent.setForm({
      branch: takeValueBookingBranch ? takeValueBookingBranch : null,
      contract: takeValueBookingContract ? takeValueBookingContract : null,
      PT: takeValueBookingPersonaltrainer
        ? takeValueBookingPersonaltrainer
        : null,
    });
    setShowPopup(true);
    if (ensign === "branch") {
      return setChooseOptionBookingPT(data1.data);
    }
    if (ensign === "contract") {
      return setChooseOptionBookingPT(data2.data);
    }
    if (ensign === "PersonalTrainer") {
      return setChooseOptionBookingPT(data3.data);
    }
    if (ensign === "Schedule") {
      return setChooseOptionBookingPT(data4.data);
    }
  };
  const hiddenModalHandle = () => {
    document.body.style.overflow = "auto";
    return setShowPopup(false);
  };
  return (
    <div className="timeline mt-16">
      <div className="containers left">
        <div className="content">
          <h2>1. Chọn chi nhánh</h2>
          <div
            onClick={() => showModalHandle("branch")}
            className="flex items-center whitespace-nowrap w-full mt-4"
          >
            <img
              style={{ color: "currentcolor", borderRadius: "50%" }}
              src={defaultImage}
              width={40}
              alt=""
            />
            <p className="ml-4">
              {takeValueBookingBranch ? takeValueBookingBranch : "(Trống)"}
            </p>
          </div>
        </div>
      </div>
      <div className="containers right">
        <div className="content">
          <h2>2.Chọn hợp đồng</h2>
          <div
            onClick={() => showModalHandle("contract")}
            className="flex items-center whitespace-nowrap w-full  mt-4"
          >
            <img
              style={{ color: "currentcolor", borderRadius: "50%" }}
              src={defaultImage}
              width={40}
              alt=""
            />
            <p className="ml-4">
              {takeValueBookingContract ? takeValueBookingContract : "(Trống)"}
            </p>
          </div>
        </div>
      </div>
      <div className="containers left">
        <div className="content">
          <h2>3. Chọn PT</h2>
          <div
            onClick={() => showModalHandle("PersonalTrainer")}
            className="flex items-center whitespace-nowrap w-full  mt-4"
          >
            <img
              style={{ color: "currentcolor", borderRadius: "50%" }}
              src={defaultImage}
              width={40}
              alt=""
            />
            <p className="ml-4">
              {takeValueBookingPersonaltrainer
                ? takeValueBookingPersonaltrainer
                : "(Trống)"}
            </p>
          </div>
        </div>
      </div>
      <div className="containers right">
        <div onClick={() => showModalHandle("Schedule")} className="content">
          <h2>4. Chọn lịch tập PT</h2>
          <div className="flex items-center whitespace-nowrap w-full  mt-4">
            <em className="text-base font-semibold text-yellow-100">{today}</em>
          </div>
        </div>
      </div>
      {showPopup && (
        <Popup onClose={hiddenModalHandle}>
          <OptionBookingPT
            chooseOption={chooseOptionBookingPT}
            onClose={hiddenModalHandle}
          />
        </Popup>
      )}
    </div>
  );
};

export default TimeLine;

{
  /* <div className="containers left">
  <div className="content">
    <h2>2011</h2>
    <p>
      Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
      admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis
      iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto
      primis ea eam.
    </p>
  </div>
</div>
<div className="containers right">
  <div className="content">
    <h2>2007</h2>
    <p>
      Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
      admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis
      iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto
      primis ea eam.
    </p>
  </div>
</div> */
}
