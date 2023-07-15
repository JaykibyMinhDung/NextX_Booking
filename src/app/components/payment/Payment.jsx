// import React from 'react'
import TitlePage from "../../../styles/titlepage/TitlePage";
import imageCash from "../../../assets/21.jpg";
// import { useLocation } from "react-router-dom";
import FooterPayment from "./FooterPayment";
import { useRecoilValue } from "recoil";
import {
  BookingClassPayment,
  receiveMembership,
  DataPaymentPreference,
} from "../../../store/recoil/store";
import { useState } from "react";
import Popup from "../../../styles/modal/Modal";
import CardLine from "../../../styles/cardTimeLine/CardLine";

const Payment = () => {
  // const location = useLocation();
  const [showPopup, setShowPopup] = useState(false);
  const BookingClass = useRecoilValue(BookingClassPayment);
  const filterData = useRecoilValue(receiveMembership);
  const getValueDiscount = useRecoilValue(DataPaymentPreference);
  // const getDataVoucher = useRecoilValue(DataPaymentVoucher);
  // console.log(getValueDiscount);
  const TotalBill = filterData
    ? filterData.total_price - Number(getValueDiscount)
    : 0;
  const showModalHandle = () => {
    document.body.style.overflow = "hidden";
    setShowPopup(true);
  };
  const hiddenModalHandle = () => {
    document.body.style.overflow = "auto";
    return setShowPopup(false);
  };
  const getReference = () => {
    showModalHandle();
  };
  console.log(BookingClass);
  // const valueMembership = useRecoilValue(receiveMembership)
  return (
    <div className="mt-16">
      <TitlePage
        title={"Thanh toán"}
        icon={null}
        navigateBack={`${filterData ? `/membership` : "/class"}`}
      />
      {filterData && (
        <>
          <div className="m-4">
            <p className="font-semibold">Đơn thanh toán</p>
          </div>
          <div className="m-4 card_payment">
            <div className="flex justify-between">
              <p>Gói: {filterData.name}</p>
              <p> {filterData.total_price}</p>
            </div>
            <div className="flex justify-between">
              <p>Ưu đãi: </p>
              <p>
                {" "}
                {/* {filterData.gym_vouchers.length}{" "} */}
                {filterData.gym_vouchers.length > 0 ? (
                  <button
                    className="text-blue-400 italic"
                    onClick={getReference}
                  >
                    xem thêm
                  </button>
                ) : (
                  <em className="text-red-600">Chưa có ưu đãi</em>
                )}
              </p>
            </div>
          </div>
          <div className="m-4">
            <div className="flex justify-between">
              <p>Giảm giá: </p>
              <p>{filterData.gym_vouchers.length}</p>
            </div>
            <div className="flex justify-between">
              <p>Tổng tiền: </p>
              <p>{TotalBill}</p>
            </div>
          </div>
          <p className="m-4 font-semibold">Phương thức thanh toán</p>
          <div className="flex items-center m-4">
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
          {showPopup && (
            <Popup onClose={hiddenModalHandle}>
              {filterData.gym_vouchers &&
                filterData.gym_vouchers.map((e) => (
                  <CardLine
                    key={e.id}
                    text={e.code}
                    data={e.gym_vouchers}
                    title={"preference"}
                    discount={e.total_discount}
                    onClose={hiddenModalHandle}
                  />
                ))}
            </Popup>
          )}
        </>
      )}
      {/* {BookingClass && (
        <>
          <div className="m-4">
            <p className="font-semibold">Đơn thanh toán</p>
          </div>
          <div className="m-4 card_payment">
            <div className="flex justify-between">
              <p>
                Gói{" "}
                <span className=" text-base">{BookingClass.category} : </span>
              </p>
              <p> {BookingClass.total_price ? BookingClass.total_price : 0}</p>
            </div>
            <div className="flex justify-between">
              <p>Ưu đãi : </p>
              <p>
                {BookingClass.gym_vouchers
                  ? BookingClass.gym_vouchers.length
                  : 0}
              </p>
            </div>
          </div>
          <div className="m-4">
            <div className="flex justify-between">
              <p>Giảm giá : </p>
              <p>
                {BookingClass.gym_vouchers
                  ? BookingClass.gym_vouchers.length
                  : 0}
              </p>
            </div>
            <div className="flex justify-between">
              <p>Tổng tiền: </p>
              <p>{BookingClass.total_price ? "trống" : 0}</p>
            </div>
          </div>
          <p className="m-4 font-semibold">Phương thức thanh toán</p>
          <div className="flex items-center m-4">
            <img src={imageCash} width={50} alt="" />
            <p>Thanh toán tại quầy</p>
          </div>
          <div className="flex items-center m-4">
            <i className="fa fa-check" aria-hidden="true"></i>
            <p className="ml-3">
              Tôi đã đọc, hiểu, chấp nhận và đồng ý với điều khoản và điều kiện
            </p>
          </div>
          <FooterPayment data={location.state} bookingclass={BookingClass} />
        </>
      )} */}
    </div>
  );
};

export default Payment;
