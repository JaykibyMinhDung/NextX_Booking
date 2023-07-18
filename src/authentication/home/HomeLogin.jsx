// import React from "react";
// import TitlePage from "../../styles/titlepage/TitlePage";
import Header from "../../app/components/home/header/Header";
import Advertising from "../../app/components/home/section/advertising";
import "./homelogin.css";
import { useNavigate } from "react-router-dom";

const HomeLogin = () => {
  const navigate = useNavigate();
  const navigateLogin = () => {
    return navigate("/");
  };
  return (
    <div>
      {/* <TitlePage /> */}
      <Header />
      {/* <p className="text-center font-bold">Đang update banner...</p> */}
      <Advertising />
      <div className="flex justify-center">
        <button onClick={navigateLogin} className="login">
          Đăng nhập
        </button>
      </div>
      <p className="text-center mb-4">
        Bạn chưa có tài khoản?{" "}
        <span className="text-green-400 font-bold">Đăng kí ngay</span>
      </p>
      <div className="bg-gray-100 py-6 my-4">
        <p className="text-center">
          Tổng đài hỗ trợ:{" "}
          <span className="text-green-400 font-bold font-serif">1900 6129</span>
        </p>
      </div>
    </div>
  );
};

export default HomeLogin;
