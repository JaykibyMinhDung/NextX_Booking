// import React from "react";
import { useNavigate } from "react-router-dom";
import "./bar.css";
import { useSetRecoilState } from "recoil";
import {
  receiveAllmembership,
  titleBranchStore,
} from "../../store/recoil/store";

const BarPage = (props) => {
  const dataParent = props;
  const navigate = useNavigate();
  const alldataMembership = useSetRecoilState(receiveAllmembership);
  const receiveTitleBrach = useSetRecoilState(titleBranchStore);
  const navigateHandle = () => {
    alldataMembership(dataParent.coupon);
    receiveTitleBrach(dataParent.text);
    navigate(`/membership/${dataParent.text}`, {
      state: { titleBranch: dataParent.text, data: dataParent.coupon },
    });
  };
  // console.log(dataParent.text);
  return (
    <div onClick={navigateHandle} className="bar__frame">
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
