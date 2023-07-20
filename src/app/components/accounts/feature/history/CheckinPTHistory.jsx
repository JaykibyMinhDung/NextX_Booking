import React from "react";
import { useQuery } from "react-query";
import { GET_CHECKINPT } from "../../../../../constants/queryKeys";
import { getCheckinPT } from "../../../../../api/api";
import TitlePage from "../../../../../styles/titlepage/TitlePage";
// import StarRating from "../../../../../styles/starrating/StarRating";

// MUI material
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
// import Typography from "@mui/material/Typography";
import Popup from "../../../../../styles/modal/Modal";
import RatingEmployee from "./ratingStaff/RatingEmployee";

const CheckinPTHistory = () => {
  const { data } = useQuery([GET_CHECKINPT], () => getCheckinPT());
  // console.log(data);
  const [identify, setIdentify] = React.useState(null);
  const [showModal, setShowmodal] = React.useState(false);

  const ShowModalHandle = (id) => {
    setIdentify(id);
    return setShowmodal(true);
  };
  const HiddenModalHandle = () => {
    return setShowmodal(false);
  };
  // const text_rate = ["", "😢", "🙁", "😓", "🥰", "😍"];
  return (
    <div className="mt-16 ">
      <TitlePage
        title={"Lịch sử checkin"}
        icon={null}
        navigateBack={"/account"}
      />
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
                  <h2 className="font-semibold">
                    Name:{" "}
                    {e.pt_trainning.first_name + " " + e.pt_trainning.last_name}
                  </h2>
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
              <div className="w-3/6">
                <div className="mb-1">
                  <p>Đánh giá lễ tân:</p>
                </div>
                <div>
                  <p>Đánh giá PT:</p>
                </div>
              </div>
              <div className="w-2/6">
                <Box>
                  <div>
                    <Rating
                      name="simple-controlled"
                      defaultValue={2.5}
                      precision={0.5}
                      value={e.rate ? e.rate.rate_number1 : 0}
                      size="small"
                      readOnly
                    />
                  </div>
                  <div>
                    <Rating
                      name="simple-controlled"
                      defaultValue={2.5}
                      precision={0.5}
                      value={e.rate ? e.rate.rate_number : 0}
                      size="small"
                      readOnly
                    />
                  </div>
                </Box>
              </div>
            </div>
            <div className="text-center">
              <button
                onClick={() => ShowModalHandle(e.id)}
                className="text-center p-2 my-2 text-white bg-[#3B9254FF] rounded-3xl"
              >
                Đánh giá
              </button>
            </div>
            <hr />
            <div className="flex justify-between items-center">
              <div className="flex items-center justify-between mx-4 pb-4">
                <i className="fa fa-sign-in" aria-hidden="true"></i>
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
        {showModal && (
          <Popup onClose={HiddenModalHandle}>
            <RatingEmployee idFeedback={identify} onClose={HiddenModalHandle} />
          </Popup>
        )}
      </div>
    </div>
  );
};

export default CheckinPTHistory;
