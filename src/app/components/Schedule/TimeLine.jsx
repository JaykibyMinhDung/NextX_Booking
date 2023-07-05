// import React from "react";
import "./timeline.css";
import defaultImage from "../../../assets/avatar.jpg";

const TimeLine = () => {
  return (
    <div className="timeline">
      <div className="containers left">
        <div className="content">
          <h2>1. Chọn chi nhánh</h2>
          <div className="flex items-center whitespace-nowrap w-full mt-4">
            <img
              style={{ color: "currentcolor", borderRadius: "50%" }}
              src={defaultImage}
              width={40}
              alt=""
            />
            <p className="ml-4">Chi nhánh chính</p>
          </div>
        </div>
      </div>
      <div className="containers right">
        <div className="content">
          <h2>2.Chọn hợp đồng</h2>
          <div className="flex items-center whitespace-nowrap w-full  mt-4">
            <img
              style={{ color: "currentcolor", borderRadius: "50%" }}
              src={defaultImage}
              width={40}
              alt=""
            />
            <p className="ml-4">PT 50SS</p>
          </div>
        </div>
      </div>
      <div className="containers left">
        <div className="content">
          <h2>3. Chọn PT</h2>
          <div className="flex items-center whitespace-nowrap w-full  mt-4">
            <img
              style={{ color: "currentcolor", borderRadius: "50%" }}
              src={defaultImage}
              width={40}
              alt=""
            />
            <p className="ml-4">Lê Văn Linh</p>
          </div>
        </div>
      </div>
      <div className="containers right">
        <div className="content">
          <h2>4. Chọn lịch tập PT</h2>
          <div className="flex items-center whitespace-nowrap w-full  mt-4">
            <p>
              <input
                style={{ width: "100%" }}
                type="date"
                name="date"
                id="834"
              />
            </p>
          </div>
        </div>
      </div>
      {/* <div className="containers left">
        <div className="content">
          <h2>2011</h2>
          <p>
            Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
            admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis
            iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto
            primis ea eam.
          </p>
        </div>
      </div>
      <div className="containers right">
        <div className="content">
          <h2>2007</h2>
          <p>
            Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
            admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis
            iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto
            primis ea eam.
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default TimeLine;
