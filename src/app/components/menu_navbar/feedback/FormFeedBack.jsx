// import React from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useForm } from "react-hook-form";
import { FaTimes } from "react-icons/fa";
import { postFeedback } from "../../../../api/api";
import {
  // useLocation,
  useNavigate,
} from "react-router-dom";

const FormFeedBack = () => {
  // const location = useLocation();
  const navigate = useNavigate();
  // const dataParent = location.state;
  const {
    register,
    getValues,
    // handleSubmit,
    formState: { errors },
  } = useForm();

  const feedbackhandle = async (event) => {
    event.preventDefault();
    const values = getValues();
    values.category_id = null;
    postFeedback(values)
      .then((results) => {
        if (results.message.status_code === 0) {
          return toast.success(results.message.message);
        }
        throw new Error(results.message);
      })
      .then(() => {
        setTimeout(() => {
          navigate("/feedback");
        }, 3000);
      })
      .catch((err) => toast.error(err));
  };

  return (
    <>
      <div className="modal__formFeedback mx-3">
        <h2>Góp ý khiếu nại</h2>
        <div onClick={() => navigate("/feedback")}>
          <FaTimes />
        </div>
      </div>
      <hr />
      <div className="modal__formFeedback--main mx-3">
        <form>
          {/* onSubmit={handleSubmit(handleData)} */}
          <input
            type="text"
            placeholder="Nhập tiêu đề khiếu nại"
            {...register("subject")}
          />
          <textarea
            type="text"
            placeholder="Nhập nội dung góp ý, khiếu nại"
            {...register("content", { required: true })}
          />
          {errors.content && <span>This field is required</span>}
          <button className="btn" onClick={feedbackhandle}>
            Góp ý
          </button>
        </form>
        <ToastContainer
          position="bottom-right"
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
      </div>
    </>
  );
};

export default FormFeedBack;
