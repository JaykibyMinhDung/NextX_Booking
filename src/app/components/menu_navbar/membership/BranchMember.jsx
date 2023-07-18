// import React from "react";
import TitlePage from "../../../../styles/titlepage/TitlePage";

// import BarPage from "../../../../styles/barPage/BarPage";text-base
// import { FaMapMarkerAlt } from "react-icons/fa";
import "./membership.css";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useQuery } from "react-query";
import { GET_BRANCH } from "../../../../constants/queryKeys";
import { getBranch } from "../../../../api/api";

import {
  BookingClassPayment,
  BookingPTPayment,
  receiveAllmembership,
  receiveMembership,
  titleBranchStore,
} from "../../../../store/recoil/store";

const BranchMember = () => {
  // const dataParent = props
  const navigate = useNavigate();
  // const location = useLocation();
  const allMembershipPackage = useRecoilValue(receiveAllmembership);
  const nameBranchMembership = useRecoilValue(titleBranchStore); // Tên nhánh
  const MembershipResgister = useSetRecoilState(receiveMembership);
  const MembershipBookingClass = useRecoilValue(BookingClassPayment);
  const MembershipBookingPersonaltrainer = useRecoilValue(BookingPTPayment);
  // const ResgiterMember = () => {

  const { data, isLoading } = useQuery([GET_BRANCH], () =>
    getBranch({
      branch_id: null,
      order_type: MembershipBookingPersonaltrainer ? "1" : null,
      class_id: MembershipBookingClass ? MembershipBookingClass.class_id : null,
      employee_id: MembershipBookingPersonaltrainer
        ? MembershipBookingPersonaltrainer.code
        : null,
    })
  );
  // }
  if (isLoading) {
    return <div>loading...</div>;
  }

  console.log(MembershipBookingClass);
  const filterData =
    MembershipBookingClass || MembershipBookingPersonaltrainer
      ? data.data.filter(
          (e) =>
            e.branches[0].name === MembershipBookingClass.branch_name ||
            MembershipBookingPersonaltrainer.branch_name
        )
      : allMembershipPackage
      ? allMembershipPackage.filter(
          (e) => e.branches[0].name === nameBranchMembership
        )
      : data.data.filter((e) => e.branches[0].name === nameBranchMembership); // Lấy tất cả các gói cùng nhánh
  const items = filterData.shift(); // Lọc cái đầu

  const CartHandle = (nameMembership) => {
    const dataMembership = data.data.find((e) => e.name === nameMembership);
    console.log(nameMembership);
    MembershipResgister(dataMembership); // Truyền dữ liệu xuống payment
    navigate(
      `/membership/${
        allMembershipPackage
          ? dataMembership.branches[0].name
          : MembershipBookingClass.branch_name
          ? MembershipBookingClass.branch_name
          : MembershipBookingPersonaltrainer.branch_name
      }/payment`
    );
  };
  // console.log(data.data); // tất cả dữ liệu của các nhánh
  // console.log(filterData); // lấy dữ liệu đúng với nhánh
  return (
    <div className="bg-gray-100 h-screen">
      <TitlePage
        title={`${
          allMembershipPackage
            ? nameBranchMembership
            : MembershipBookingClass.branch_name
            ? MembershipBookingClass.branch_name
            : MembershipBookingPersonaltrainer.branch_name
        }`}
        icon={null}
        navigateBack={"/membership"}
      />
      <div className="text-center font-bold mb-4 mt-16 text-base">
        GÓI THÀNH VIÊN
      </div>
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
            <button
              onClick={() => CartHandle(items.name)}
              className="btn__resgistration"
            >
              Đăng kí
            </button>
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
            <button
              onClick={() => CartHandle(e.name)}
              className="btn__resgistration2"
            >
              Đăng kí
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BranchMember;
