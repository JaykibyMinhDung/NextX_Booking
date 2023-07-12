// import React from "react";
import "./Login.css";
import logo from "../../assets/nextXlogo.png";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// import { getToken } from "../../api/api";

const Login = (props) => {
  const navigate = useNavigate();
  const SubmitHandle = props;
  const NavigateRegister = () => {
    navigate("/register");
  };
  const NavigateForgetPW = () => {
    navigate("/");
  };
  const {
    register,
    getValues,
    // handleSubmit,
    formState: { errors },
  } = useForm();

  // SubmitHandle.test(getValues());

  return (
    <div className="fakebody">
      <div className="login-box">
        <div className="login__logo">
          <img width={200} src={logo} alt="" />
        </div>
        <form>
          <div className="user-box">
            <input
              type="text"
              {...register("username")}
              name="username"
              autoComplete="none"
            />
            {/* {errors.content && <span>This field is required</span>} */}
            <label htmlFor="username">username</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              name="password"
              // required=""
              {...register("password", { required: true })}
            />
            {errors.content && <span>This field is required</span>}
            <label>Password</label>
          </div>
          <div className="flex justify-between text-white text-sm">
            <p onClick={NavigateRegister}>Đăng kí ngay</p>
            <p className="" onClick={NavigateForgetPW}>
              Quên mật khẩu
            </p>
          </div>
          {/* <button onClick={SubmitHandle.LoginHandle}> */}
          <button
            type="button"
            onClick={() => SubmitHandle.LoginHandle(getValues())}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
