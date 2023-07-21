// import React from "react";
import "./timeline.css";
import defaultImage from "../../../assets/avatar.jpg";
import diretory from "../../../assets/bullets.png";
import locationDefault from "../../../assets/location-pin.png";
import canlenderr from "../../../assets/calendar.png";
import { useEffect, useState } from "react";
import Popup from "../../../styles/modal/Modal";
import OptionBookingPT from "./OptionBookingPT";
import { getBookingPTBranch } from "../../../api/api";
import { getBookingPTContract } from "../../../api/api";
import { getBookingPTListPT } from "../../../api/api";
import { useMutation, useQuery } from "react-query";
import { useRecoilState, useRecoilValue } from "recoil";
import { DataPopupBookingPT } from "../../../store/recoil/store";
import { getBookingPTScheduleHours } from "../../../api/api";
import {
  DataPopupBookingBranch,
  DataPopupBookingContract,
  DataPopupBookingPersolnaltrainer,
  getIdPT,
  getIdBranch,
} from "../../../store/recoil/store";

const TimeLine = (props) => {
  const dataParent = props;
  const [showPopup, setShowPopup] = useState(false);
  const [takeDataCanlendar, settakeDataCanlendar] = useState([]);
  const [chooseOptionBookingPT, setChooseOptionBookingPT] =
    useRecoilState(DataPopupBookingPT);

  const takeValueBookingBranch = useRecoilValue(DataPopupBookingBranch);
  const takeValueBookingContract = useRecoilValue(DataPopupBookingContract);
  const takeValueBookingPersonaltrainer = useRecoilValue(
    DataPopupBookingPersolnaltrainer
  );

  const takeValueFullDataBranch = useRecoilValue(getIdBranch);
  const takeValueFullDataPT = useRecoilValue(getIdPT);
  // console.log(takeValueBookingPersonaltrainer);
  const month = Number(new Date().getMonth()) + 1;
  const today =
    new Date().getDate() + "-" + month + "-" + new Date().getFullYear();
  const postDate =
    new Date().getFullYear() + "-" + month + "-" + new Date().getDate();
  // const postChangeDate =
  //   new Date().getFullYear() + "-" + month + "-" + new Date().getDate();
  const data1 = useQuery(["test1"], () => getBookingPTBranch());
  // const data1 = getBookingPTBranch();
  const data2 = useQuery(["test2"], () => getBookingPTContract());
  const data3 = useQuery(["test3"], () => getBookingPTListPT());

  // const data4 = useMutation(["test4"], () =>
  //   getBookingPTScheduleHours(
  //     takeValueFullDataBranch.id,
  //     takeValueFullDataPT.employee_id,
  //     postDate
  //   )
  // );
  const data4 = useMutation({
    mutationFn: (newSchedule) => getBookingPTScheduleHours(newSchedule),
    onSuccess: async (data2) => {
      settakeDataCanlendar(data2);
      dataParent.setForm(data2);
    },
    onError: (err) => {
      console.log(err);
    },
  });
  const showModalHandle = (ensign) => {
    document.body.style.overflow = "hidden";
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
      return setChooseOptionBookingPT(takeDataCanlendar);
    }
  };
  const hiddenModalHandle = () => {
    document.body.style.overflow = "auto";

    return setShowPopup(false);
  };
  useEffect(() => {
    data4.mutate({
      branch_id: takeValueFullDataBranch.id,
      employee_id: takeValueFullDataPT.employee_id,
      date_time: postDate,
    });
    // dataParent.setForm({
    //   branch: takeValueBookingBranch ? takeValueBookingBranch : null,
    //   contract: takeValueBookingContract ? takeValueBookingContract : null,
    //   PersonalTrainers: takeValueBookingPersonaltrainer
    //     ? takeValueBookingPersonaltrainer
    //     : null,
    // });
  }, [
    takeValueBookingBranch,
    takeValueBookingContract,
    takeValueBookingPersonaltrainer,
    // data4,
    postDate,
    takeValueFullDataBranch,
    takeValueFullDataPT,
  ]);

  return (
    <div className="timeline mt-16">
      <div className="containers left">
        <div className="content">
          <h2>1. Chọn chi nhánh</h2>
          <div
            onClick={() => showModalHandle("branch")}
            className="flex items-center whitespace-nowrap w-full mt-2"
          >
            <div className="text-current flex items-center justify-center rounded-full bg-white w-9 h-9">
              <img src={locationDefault} width={22} alt="" />
            </div>

            <p className="ml-4">
              {takeValueBookingBranch ? takeValueBookingBranch : "(Trống)"}
            </p>
          </div>
        </div>
      </div>
      <div className="containers right">
        <div className="content">
          <h2>2. Chọn hợp đồng</h2>
          <div
            onClick={() => showModalHandle("contract")}
            className="flex items-center whitespace-nowrap w-full mt-2 "
          >
            <div className="text-current flex items-center justify-center rounded-full bg-white w-9 h-9">
              <img src={diretory} width={20} alt="" />
            </div>
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
            className="flex items-center whitespace-nowrap w-full mt-2  "
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
          <div className="flex items-center whitespace-nowrap w-full mt-2 ">
            <div className="text-current flex items-center justify-center rounded-full bg-white w-9 h-9">
              <img src={canlenderr} width={20} alt="" />
            </div>
            <p className="text-sm ml-4 font-medium text-white">{today}</p>
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
