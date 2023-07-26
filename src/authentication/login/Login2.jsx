// import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../../assets/nextXlogo.png";
import { FaArrowLeft, FaRegEye } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const Login2 = (props) => {
  const navigate = useNavigate();
  const SubmitHandle = props;
  const [showPW, setShowPW] = useState(false);
  const [stateinput, setStateInput] = useState(false);
  // const NavigateRegister = () => {
  //   navigate("/register");
  // };
  const NavigateForgetPW = () => {
    toast.success(
      "Để lấy lại mật khẩu, bạn có thể thay đổi trên app, cảm ơn bạn đã yêu thích và tin dùng dịch vụ bên mình!",
      {
        icon: "🥰",
      }
    );
  };
  const ChangeStateError = () => {
    setValue("password", "");
    setValue("username", "");
  };
  const ChangeShowPassword = () => {
    if (showPW) {
      return setShowPW(false);
    } else {
      return setShowPW(true);
    }
  };
  const {
    register,
    getValues,
    setValue,
    formState: { errors },
  } = useForm();

  // console.log(getValues());
  useEffect(() => {
    if (stateinput) {
      ChangeStateError();
      setStateInput(false);
    }
  }, [stateinput]);
  return (
    <div className="mx-4 my-2">
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
      <div className="flex items-center">
        <div onClick={() => navigate("/homelogin")}>
          <FaArrowLeft className="text-base" />
        </div>
        <img className="ml-8" width={130} src={logo} alt="" />
      </div>
      <div className="mx-2 my-6">
        <h2 className="font-bold text-2xl ">Điền thông tin đăng nhập</h2>
        <p className="text-sm">
          Số điện thoại hoặc email dùng để đăng nhập tài khoản NextX{" "}
        </p>
      </div>
      <div className="">
        <div className="flex justify-between items-center my-4 border-b-2">
          <input
            className=" w-full p-2 focus:outline-none"
            type="email"
            id="Số điện thoại/email"
            placeholder="Số điện thoại/email"
            {...register("username", { required: true })}
            name="username"
            autoComplete="none"
            required
          />
          <p
            onClick={() => {
              setStateInput(true);
            }}
          >
            {/* <FaUserCircle /> */}
          </p>
        </div>
        {!getValues().username && SubmitHandle.active && (
          <span className="text-red-500">
            * Điện thoại hoặc email không được để trống
          </span>
        )}
        {errors.content && <span>This field is required</span>}
        <div className="flex justify-between items-center my-4 border-b-2">
          <input
            className=" w-full p-2 focus:outline-none"
            type={showPW ? "text" : "password"}
            id="Mật khẩu"
            placeholder="Mật khẩu"
            name="password"
            {...register("password", { required: true })}
            required
          />
          <div onClick={() => ChangeShowPassword()}>
            <FaRegEye />
          </div>
        </div>
        {!getValues().username &&
          SubmitHandle.active &&
          SubmitHandle.WrongPass === "" && (
            <span className="text-red-500 mb-4">
              * Mật khẩu không được để trống
            </span>
          )}
        {SubmitHandle.WrongPass && (
          <span className="text-red-500 mb-4">
            *
            {!getValues().password
              ? " Mật khẩu không được để trống"
              : SubmitHandle.WrongPass}
          </span>
        )}
        {errors.content && <span>This field is required</span>}
      </div>
      <div className="flex justify-between ">
        {/* <button onClick={NavigateRegister} className="text-green-500">
          Đăng kí ngay
        </button> */}
        <button onClick={NavigateForgetPW} className="text-blue-500 mt-3">
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
