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
  getExtraServiceBooking,
  getIdPT,
  getIdBranch,
  OptionDate,
  getIdContract,
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
  const setValueExtraService = useSetRecoilState(getExtraServiceBooking);

  // Booking gym id
  const setValueBranchId = useSetRecoilState(getIdBranch);
  const setValueBranchDataContract = useSetRecoilState(getIdContract);
  const setValuePTid = useSetRecoilState(getIdPT);
  const setValueDateBookingOption = useSetRecoilState(OptionDate);

  const NavigateDataBooking = () => {
    if (dataParent.data === "Chi nhánh") {
      setValueBookingBranch(dataParent.text);
      setValueBranchId(dataParent.fulldata);
      return dataParent.onClose();
    }
    if (dataParent.data === "PT") {
      setValueBookingContract(dataParent.text);
      setValueBranchDataContract(dataParent.fulldata);
      return dataParent.onClose();
    }
    if (dataParent.data === "name") {
      setValueBookingPersonaltrainer(dataParent.text);
      setValuePTid(dataParent.fulldata);
      return dataParent.onClose();
    }
    if (dataParent.data === "Date") {
      setValueDateBookingOption(dataParent.fulldata);
      return dataParent.onClose();
    }
    if (dataParent.title === "preference") {
      setValueDiscount(dataParent.discount);
      setValueVoucher(dataParent.data);
      console.log(dataParent.data);
      return dataParent.onClose();
    }
    if (dataParent.title === "ExtraServiceBooking") {
      setValueExtraService(dataParent.text);
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
