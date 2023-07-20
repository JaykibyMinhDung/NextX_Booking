// import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import "./vertifi.css";
import { useNavigate } from "react-router-dom";

const CodeVertify = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex items-center m-4">
        <div onClick={() => navigate("/register")}>
          <FaArrowLeft className="text-xl" />
        </div>
        <p className="ml-8 text-xl font-semibold">Đăng kí</p>
      </div>
      <hr />
      <div className="my-6 mx-4">
        <h2 className="font-bold text-2xl my-2">Nhập mã xác thực</h2>
        <p>Mã xác thực vừa gửi đến {}</p>
        <p className="text-red-500 my-2">
          (Vui lòng check trong mục spam nếu không thấy email được gửi đến)
        </p>
      </div>
      <div className="verification mx-4">
        <form action="" className="content-area">
          <fieldset className="number-code border border-solid border-gray-300 p-3">
            <legend className="">Security Code</legend>
            <div>
              <input
                name="code"
                className="code-input"
                required
                autoComplete="off"
              />
              <input
                name="code"
                className="code-input"
                required
                autoComplete="off"
              />
              <input
                name="code"
                className="code-input"
                required
                autoComplete="off"
              />
              <input
                name="code"
                className="code-input"
                required
                autoComplete="off"
              />
              <input
                name="code"
                className="code-input"
                required
                autoComplete="off"
              />
              <input
                name="code"
                className="code-input"
                required
                autoComplete="off"
              />
            </div>
          </fieldset>
          <p>
            <a href="#">Resend Code</a>
          </p>
          {/* <input type="submit" value="Submit" /> */}
          <button className="font-semibold text-blue-500">Gửi lại mã</button>
        </form>
      </div>
    </div>
  );
};

export default CodeVertify;
