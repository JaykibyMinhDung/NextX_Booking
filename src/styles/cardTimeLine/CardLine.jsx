// import React from "react";
// import { useNavigate } from "react-router-dom";
import "./cardline.css";
import { useSetRecoilState } from "recoil";
import {
  DataPaymentPreference,
  DataPopupBookingBranch,
  DataPopupBookingContract,
  DataPopupBookingPersolnaltrainer,
  DataPaymentVoucher,
} from "../../store/recoil/store";

const CardLine = (props) => {
  const dataParent = props;
  const setValueBookingBranch = useSetRecoilState(DataPopupBookingBranch);
  const setValueBookingContract = useSetRecoilState(DataPopupBookingContract);
  const setValueBookingPersonaltrainer = useSetRecoilState(
    DataPopupBookingPersolnaltrainer
  );
  const setValueDiscount = useSetRecoilState(DataPaymentPreference);
  const setValueVoucher = useSetRecoilState(DataPaymentVoucher);
  const NavigateDataBooking = () => {
    if (dataParent.data === "Chi nhánh") {
      setValueBookingBranch(dataParent.text);
      return dataParent.onClose();
    }
    if (dataParent.data === "PT") {
      setValueBookingContract(dataParent.text);
      return dataParent.onClose();
    }
    if (dataParent.data === "name") {
      setValueBookingPersonaltrainer(dataParent.text);
      return dataParent.onClose();
    }
    if (dataParent.title === "preference") {
      setValueDiscount(dataParent.discount);
      setValueVoucher(dataParent.data);
      return dataParent.onClose();
    }
  };
  return (
    <div onClick={() => NavigateDataBooking()} className="cardtime__frame">
      <div className="cardtime__align">
        {/* <div className="cardtime__circle--icon">{<dataParent.icon />}</div> */}
        <div>
          <p>{dataParent.text}</p>
          {/* {!dataParent.text && <h2>Chưa có dữ liệu</h2>} */}
        </div>
      </div>
    </div>
  );
};

export default CardLine;
