// import React from "react";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const DeleteAccount = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [changeInput, setChangeInput] = useState(null);
  const inputPassword = (event) => {
    event.preventDefault();
    setChangeInput(event.target.value);
  };
  const WatchPasswordHandle = (event) => {
    event.preventDefault();
    if (showPassword) {
      return setShowPassword(false);
    }
    if (!showPassword) {
      return setShowPassword(true);
    }
  };
  const SubmitPasswordHandle = () => {
    return console.log(changeInput);
  };
  return (
    <div>
      <p className="text-red-500 text-base font-semibold">
        Lưu ý: Bạn có chắc chắn muốn xóa tài khoản? Việc xóa tài khoản sẽ xóa
        tất cả thông tin, dữ liệu và bạn sẽ không thể đăng nhập lại.
      </p>
      <br />
      <span className="font-semibold">
        Vui lòng nhập lại mật khẩu để tiếp tục{" "}
      </span>
      <div className="border-b-2 flex items-center justify-between mt-4 p-2">
        <input
          className="w-full"
          value={changeInput}
          onChange={inputPassword}
          type={showPassword ? "text" : `password`}
        />
        <button onClick={WatchPasswordHandle}>
          {showPassword ? <FaEye /> : <FaEyeSlash />}
        </button>
      </div>
      <div className="text-center p-2 mt-6 rounded-3xl bg-[#3B9254FF] text-white">
        <button className="text-xl font-medium" onClick={SubmitPasswordHandle}>
          Xác nhận
        </button>
      </div>
    </div>
  );
};

export default DeleteAccount;
