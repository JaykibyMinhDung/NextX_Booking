import React from "react";
import { FaArrowLeft, FaRegEye } from "react-icons/fa";

const CodeVertify = () => {
  return (
    <div>
      <div className="flex items-center">
        <FaArrowLeft />
        <p>Đăng kí</p>
      </div>
      <div className="my-6">
        <h2 className="font-bold text-2xl ">Nhập mã xác thực</h2>
        <p>Mã xác thực vừa gửi đến {}</p>
        <p className="text-red-500">
          (Vui lòng check trong mục spam nếu không thấy email được gửi đến)
        </p>
      </div>
      <form action="">
        <input type="number" />
        <button className="font-semibold text-blue-500">Gửi lại mã</button>
      </form>
    </div>
  );
};

export default CodeVertify;
