// import React from "react";
import logo from "../../assets/nextXlogo.png";
import { FaArrowLeft, FaRegEye } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// import { useState } from "react";

const Resgister2 = (props) => {
  const navigate = useNavigate();
  const SubmitHandle = props;
  // const NavigateRegister = () => {
  //   navigate("/");
  // };
  // const NavigateForgetPW = () => {
  //   navigate("/");
  // };
  const {
    register,
    getValues,
    formState: { errors },
  } = useForm();
  return (
    <div className="mx-4 my-2">
      <div className="flex items-center">
        <div onClick={() => navigate("/")}>
          <FaArrowLeft className="text-base" />
        </div>
        <div className="text-center ml-10 font-bold text-xl">
          <p>Đăng kí</p>
        </div>
      </div>
      <div className="my-6">
        <h2 className="font-bold text-2xl ">Điền thông tin đăng kí</h2>
      </div>
      <div className="">
        <div className="flex justify-between items-center my-4 border-b-2">
          <input
            className=" w-full focus:outline-none"
            type="email"
            id="Số điện thoại/email"
            placeholder="Email"
            {...register("username", { required: true })}
            name="username"
            autoComplete="none"
          />
          <p>X</p>
        </div>
        {!getValues().username && SubmitHandle.active && (
          <span className="text-red-500">* email không được để trống</span>
        )}
        {errors.content && <span>This field is required</span>}
      </div>
      <div className="text-center mt-4">
        <button
          className="text-center w-5/6 p-2 my-2 text-white bg-[#3B9254FF] rounded-3xl"
          onClick={(event) => navigate("/vertifycation")}
        >
          Gửi mã code đến Email
        </button>
      </div>
    </div>
  );
};

export default Resgister2;
