// import React from "react";
import logo from "../../assets/nextXlogo.png";
import { FaArrowLeft, FaRegEye } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// import { useState } from "react";

const Login2 = (props) => {
  const navigate = useNavigate();
  const SubmitHandle = props;
  const NavigateRegister = () => {
    navigate("/register");
  };
  const NavigateForgetPW = () => {
    navigate("/forgetpassword");
  };
  const {
    register,
    getValues,
    formState: { errors },
  } = useForm();
  return (
    <div className="mx-4 my-2">
      <div className="flex items-center">
        <div onClick={() => navigate("/homelogin")}>
          <FaArrowLeft />
        </div>
        <img className="ml-8" width={130} src={logo} alt="" />
      </div>
      <div className="my-6">
        <h2 className="font-bold text-2xl ">Điền thông tin đăng nhập</h2>
        <p>Số điện thoại hoặc email dùng để đăng nhập tài khoản NextX </p>
      </div>
      <div className="">
        <div className="flex justify-between items-center my-4 border-b-2">
          <input
            className=" w-full focus:outline-none"
            type="text"
            id="Số điện thoại/email"
            placeholder="Số điện thoại/email"
            {...register("username", { required: true })}
            name="username"
            autoComplete="none"
          />
          <p>X</p>
        </div>
        {!getValues().username && SubmitHandle.active && (
          <span className="text-red-500">
            * Điện thoại hoặc email không được để trống
          </span>
        )}
        {errors.content && <span>This field is required</span>}
        <div className="flex justify-between items-center my-4 border-b-2">
          <input
            className=" w-full focus:outline-none"
            type="password"
            id="Mật khẩu"
            placeholder="Mật khẩu"
            name="password"
            {...register("password", { required: true })}
          />
          <FaRegEye />
        </div>
        {!getValues().username && SubmitHandle.active && (
          <span className="text-red-500 mb-4">
            * Mật khẩu không được để trống
          </span>
        )}
        {errors.content && <span>This field is required</span>}
      </div>
      <div className="flex justify-between ">
        <button onClick={NavigateRegister} className="text-green-500">
          Đăng kí ngay
        </button>
        <button onClick={NavigateForgetPW} className="text-blue-500">
          Quên mật khẩu
        </button>
      </div>
      <div className="text-center mt-4">
        <button
          className="text-center w-5/6 p-2 my-2 text-white bg-[#3B9254FF] rounded-3xl"
          onClick={(event) => SubmitHandle.LoginHandle(event, getValues())}
        >
          Đăng nhập
        </button>
      </div>
    </div>
  );
};

export default Login2;
