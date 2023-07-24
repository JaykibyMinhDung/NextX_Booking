// import React from "react";
import { useEffect, useState } from "react";
// import { useQuery } from "react-query";
import TitlePage from "../../styles/titlepage/TitlePage";
import TimeLine from "../components/Schedule/TimeLine";
import Footer from "../components/home/footer/Footer";
import { getBookingPTScheduleHours } from "../../api/api";
// import { GET_SCHEDULEHOURS } from "../../constants/queryKeys";
import { useRecoilState, useRecoilValue } from "recoil";
import { ChanngeBackGroundColor, OptionDate } from "../../store/recoil/store";
import {
  ChanngeBackGroundColorButtonDay,
  getFormBookingPT,
} from "../../store/recoil/store";
import { useNavigate } from "react-router-dom";
// import { useState } from "react";

const Booking = () => {
  const today = new Date();
  const navigate = useNavigate();
  const CurrentHours = Number(today.getHours());
  // const CurrentMinute = today.getMinutes();
  const formatmonth = Number(today.getMonth()) + 1;
  // const CurrentDay =
  //   today.getFullYear() + "-" + formatmonth + "-" + today.getDate();
  const DateOptionBooking = useRecoilValue(OptionDate);
  const [stateHoursSwitch, setStateHoursSwitch] = useState([]);
  const [changeBgColorState, setChangeBgColorState] = useRecoilState(
    ChanngeBackGroundColor
  );
  const [totalDataFormBooking, setTotalDataFormBooking] =
    useRecoilState(getFormBookingPT);
  const [changeBgColorStateSwitch, setChangeBgColorStateSwitch] =
    useRecoilState(ChanngeBackGroundColorButtonDay);
  // const { data, isLoading } = useQuery([GET_SCHEDULEHOURS], () =>
  //   getBookingPTScheduleHours(totalDataFormBooking)
  // );
  // let a = [];
  const SwitchHoursWorkout = (startDate, endDate) => {
    setChangeBgColorStateSwitch(startDate);
    const filterData = totalDataFormBooking.filter(
      (e) =>
        Number(e.start_time.slice(0, 2)) > startDate &&
        Number(e.start_time.slice(0, 2)) < endDate
    );
    setStateHoursSwitch(filterData);
  };
  // const totalDataFormBooking = (data2) => {
  // };
  // console.log(totalDataFormBooking);
  useEffect(() => {
    if (getFormBookingPT) {
      getBookingPTScheduleHours(getFormBookingPT);
    }
  }, [totalDataFormBooking]);
  const SubmitHandlePayment = (start_time, full_time) => {
    // console.log(
    //   Number(start_time.slice(2, 4)) + Number(start_time.slice(0, 2)) <
    //     CurrentMinute + CurrentHours
    // );
    if (
      Number(start_time.slice(0, 2)) < CurrentHours &&
      today.toLocaleDateString("en-GB").slice(0, 2) ===
        DateOptionBooking.slice(0, 2)
    ) {
      return;
    }
    setChangeBgColorState(start_time);
    navigate("/booking/resgiterbooking", { state: full_time });
  };
  // if (isLoading) {
  //   return <div>loading...</div>;
  // }
  // console.log(data);
  return (
    <div>
      <TitlePage title={"Booking Gym PT"} />
      <TimeLine setForm={setTotalDataFormBooking} />
      <div
        // onClick={totalDataFormBooking}
        className={`flex justify-between mx-5 mt-3 bg-[#3b9254ff] rounded-md`}
      >
        <div
          className={` ${
            changeBgColorStateSwitch === 0
              ? "flex items-center text-white rounded-md ml-2 my-1 p-1 my-1 bg-green-800"
              : "text-white p-1 my-1 ml-2"
          }`}
        >
          <button onClick={() => SwitchHoursWorkout(0, 12)}>Buổi sáng</button>
        </div>
        <div
          className={` ${
            changeBgColorStateSwitch === 11
              ? " flex items-center text-white rounded-md p-1 my-1 bg-green-800"
              : "text-white p-1 my-1"
          }`}
        >
          <button onClick={() => SwitchHoursWorkout(11, 18)}>Buổi chiều</button>
        </div>
        <div
          className={` ${
            changeBgColorStateSwitch === 17
              ? "flex items-center text-white rounded-md mr-2 p-1 my-1 bg-green-800"
              : "text-white p-1 my-1 mr-2"
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
              Number(e.start_time.slice(0, 2)) < CurrentHours &&
              today.toLocaleDateString("en-GB").slice(0, 2) ===
                DateOptionBooking.slice(0, 2)
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
