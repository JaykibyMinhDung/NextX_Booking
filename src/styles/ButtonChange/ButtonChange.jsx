import React from "react";
import "./button.css";

const ButtonChange = () => {
  return (
    <React.Fragment>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
    </React.Fragment>
  );
};

export default ButtonChange;
