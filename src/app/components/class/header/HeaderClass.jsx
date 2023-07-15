// import React from 'react'
import { FaCalendarAlt } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useSetRecoilState } from "recoil";
import { updatedDateClass } from "../../../../store/recoil/store";

const today = new Date();
let day;
switch (today.getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
const monthNumber = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
];

const HeaderClass = () => {
  const dayFormat =
    today.getDate() +
    "/" +
    monthNumber[today.getMonth()] +
    "/" +
    today.getFullYear();
  const updatedDate = useSetRecoilState(updatedDateClass);
  const postDateClass =
    today.getFullYear() +
    "-" +
    monthNumber[today.getMonth()] +
    "-" +
    today.getDate();
  const HandleChangeDateBefore = () => {
    updatedDate(postDateClass);
  };
  const HandleChangeDateAfter = () => {
    // const postDateClass =
    //   today.getFullYear() +
    //   "-" +
    //   monthNumber[today.getMonth()] +
    //   "-" +
    //   today.getDate()
    updatedDate(postDateClass);
  };
  return (
    <div className="flex items-center justify-between mx-4">
      <span onClick={HandleChangeDateBefore}>
        <FaArrowAltCircleLeft />
      </span>
      <div className="flex items-center">
        <p className="mr-3">
          {day} {dayFormat}
        </p>
        <span>
          <FaCalendarAlt />
        </span>
      </div>
      <span onClick={HandleChangeDateAfter}>
        <FaArrowAltCircleRight />
      </span>
    </div>
  );
};

export default HeaderClass;
