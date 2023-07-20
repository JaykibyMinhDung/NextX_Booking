// import React from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import TitlePage from "../../styles/titlepage/TitlePage";
import TimeLine from "../components/Schedule/TimeLine";
import Footer from "../components/home/footer/Footer";
import { getBookingPTScheduleHours } from "../../api/api";
import { GET_SCHEDULEHOURS } from "../../constants/queryKeys";
import { useRecoilState } from "recoil";
import { ChanngeBackGroundColor } from "../../store/recoil/store";
import {
  ChanngeBackGroundColorButtonDay,
  getFormBookingPT,
} from "../../store/recoil/store";
import { useNavigate } from "react-router-dom";
// import { useState } from "react";

const Booking = () => {
  const today = new Date();
  const navigate = useNavigate();
  const CurrentHours = today.getHours();
  const formatmonth = Number(today.getMonth()) + 1;
  const CurrentDay =
    today.getFullYear() + "-" + formatmonth + "-" + today.getDate();
  const [stateHoursSwitch, setStateHoursSwitch] = useState([]);
  const [changeBgColorState, setChangeBgColorState] = useRecoilState(
    ChanngeBackGroundColor
  );
  const [totalDataFormBooking, setTotalDataFormBooking] =
    useRecoilState(getFormBookingPT);
  const [changeBgColorStateSwitch, setChangeBgColorStateSwitch] =
    useRecoilState(ChanngeBackGroundColorButtonDay);
  const { data, isLoading } = useQuery([GET_SCHEDULEHOURS], () =>
    getBookingPTScheduleHours(26359, 2518, CurrentDay)
  );
  // let a = [];
  const SwitchHoursWorkout = (startDate, endDate) => {
    setChangeBgColorStateSwitch(startDate);
    const filterData = data.filter(
      (e) =>
        Number(e.start_time.slice(0, 2)) > startDate &&
        Number(e.start_time.slice(0, 2)) < endDate
    );
    setStateHoursSwitch(filterData);
  };
  // const totalDataFormBooking = (data2) => {
  // };
  const SubmitHandlePayment = (start_time, full_time) => {
    // console.log(totalDataFormBooking);
    if (Number(start_time.slice(0, 2)) < CurrentHours) {
      return;
    }
    // console.log(totalDataFormBooking);
    setChangeBgColorState(start_time);
    navigate("/booking/resgiterbooking", { state: full_time });
  };
  if (isLoading) {
    return <div>loading...</div>;
  }
  // console.log(data);
  return (
    <div>
      <TitlePage title={"Booking Gym PT"} />
      <TimeLine setForm={setTotalDataFormBooking} />
      <div
        // onClick={totalDataFormBooking}
        className={`flex justify-between mx-5 mt-3 bg-[#3b9254ff] rounded-2xl`}
      >
        <div
          className={` ${
            changeBgColorStateSwitch === 0
              ? "flex items-center text-white rounded-2xl ml-2 p-2 bg-green-800"
              : "text-white p-2 ml-2"
          }`}
        >
          <button onClick={() => SwitchHoursWorkout(0, 11)}>Buổi sáng</button>
        </div>
        <div
          className={` ${
            changeBgColorStateSwitch === 11
              ? " flex items-center text-white rounded-2xl p-2 bg-green-800"
              : "text-white p-2"
          }`}
        >
          <button onClick={() => SwitchHoursWorkout(11, 17)}>Buổi chiều</button>
        </div>
        <div
          className={` ${
            changeBgColorStateSwitch === 17
              ? "flex items-center text-white rounded-2xl mr-2 p-2 bg-green-800"
              : "text-white p-2 mr-2"
          }`}
        >
          <button onClick={() => SwitchHoursWorkout(17, 23)}>Buổi tối</button>
        </div>
      </div>
      <div className=" flex flex-wrap adr-385:ml-5 ml-10 mt-3">
        {stateHoursSwitch.map((e, index) => (
          <div
            key={index}
            onClick={() => SubmitHandlePayment(e.start_time, e.date_time)}
            className={`w-16 ${
              Number(e.start_time.slice(0, 2)) < CurrentHours
                ? "bg-gray-400"
                : changeBgColorState === e.start_time
                ? "bg-red-400"
                : "bg-[#3b9254ff]"
            } text-white text-center m-1 rounded-lg p-1`}
          >
            <p>{e.start_time}</p>
            {/* <p>{"hello"}</p> */}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Booking;
