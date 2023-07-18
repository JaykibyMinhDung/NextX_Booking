// import React from "react";
import { useQuery } from "react-query";
import { GET_CHECKINPT } from "../../../../../constants/queryKeys";
import { getCheckinPT } from "../../../../../api/api";
import TitlePage from "../../../../../styles/titlepage/TitlePage";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const CheckinPTHistory = () => {
  const { data } = useQuery([GET_CHECKINPT], () => getCheckinPT());
  console.log(data);
  const PrintStarFill = (rate) => {
    for (let i = 0; i < rate; i++) {
      <FaRegStar />;
    }
  };
  const PrintStar = () => {
    for (let i = 0; i < 5; i++) {
      <FaStar />;
    }
  };
  return (
    <div className="mt-16 ">
      <TitlePage title={"Lịch sử checkin"} icon={null} />
      <div>
        <div className="text-center">
          <button className="text-center w-4/6 p-2 my-2 text-white bg-[#3B9254FF] rounded-3xl">
            Checkin PT
          </button>
        </div>
        {data.map((e, index) => (
          <div className=" my-4 mx-4 rounded-3xl shadow-3xl" key={index}>
            <div className="flex items-center justify-between mx-4">
              <div className="mt-4">
                <div>
                  <p>
                    Name:{" "}
                    {e.pt_trainning.first_name + " " + e.pt_trainning.last_name}
                  </p>
                </div>
                <div>
                  <p>Gói: {e.table_price}</p>
                </div>
                <div>
                  <p>Chi nhánh: {e.branch_name}</p>
                </div>
                <div>
                  <p>
                    Còn lại: {e.rehearsal_remain}/{e.number_rehearsal + " buổi"}
                  </p>
                </div>
              </div>
              <div className="text-center w-16 p-1 my-2 text-white bg-red-500 rounded-3xl">
                <p> {e.status}</p>
              </div>
            </div>
            <div className="flex items-center justify-between mx-4">
              <div>
                <div>
                  <p>Đánh giá lễ tân:</p>
                </div>
                <div>
                  <p>Đánh giá PT:</p>
                </div>
              </div>
              <div>
                <div>{5 ? PrintStarFill(5) : PrintStar()}</div>
                <div>{5 ? PrintStarFill(5) : PrintStar()}</div>
              </div>
            </div>
            <div className="text-center">
              <button className="text-center p-2 my-2 text-white bg-[#3B9254FF] rounded-3xl">
                Đánh giá
              </button>
            </div>
            <hr />
            <div className="flex justify-between items-center">
              <div className="flex items-center justify-between mx-4 pb-4">
                <i className="fa fa-sign-out" aria-hidden="true"></i>
                <p className="ml-2 text-[#3B9254FF]">
                  {new Date(e.time_in).toLocaleTimeString("it-IT")}
                  {/* {new Date(e.time_in).getHours() +
                    ":" +
                    new Date(e.time_in).getMinutes()} */}
                </p>
              </div>
              <div className="flex items-center justify-between mx-4 pb-4">
                <i className="fa fa-sign-out" aria-hidden="true"></i>
                <p className="ml-2 text-red-500">
                  {new Date(e.time_out).toLocaleTimeString("it-IT")}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckinPTHistory;
