import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import moment from "moment/moment";
import { useQuery } from "react-query";
import TitlePage from "../../../styles/titlepage/TitlePage";
import { getFormBookingPT } from "../../../store/recoil/store";
import { useLocation, useNavigate } from "react-router-dom";
import Popup from "../../../styles/modal/Modal";
import { GET_EXTRASERVICE } from "../../../constants/queryKeys";
import {
  getBookingPTServiceExtra,
  postBookingPersonalTrainer,
} from "../../../api/api";
import CardLine from "../../../styles/cardTimeLine/CardLine";
import { getExtraServiceBooking } from "../../../store/recoil/store";

const FormResgisterBooking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [noticeBooking, setNotceBooking] = useState("");
  const ClientOptionService = useRecoilValue(getExtraServiceBooking);
  const [changeTime, setChangTime] = useState(30);
  const [activepopup, setActivePopup] = useState(false);
  const totalDataFormBooking = useRecoilValue(getFormBookingPT);
  const { data, isLoading } = useQuery([GET_EXTRASERVICE], () =>
    getBookingPTServiceExtra()
  );
  if (totalDataFormBooking === null) {
    return navigate("/booking");
  }
  const hours = moment(location.state)
    .add(changeTime, "minutes")
    // .format();
    .format("YYYY/MM/DD HH:mm:ss ");
  const ChangHoursHandle = (time) => {
    setChangTime(time);
  };
  const ShowBookingExtraService = () => {
    setActivePopup(true);
    // console.log(data);
  };
  const CloseBookingExtraService = () => {
    setActivePopup(false);
  };
  const noticle = (event) => {
    setNotceBooking(event.target.value);
  };
  const SubmitHandle = () => {
    postBookingPersonalTrainer({
      Branch: totalDataFormBooking.branch, // branch id
      TimeStart: location.state,
      TimeEnd: hours,
      PersonalTrainer: totalDataFormBooking.PersonalTrainers, // id
      ExtraService: ClientOptionService ? ClientOptionService : null,
      Notice: noticeBooking, // description
    }).then((result) => console.log(result));
    // console.log({
    //   Branch: totalDataFormBooking.branch,
    //   TimeStart: location.state,
    //   TimeEnd: hours,
    //   PersonalTrainer: totalDataFormBooking.PersonalTrainers,
    //   ExtraService: ClientOptionService ? ClientOptionService : null,
    //   Notice: noticeBooking,
    // });
  };
  if (isLoading) {
    return <div>loading...</div>;
  }
  return (
    <React.Fragment>
      <TitlePage title={"Đăng kí học tập"} navigateBack={"/booking"} />
      <div className="px-4">
        <div className="mt-16">
          <div className="m-4">
            <p className="font-semibold">Chi nhánh</p>
          </div>
          <div className=" card_payment">
            <div className="flex justify-between">
              <p>{totalDataFormBooking.branch}</p>
            </div>
          </div>
          <div className="m-4">
            <h2 className="font-semibold">Thời gian</h2>
          </div>
          <div className=" card_payment">
            <div className="flex justify-between">
              <p>Ngày bắt đầu: </p>
              <p>{location.state}</p>
            </div>
            <div className="flex justify-between">
              <p>Ngày kết thúc: </p>
              <p>{hours}</p>
            </div>
            <div>
              <button
                onClick={() => ChangHoursHandle(30)}
                className={`w-20 p-2 mt-3 rounded-2xl ${
                  changeTime === 30
                    ? "bg-green-400 text-white"
                    : "bg-gray-400 text-white"
                }`}
              >
                30 Phút
              </button>
              <span> </span>
              <button
                onClick={() => ChangHoursHandle(60)}
                className={`w-20 p-2 mt-4 rounded-2xl ${
                  changeTime === 60
                    ? "bg-green-400 text-white"
                    : "bg-gray-400 text-white"
                }`}
              >
                60 Phút
              </button>
            </div>
          </div>
          <div className="m-4">
            <h2 className="font-semibold">PT</h2>
          </div>
          <div className=" card_payment">
            <div className="flex justify-between">
              <p>{totalDataFormBooking.PersonalTrainers}</p>
            </div>
          </div>
          <div className="">
            <h2 className="font-semibold">Dịch vụ đi kèm</h2>
          </div>
          <div className=" card_payment">
            <div
              onClick={ShowBookingExtraService}
              className="flex justify-between"
            >
              <p>
                {ClientOptionService ? ClientOptionService : "Dịch vụ đi kèm"}
              </p>
            </div>
          </div>
          <p className=" font-semibold">Ghi chú</p>
          <div className="flex items-center m-4">
            <input
              className="w-full"
              type="text"
              value={noticeBooking}
              onChange={noticle}
              max={200}
              placeholder="Ghi chú"
            />
          </div>
          {/* <div className="flex items-center m-4">
            <i className="fa fa-check" aria-hidden="true"></i>
            <p className="ml-3">
              Tôi đã đọc, hiểu, chấp nhận và đồng ý với điều khoản và điều kiện
            </p>
          </div> */}
        </div>
        {activepopup && (
          <Popup onClose={CloseBookingExtraService}>
            {data.map((e) => (
              <CardLine
                key={e.id}
                text={e.name}
                title={"ExtraServiceBooking"}
                onClose={CloseBookingExtraService}
              />
            ))}
          </Popup>
        )}
        <button onClick={SubmitHandle} className="btn">
          Đăng kí
        </button>
      </div>
    </React.Fragment>
  );
};

export default FormResgisterBooking;
