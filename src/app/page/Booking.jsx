// import React from "react";
import TitlePage from "../../styles/titlepage/TitlePage";
import TimeLine from "../components/Schedule/TimeLine";
import Footer from "../components/home/footer/Footer";

const Booking = () => {
  return (
    <div>
      <TitlePage title={"Booking Gym PT"} />
      <TimeLine />
      <div className="flex justify-between mx-5 mt-3 bg-green-600 rounded-2xl">
        <div className="text-white m-3">
          <button>Buổi sáng</button>
        </div>
        <div className="text-white m-3">
          <button>Buổi chiều</button>
        </div>
        <div className="text-white m-3">
          <button>Buổi tối</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Booking;
