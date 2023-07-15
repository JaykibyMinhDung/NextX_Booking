// import React from "react";

// import { useQuery } from "react-query";
// import { POST_REGISTERMEMBER } from "../../../constants/queryKeys";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import { postRegisterMember } from "../../../api/api";
import { DataPaymentVoucher } from "../../../store/recoil/store";

const FooterPayment = (props) => {
  const getDataVoucher = useRecoilValue(DataPaymentVoucher);
  // const {data, isLoading} = useQuery([POST_REGISTERMEMBER], () => postRegisterMember())
  const navigate = useNavigate();
  const data = props;
  console.log(getDataVoucher);
  const postHandle = () => {
    postRegisterMember({
      voucher_id: getDataVoucher ? getDataVoucher.voucher.id : null,
      voucher_code: getDataVoucher ? getDataVoucher.code : null,
      table_price_id: data.bookingclass.table_price_id
        ? data.bookingclass.table_price_id
        : null, // not have
      employee_id: data.bookingclass.employee_id
        ? data.bookingclass.employee_id
        : null, // not have
      class_id: data.bookingclass.class_id ? data.bookingclass.class_id : null, // not have
      branch_id: data.bookingclass.branches_id
        ? data.bookingclass.branches_id
        : data.data.branches.id,
      begin_date_intent: "2023-07-29",
      description: data.data.description,
    })
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <footer>
        <div className="flex justify-between items-center text-center mx-4 my-7">
          <p className="font-semibold">Thành tiền</p>
          <p>{data.total_price}đ</p>
        </div>
        <div className="flex justify-center items-center">
          <button
            className="flex justify-center items-center bg-green-500 rounded-full text-white font-medium text-xl p-4 w-4/5 h-14 shadow-xl"
            onClick={postHandle}
          >
            Thanh toán
          </button>
        </div>
      </footer>
    </div>
  );
};

export default FooterPayment;
