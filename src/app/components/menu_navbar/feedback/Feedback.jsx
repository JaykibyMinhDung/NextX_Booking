import React from "react";
import TitlePage from "../../../../styles/titlepage/TitlePage";

// import { FaSort } from "react-icons/fa";
import "./feedback.css";
import { FaPlusCircle } from "react-icons/fa";

const Feedback = () => {
  return (
    <React.Fragment>
      <TitlePage title={"Góp ý, Khiếu nại"} icon={null} />
      <div style={{ margin: "1rem" }}>
        <img
          src="https://www.codewithrandom.com/wp-content/uploads/2022/08/Copy-of-Copy-of-Copy-of-SVG-in-HTML-10.png"
          alt=""
        />
      </div>
      <div className="feedback__add">
        <FaPlusCircle />
      </div>
    </React.Fragment>
  );
};

export default Feedback;
