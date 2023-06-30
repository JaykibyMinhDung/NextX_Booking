// import React from "react";
import { NavLink } from "react-router-dom";
// import Calender from "../../../../assets/calender_interface_seo_icon.svg";
import "./footer.css";

const NavFooter = [
  {
    icon: <i className="fa fa-home" aria-hidden="true"></i>,
    title: "Trang chủ",
    href: "/",
  },
  {
    icon: <i className="fas fa-users-class    "></i>,
    title: "Lớp học",
    href: "/",
  },
  {
    icon: <i className="fas fa-calend    "></i>,
    title: "Booking",
    href: "/",
  },
  {
    icon: <i className="fas fa-history    "></i>,
    title: "Lịch sử",
    href: "/",
  },
  {
    icon: <i className="fa fa-user" aria-hidden="true"></i>,
    title: "Tài khoản",
    href: "/",
  },
];

const Footer = () => {
  return (
    <footer>
      <div className="footer__fixed">
        <div className="footer__navlink">
          <div className="footer__center--booking">
            <div className="footer__icon--boking">
              {/* <img src={Calender} alt="" width={30} /> */}
              <i className="fa fa-calendar" aria-hidden="true"></i>
            </div>
          </div>
          {NavFooter.map((e) => (
            <div className="footer__group" key={e.title}>
              {e.icon}
              <NavLink to={e.href}>{e.title}</NavLink>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
