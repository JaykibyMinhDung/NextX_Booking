// import React from 'react'
import { FaCalendarAlt } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const HeaderClass = () => {
  return (
    <div className="flex items-center justify-between mx-4">
      <FaArrowAltCircleLeft />
      <div className="flex items-center">
        <p className="mr-3">Friday 07/07/2023 </p>
        <span>
          <FaCalendarAlt />
        </span>
      </div>
      <FaArrowAltCircleRight />
    </div>
  );
};

export default HeaderClass;
