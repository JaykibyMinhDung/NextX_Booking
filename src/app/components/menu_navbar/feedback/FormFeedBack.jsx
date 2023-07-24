// import React from 'react'
import { useForm } from "react-hook-form";
import { FaTimes } from "react-icons/fa";
import { postFeedback } from "../../../../api/api";

const FormFeedBack = (props) => {
  const dataParent = props;
  const {
    register,
    getValues,
    // handleSubmit,
    formState: { errors },
  } = useForm();

  const feedbackhandle = async () => {
    const values = getValues();
    values.category_id = null;
    // console.log(values);
    postFeedback(values)
      .then((results) => console.log(results.message))
      .then(() => {
        return dataParent.onClose();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="modal__formFeedback">
        <h2>Góp ý khiếu nại</h2>
        <div onClick={dataParent.onClose}>
          <FaTimes />
        </div>
      </div>
      <hr />
      <div className="modal__formFeedback--main">
        <form action="" method="post">
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
      </div>
    </>
  );
};

export default FormFeedBack;
