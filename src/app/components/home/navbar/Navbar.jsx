// import React from 'react'
import "./navbar.css";
import { FaTicketAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaSave } from "react-icons/fa";
import { FaCommentDots } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { FaUserPen } from "react-icons/fa6";
import { FaFileCircleCheck } from "react-icons/fa6";
import { FaTags } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const titleMenu = [
  {
    title: "Memebership",
    logo: <FaTicketAlt />,
    color: "red",
    href: "/membership",
  },
  {
    title: "Gia hạn",
    logo: <FaClock />,
    color: "#7FE7CC",
    href: "/extend",
  },
  {
    title: "Bảo lưu",
    logo: <FaSave />,
    color: "#37E2D5",
    href: "/reserve",
  },
  {
    title: "Góp ý khiếu nại",
    logo: <FaCommentDots />,
    color: "yellow",
    href: "/feedback",
  },
  {
    title: "Inbody",
    logo: <FaUsers />,
    color: "orange",
    href: "/inbody",
  },
  {
    title: "Ưu đãi",
    logo: <FaTags />,
    color: "violet",
    href: "/preference",
  },
  {
    title: "PT",
    logo: <FaUserPen />,
    color: "black",
    href: "/personaltrainer",
  },
  {
    title: "Hợp đồng",
    logo: <FaFileCircleCheck />,
    color: "#16FF00",
    href: "/contract",
  },
];

const Navbar = () => {
  const navigate = useNavigate();
  const navigateFunction = (url) => {
    navigate(url);
  };
  return (
    // <div className="grid gap-4 grid-cols-2 grid-rows-4">
    <div className="navbar__container">
      {titleMenu.map((e) => (
        <div key={e.title} className="navbar__group">
          <div
            onClick={() => navigateFunction(e.href)}
            style={{ fontSize: "x-large", backgroundColor: e.color }}
          >
            {e.logo}
          </div>
          <p> {e.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
