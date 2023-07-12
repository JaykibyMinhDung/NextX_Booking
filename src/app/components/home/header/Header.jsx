// import React from 'react'
import Notification from "../../../../assets/bell_icon.svg";
import "./headers.css";
import logoDefault from "../../../../assets/nextXlogo.png";
import { useNavigate } from "react-router-dom";
import dataLocalStorage from "../../../../util/dataLoginLocalStorage";
import ButtonChange from "../../../../styles/ButtonChange/ButtonChange";

const Header = () => {
  const naviagte = useNavigate();
  const getNotification = () => {
    naviagte("/notification");
  };
  return (
    <header style={{ marginBottom: "5rem" }}>
      <div className="test">
        <div className="headers__display">
          <img src={logoDefault} alt="" width={90} />
          {/* <p></p> */}
          {dataLocalStorage ? (
            <div
              onClick={getNotification}
              className="headers__notification--bell"
            >
              <div className="headers__amountNotice">{5}</div>
              <img className="headers__image--bell" src={Notification} alt="" />
            </div>
          ) : (
            <>
              <ButtonChange />
              {/* <p>VI</p> */}
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
