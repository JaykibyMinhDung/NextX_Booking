// import React from "react";
import TitlePage from "../../styles/titlepage/TitlePage";
import Feature from "../components/accounts/feature/Feature";
import Setting from "../components/accounts/setting/Setting";
import Footer from "../components/home/footer/Footer";

const User = () => {
  return (
    <div>
      <TitlePage title={"Thông tin tài khoản"} />
      <Setting />
      <Feature />
      <Footer />
    </div>
  );
};

export default User;
