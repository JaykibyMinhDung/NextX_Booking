// import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import Calender from "../../../../assets/calender_interface_seo_icon.svg";
import {
  FaHome,
  FaUsers,
  FaCalendarCheck,
  FaHistory,
  FaUser,
} from "react-icons/fa";
import "./footer.css";

const NavFooter = [
  {
    icon: <FaHome />,
    title: "Trang chủ",
    href: "/",
  },
  {
    icon: <FaUsers />,
    title: "Lớp học",
    href: "/class",
  },
  {
    icon: <FaCalendarCheck />,
    title: "Booking",
    href: "/booking",
  },
  {
    icon: <FaHistory />,
    title: "Lịch sử",
    href: "/log",
  },
  {
    icon: <FaUser />,
    title: "Tài khoản",
    href: "/account",
  },
];

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer>
      <div className="footer__fixed">
        <div className="footer__navlink">
          <div className="footer__center--booking">
            <div
              onClick={() => navigate("/booking")}
              className="footer__icon--boking"
            >
              {/* <img src={Calender} alt="" width={30} /> */}
              <FaCalendarCheck />
            </div>
          </div>
          {NavFooter.map((e) => (
            <div className="footer__group" key={e.title}>
              <NavLink
                to={e.href}
                className={({ isActive }) => (isActive ? "bg-green-700" : "")}
              >
                <div className="flex items-center justify-center mb-1">
                  {e.icon}
                </div>
                <p>{e.title}</p>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
