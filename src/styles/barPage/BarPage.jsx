// import React from "react";
import "./bar.css";

const BarPage = (props) => {
  const dataParent = props;
  return (
    <div className="bar__frame">
      <div className="bar__align">
        <div className="bar__circle--icon">{<dataParent.icon />}</div>
        <div>
          <p>{dataParent.text}</p>
        </div>
      </div>
    </div>
  );
};

export default BarPage;
