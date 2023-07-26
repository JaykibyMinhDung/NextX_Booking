// import React from 'react'
import { useState } from "react";
import { useRecoilValue } from "recoil";
import "./pay.css";
import TitlePage from "../../../styles/titlepage/TitlePage";
import imageCash from "../../../assets/21.jpg";
// import { useLocation } from "react-router-dom";
import FooterPayment from "./FooterPayment";
import {
  BookingClassPayment,
  receiveMembership,
  DataPaymentPreference,
  BookingPTPayment,
} from "../../../store/recoil/store";
import { useNavigate } from "react-router-dom";
// import Popup from "../../../styles/modal/Modal";
// import CardLine from "../../../styles/cardTimeLine/CardLine";

const Payment = () => {
  // const location = useLocation();
  // const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const BookingPersolnalTrainner = useRecoilValue(BookingPTPayment);
  const BookingClass = useRecoilValue(BookingClassPayment);
  const filterData = useRecoilValue(receiveMembership);
  const getValueDiscount = useRecoilValue(DataPaymentPreference);
  // const getDataVoucher = useRecoilValue(DataPaymentVoucher);
  // console.log(getValueDiscount);
  const TotalBill = filterData
    ? filterData.total_price - Number(getValueDiscount)
    : 0;
  // const showModalHandle = () => {
  //   document.body.style.overflow = "hidden";
  //   setShowPopup(true);
  // };
  // const hiddenModalHandle = () => {
  //   document.body.style.overflow = "auto";
  //   return setShowPopup(false);
  // };
  const getReference = (data) => {
    // showModalHandle();
    if (!data) {
      return;
    }
    navigate("/membership/Chi%20nhánh%20chính/payment/preferencepay", {
      state: data,
    });
  };
  // console.log(BookingPersolnalTrainner);
  // const valueMembership = useRecoilValue(receiveMembership)
  return (
    <div className="mt-16">
      <TitlePage
        title={"Thanh toán"}
        icon={null}
        navigateBack={`${
          BookingClass
            ? "/class"
            : BookingPersolnalTrainner
            ? `/personaltrainer`
            : `/membership`
        }`}
      />
      {filterData && (
        <>
          <div className="m-4">
            <p className="font-semibold">Đơn thanh toán</p>
          </div>
          <div className="m-3 payment__card">
            <div className="flex justify-between ">
              <p>Gói: {filterData.name}</p>
              <p> {filterData.total_price.toLocaleString()}</p>
            </div>
            <div className="flex justify-between">
              <p>Ưu đãi: </p>
              <p>
                {" "}
                {/* {filterData.gym_vouchers.length}{" "} */}
                {filterData.gym_vouchers.length > 0 ? (
                  <button
                    className="text-blue-400 italic"
                    onClick={() =>
                      getReference(filterData?.gym_vouchers || null)
                    }
                  >
                    xem thêm
                  </button>
                ) : (
                  <em className="text-red-600">Chưa có ưu đãi</em>
                )}
              </p>
            </div>
          </div>
          <div className="m-3 payment__card">
            <div className="flex justify-between">
              <p>Giảm giá: </p>
              <p>{filterData.gym_vouchers.length}</p>
            </div>
            <div className="flex justify-between">
              <p>Tổng tiền: </p>
              <p>{TotalBill.toLocaleString()}</p>
            </div>
          </div>
          <p className="mx-4 my-6 font-semibold">Phương thức thanh toán</p>
          <div className="flex items-center m-3 payment__card">
            <img src={imageCash} width={50} alt="" />
            <p>Thanh toán tại quầy</p>
          </div>
          <div className="flex items-center m-4">
            <i className="fa fa-check" aria-hidden="true"></i>
            <p className="ml-3">
              Tôi đã đọc, hiểu, chấp nhận và đồng ý với điều khoản và điều kiện
            </p>
          </div>
          <FooterPayment
            data={filterData}
            bookingclass={BookingClass}
            total_price={TotalBill}
          />
          {/* {showPopup && (
            <Popup onClose={hiddenModalHandle}>
              {filterData.gym_vouchers &&
                filterData.gym_vouchers.map((e) => (
                  <CardLine
                    key={e.id}
                    text={e.code}
                    data={e}
                    title={"preference"}
                    discount={e.total_discount}
                    onClose={hiddenModalHandle}
                  />
                ))}
            </Popup>
          )} */}
        </>
      )}
    </div>
  );
};

export default Payment;
