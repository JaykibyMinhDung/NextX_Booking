import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./title.css";
import { useSetRecoilState } from "recoil";
import {
  BookingClassPayment,
  receiveMembership,
  DataPaymentPreference,
  BookingPTPayment,
  ResetLoading,
} from "../../store/recoil/store";

const TitlePage = (props) => {
  const dataParent = props;

  const navigate = useNavigate();
  const resetBillClass = useSetRecoilState(receiveMembership);
  const resetBillMembership = useSetRecoilState(BookingClassPayment);
  const resetReference = useSetRecoilState(DataPaymentPreference);
  const resetBookingPersonaltrainer = useSetRecoilState(BookingPTPayment);
  const resetLoading = useSetRecoilState(ResetLoading);
  const backHome = () => {
    resetReference("");
    resetBillClass("");
    resetBillMembership("");
    resetBookingPersonaltrainer("");
    resetLoading(true);
    if (!dataParent.navigateBack) {
      navigate("/");
    } else {
      navigate(dataParent.navigateBack);
    }
  };
  // console.log(dataParent.title.length);
  return (
    <div className="title__headers">
      <header
      // style={{ marginBottom: "1.5rem" }}
      >
        <div onClick={backHome}>
          <FaArrowLeft />
        </div>
        <div>
          <p
            className={
              dataParent.title.length < 14 && dataParent.title.length > 12
                ? "ml-12"
                : dataParent.title.length < 13 && dataParent.title.length > 10
                ? "ml-7"
                : dataParent.title.length < 11 && dataParent.title.length > 7
                ? "ml-5"
                : dataParent.title.length < 8 && dataParent.title.length > 4
                ? "ml-9"
                : dataParent.title.length < 4 && "ml-14"
              // ? "ml-10"
              // : ""
            }
          >
            {dataParent.title}
          </p>
          {dataParent?.icon && (
            <div className="title__icon">{dataParent.icon}</div>
          )}
        </div>
      </header>
    </div>
  );
};

export default TitlePage;
