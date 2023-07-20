// import React from "react";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ChangePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [changeInputOldPW, setChangeInputOldPW] = useState(null);
  const [changeInputNewPW, setChangeInputNewPW] = useState(null);
  const inputPasswordOld = (event) => {
    event.preventDefault();
    setChangeInputOldPW(event.target.value);
  };
  const changeStateShowPW = (event) => {
    event.preventDefault();
    if (showPassword) {
      return setShowPassword(false);
    }
    if (!showPassword) {
      return setShowPassword(true);
    }
  };
  const inputPasswordNew = (event) => {
    event.preventDefault();
    setChangeInputNewPW(event.target.value);
  };
  const SubmitPasswordHandle = () => {
    return console.log(changeInputOldPW, changeInputNewPW);
  };
  return (
    <div>
      <h2 className="font-bold text-lg mb-4">Đổi Password</h2>
      <div className="border-b-2 focus:border-b-4 flex items-center p-2 mb-6">
        <input
          className="w-full "
          value={changeInputOldPW}
          onChange={inputPasswordOld}
          type={showPassword ? "text" : `password`}
          placeholder="Mật khẩu cũ"
        />
        <button onClick={changeStateShowPW}>
          {showPassword ? <FaEye /> : <FaEyeSlash />}
        </button>
      </div>
      <div className="border-b-2 focus:border-b-4 flex items-center p-2 mb-6">
        <input
          className="w-full "
          value={changeInputNewPW}
          onChange={inputPasswordNew}
          type={showPassword ? "text" : `password`}
          placeholder="Mật khẩu mới"
        />
        <button onClick={changeStateShowPW}>
          {showPassword ? <FaEye /> : <FaEyeSlash />}
        </button>
      </div>
      <div className="text-center shadow-3xl p-2 rounded-3xl bg-[#3B9254FF] text-white">
        <button className="text-xl font-medium" onClick={SubmitPasswordHandle}>
          Xác nhận
        </button>
      </div>
    </div>
  );
};

export default ChangePassword;
