import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaRegCalendarCheck, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import TitlePage from "../../../../styles/titlepage/TitlePage";
import defaultimage from "../../../../assets/avatar.jpg";
import { useLocation, useNavigate } from "react-router-dom";
import { postBookingYoga } from "../../../../api/api";

const DetailYoga = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location.state);
  const data = location.state;
  const BookYogaHandle = () => {
    postBookingYoga({
      calendar_id: data.fulldata.calendar_id,
      seat_id: data.id,
      description: data.fulldata.description,
      branch_id: data.branch_id,
      tasks: data.fulldata.tasks,
    })
      .then((results) => {
        if (results.meta.status_code === 1) {
          toast.error(results.meta.message, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          return false;
        } else {
          toast.success(results.meta.message, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          return true;
        }
      })
      .then((acceptNavigate) => {
        return acceptNavigate && setTimeout(() => navigate("/"), 5000);
      })
      .catch((err) => {
        toast.error(err, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
    // thêm toast, thêm chuyển hướng
    // return postBookingYoga()
  };
  return (
    <React.Fragment>
      <div className="mt-10">
        <TitlePage title={"Đặt lớp Yoga"} navigateBack={"/class"} />
        <div className="bg-green-600 h-35vh text-white">
          <div className=" flex items-center justify-center flex-col h-48">
            <img
              className="rounded-full w-20 h-20"
              src={data?.picture || defaultimage}
              alt=""
            />
            <p className="text-center mt-3">{data.namePT}</p>
          </div>
          <h2 className="text-center text-2xl font-semibold">
            {data.nameclass}
          </h2>
        </div>
        <div className=" mx-3 mt-10">
          <div></div>
          <div className="flex items-center">
            <div className="mr-10 my-7">
              <FaRegCalendarCheck />
            </div>
            <div>
              <p>{new Date(data.startHour).toLocaleDateString("en-GB")}</p>
              <p>Ngày</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="mr-10 my-7">
              <FaMapMarkerAlt />
            </div>
            <div>
              <p>
                {new Date(data.startHour).toLocaleTimeString()} -{" "}
                {new Date(data.endHour).toLocaleTimeString()}
              </p>
              <p>Thời gian</p>
            </div>
          </div>
          <hr />
          <div className="flex items-center">
            <div className="mr-10 my-7">
              <FaClock />
            </div>
            <div>
              <p>{data.branch}</p>
              <p>Chi nhánh</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="text-center my-4">
          <button
            className="w-2/3 px-2 py-1 text-lg text-white bg-[#3b9254ff] rounded-xl"
            onClick={BookYogaHandle}
          >
            {" "}
            Đặt Lịch
          </button>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </React.Fragment>
  );
};

export default DetailYoga;
