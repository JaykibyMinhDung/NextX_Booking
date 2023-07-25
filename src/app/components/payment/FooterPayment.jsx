// import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useQuery } from "react-query";
// import { POST_REGISTERMEMBER } from "../../../constants/queryKeys";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import { postRegisterMember } from "../../../api/api";
import { DataPaymentVoucher } from "../../../store/recoil/store";
import moment from "moment";

const FooterPayment = (props) => {
  const data = props;
  const getDataVoucher = useRecoilValue(DataPaymentVoucher);
  // const getDateFromBooking = useRecoilValue(PaymentDate);
  const date = moment().format("YYYY-MM-DD HH:mm:ss");
  const navigate = useNavigate();
  // console.log(getDataVoucher);
  const postHandle = () => {
    postRegisterMember({
      voucher_id: getDataVoucher ? getDataVoucher.voucher.id : null,
      voucher_code: getDataVoucher ? getDataVoucher.code : null,
      table_price_id: data.bookingclass.table_price_id
        ? data.bookingclass.table_price_id
        : data.data.id, // not have
      employee_id: data.bookingclass.employee_id
        ? data.bookingclass.employee_id
        : null, // not have
      class_id: data.bookingclass.class_id ? data.bookingclass.class_id : null, // not have
      branch_id: data.bookingclass.branches_id
        ? data.bookingclass.branches_id
        : data.data.branches[0].id,
      begin_date_intent: date,
      description: "Đăng ký qua mini app zalo",
    })
      .then((results) => {
        if (results.meta.status_code === 1) {
          toast.error(results.meta.message, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          return false;
        } else {
          toast.success(results.meta.message, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          return true;
        }
      })
      .then((acceptNavigate) => {
        return acceptNavigate && setTimeout(() => navigate("/"), 5000);
      })
      .catch((err) => {
        toast.error(err, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <footer>
        <div className="flex justify-between items-center text-center mx-4 my-7">
          <p className="font-semibold">Thành tiền</p>
          <p>{data.total_price.toLocaleString()}đ</p>
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
