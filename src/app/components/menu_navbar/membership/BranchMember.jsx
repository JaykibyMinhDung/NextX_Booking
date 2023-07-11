// import React from "react";
import TitlePage from "../../../../styles/titlepage/TitlePage";

// import BarPage from "../../../../styles/barPage/BarPage";text-base
// import { FaMapMarkerAlt } from "react-icons/fa";
import "./membership.css";
import { useLocation } from "react-router-dom";

const BranchMember = () => {
  // const dataParent = props

  const location = useLocation();
  const filterData = location.state.data.filter(
    (e) => e.branches[0].name === location.state.titleBranch
  );
  const items = filterData.shift();
  console.log(filterData);
  return (
    <div className="bg-gray-100 h-screen">
      <TitlePage
        title={`${location.state.titleBranch}`}
        icon={null}
        navigateBack={"/membership"}
      />
      <div className="text-center font-bold mb-4 text-base">GÓI THÀNH VIÊN</div>
      {items && (
        <div>
          <div className="branch__membership--card">
            <p
              style={{
                fontSize: "20px",
                fontWeight: "550",
                textTransform: "uppercase",
              }}
            >
              {items.name}
            </p>
            <div className="relative w-40 mb-16">
              <p className="branch__membership--unit">VNĐ</p>
              <p className="mb-10 font-semibold" style={{ fontSize: "40px" }}>
                {items.total_price}
              </p>
            </div>
            <button className="btn__resgistration">Đăng kí</button>
          </div>
        </div>
      )}
      {filterData.length < 1 && (
        <div className="text-center font-bold text-3xl"> Not found data </div>
      )}
      <div className="flex justify-evenly flex-wrap w-full response__maxwidth280">
        {filterData.map((e) => (
          <div key={e.id} className="branch__membership--cardnormal">
            <p style={{ fontWeight: "700" }}>{e.name}</p>
            <div>
              <p className="branch__membership--unitnormal">VNĐ</p>
              <p
                className="mb-10 font-semibold text-green-500 branch__price"
                // style={{ fontSize: "24px" }}
              >
                {e.total_price}
              </p>
            </div>
            <button className="btn__resgistration2">Đăng kí</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BranchMember;
