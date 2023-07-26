// import React from 'react'
import Notification from "../../../../assets/bell_icon.svg";
import "./headers.css";
import logoDefault from "../../../../assets/nextXlogo.png";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { isLogin } from "../../../../store/recoil/authenticate";
import ButtonChange from "../../../../styles/ButtonChange/ButtonChange";

const Header = () => {
  const naviagte = useNavigate();
  const auth = useRecoilValue(isLogin);
  const getNotification = () => {
    naviagte("/");
  };
  return (
    <header style={{ marginBottom: "5rem" }}>
      <div className="test">
        <div className="headers__display">
          <img src={logoDefault} alt="" width={90} />
          {/* <p></p> */}
          {auth ? (
            <div
              onClick={getNotification}
              className="headers__notification--bell"
            >
              {/* <div className="headers__amountNotice"></div> */}
              {/* <img className="headers__image--bell" src={Notification} alt="" /> */}
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
