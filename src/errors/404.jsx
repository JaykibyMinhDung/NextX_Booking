// import React from 'react'

import TitlePage from "../styles/titlepage/TitlePage";
import logo from "../assets/nextXlogo.png";

const NotFound = () => {
  return (
    <>
      <TitlePage title={"Not Found 😅"} />
      <div className="text-center mt-24">
        <p>Page Not Found</p>
        <p>
          Opp! This function is require or update, please wait for team
          technical fix!
        </p>
      </div>
      <img src={logo} className="ml-16" width={300} alt="" />
    </>
  );
};

export default NotFound;
