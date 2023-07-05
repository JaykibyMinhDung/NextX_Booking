// import React from "react";
import { FaExclamationCircle } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import "./classloyal.css";

const ClassLoyal = (props) => {
  const dataParents = props;
  return (
    <div className="header__frame">
      <div className="w-2/6">
        <p>{dataParents.hour} AM</p>
        <p>14 hours</p>
      </div>
      <div className="flex justify-between items-center w-full mx-4">
        <div style={{ width: "90%" }}>
          <h2>{dataParents.nameclass}</h2>
          <p>{dataParents.nameclass}</p>
          <p>{dataParents.namePT}</p>
          <p>{dataParents.branch}</p>
        </div>
        <div
          className="relative w-2/4"
          // style={{ textAlign: "center", marginRight: "0.5rem" }}
        >
          <div className="flex justify-between items-center ">
            <p className="p-2 rounded-full text-black border-green-800 border-2">
              {dataParents.numbook}/{dataParents.numTotal}
            </p>
            <FaPlay />
          </div>
          <div className="header__registration">
            <FaExclamationCircle />
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default ClassLoyal;
