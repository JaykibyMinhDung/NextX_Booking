import { Box, Rating, Typography } from "@mui/material";
import React from "react";
// import { useQuery } from "react-query";
import { postRatingCheckinPT } from "../../../../../../api/api";
import { useNavigate } from "react-router-dom";
// import { POST_CHECKINPTHISTORY } from "../../../../../../constants/queryKeys";

const RatingEmployee = (props) => {
  const [value, setValue] = React.useState(null);
  const [valuePT, setValuePT] = React.useState(null);
  const [InputFeed, setInputFeed] = React.useState("");
  const dataParent = props;
  const navigate = useNavigate();
  const identifyStateRating = (number, functionEmployee) => {
    if (functionEmployee === "Lễ Tân") {
      return setValue(number);
    }
    if (functionEmployee === "PT") {
      return setValuePT(number);
    }
  };
  const InputFeedbackHandle = (event) => {
    event.preventDefault();
    setInputFeed(event.target.value);
  };
  const SubmitRatingHandle = () => {
    postRatingCheckinPT({
      rate_id: dataParent.idFeedback,
      rate_number1: valuePT,
      rate_number: value,
      description: InputFeed,
    }).then(() =>
      dataParent.onClose().then(() => navigate("/account/checkinpt"))
    );
  };
  return (
    <div className="my-5 mx-4">
      <h3 className="text-center text-2xl font-bold">Phiếu đánh giá</h3>
      <Box>
        <div className="flex justify-between my-4">
          <Typography component="legend">
            <h2>Đánh giá lễ tân:</h2>
          </Typography>
          <Rating
            name="simple-controlled"
            defaultValue={2.5}
            precision={0.5}
            value={value}
            onChange={(event, newValue) =>
              identifyStateRating(newValue, "Lễ Tân")
            }
          />
        </div>
        <div className="flex justify-between">
          <Typography component="legend">
            <h2>Đánh giá huấn luyện viên:</h2>
          </Typography>
          <Rating
            name="simple-controlled"
            defaultValue={2.5}
            precision={0.5}
            value={valuePT}
            onChange={(event, newValue) => identifyStateRating(newValue, "PT")}
          />
        </div>
      </Box>
      <textarea
        className="border-2 p-1 w-full mt-4 focus:outline-none"
        name="feedback"
        value={InputFeed}
        onChange={InputFeedbackHandle}
        id="feedback"
        cols="10"
        rows="10"
        placeholder="Chi tiết đánh giá"
      ></textarea>
      <div className="text-center">
        <button
          onClick={SubmitRatingHandle}
          className="text-center w-5/6 p-2 my-2 text-white bg-[#3B9254FF] rounded-3xl"
        >
          Đánh giá
        </button>
      </div>
    </div>
  );
};

export default RatingEmployee;
