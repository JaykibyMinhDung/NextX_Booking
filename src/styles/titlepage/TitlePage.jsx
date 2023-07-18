import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./title.css";
import { useSetRecoilState } from "recoil";
import {
  BookingClassPayment,
  receiveMembership,
  DataPaymentPreference,
  BookingPTPayment,
} from "../../store/recoil/store";

const TitlePage = (props) => {
  const dataParent = props;

  const navigate = useNavigate();
  const resetBillClass = useSetRecoilState(receiveMembership);
  const resetBillMembership = useSetRecoilState(BookingClassPayment);
  const resetReference = useSetRecoilState(DataPaymentPreference);
  const resetBookingPersonaltrainer = useSetRecoilState(BookingPTPayment);
  const backHome = () => {
    resetReference("");
    resetBillClass("");
    resetBillMembership("");
    resetBookingPersonaltrainer("");
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
              dataParent.title.length < 14 && dataParent.title.length > 4
                ? "ml-12"
                : dataParent.title.length < 4 && "ml-16"
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
