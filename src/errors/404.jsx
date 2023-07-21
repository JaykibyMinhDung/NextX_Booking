// import React from 'react'

// import TitlePage from "../styles/titlepage/TitlePage";
import "../styles/titlepage/title.css";
import logo from "../assets/nextXlogo.png";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="title__headers">
        <header
        // style={{ marginBottom: "1.5rem" }}
        >
          <div onClick={() => navigate("/")}>
            <FaArrowLeft />
          </div>
          <div>
            <p className={"ml-5 adr-300:ml-1 adr-385:ml-3 galaxyFold-280:ml-0"}>
              Page Not Found
            </p>
          </div>
        </header>
      </div>
      <div className="text-center mt-24">
        <h3 className="font-bold text-lg mb-3">Page Not Found</h3>
        <p className="mx-4">
          Opp! This function is require or update, please wait for team
          technical fix!
        </p>
      </div>
      <div className="grid place-content-center">
        <img src={logo} alt="" />
      </div>
      {/* width={280} */}
    </>
  );
};

export default NotFound;
