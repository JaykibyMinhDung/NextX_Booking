// import React from 'react'
import "./transittionsetting.css";
// import { FaRegCalendar } from "react-icons/fa";

const CardTransaction = (props) => {
  const dataParent = props;
  const createDate = new Date(dataParent.time);
  const currentmonth = Number(createDate.getMonth()) + 1;

  // const create_date = new Date(dataParent.date).toLocaleDateString();

  const end_date = new Date(dataParent.time).toLocaleTimeString();

  const create_date =
    createDate.getDate() + "-" + currentmonth + "-" + createDate.getFullYear();
  // const end_date =
  //   dataParent.time.getHours() +
  //   "-" +
  //   dataParent.time.getMinutes() +
  //   "-" +
  //   dataParent.time.getSeconds();

  const changebgcolorbtn = () => {
    if (dataParent.status === "Đã hủy") {
      return "bg-red-500 text-white rounded-3xl p-2 m-1";
    }
    if (dataParent.status === "Thành công") {
      return "bg-[#3B9254FF] text-white rounded-3xl p-2 m-1";
    }
    if (dataParent.status === "Đang chờ duyệt") {
      return "bg-blue-600 text-white rounded-3xl p-2 m-1";
    }
  };
  return (
    <div className=" mx-4 my-3 shadow-3xl text-sm rounded-2xl p-4 trransaction__card">
      <div className="flex justify-between">
        <div>
          <h2 className="font-bold">{dataParent.subject}</h2>
          <p>{dataParent.voucher}</p>
          <p>{dataParent.total_price}</p>
          <p>Member: {dataParent.nameMember}</p>
        </div>
        <div className="text-center mr-2 mb-2">
          <p style={{ color: "blue", fontWeight: 550, marginBottom: "0.3rem" }}>
            {dataParent.total_price}đ
          </p>
          <p style={{ color: "blue", fontWeight: 550 }}>
            {dataParent.voucher ? dataParent.voucher_discount + "đ" : ""}
          </p>
          <p style={{ color: "red", fontWeight: 550 }}>
            {dataParent.voucher
              ? dataParent.total_price - dataParent.voucher_discount
              : dataParent.total_price}
            đ
          </p>
          <button className={`${changebgcolorbtn()}`}>
            {dataParent.status}
          </button>
        </div>
      </div>
      <hr />
      <div className="flex justify-between items-center w-full mt-3 iconconfig">
        <div className="flex items-center ">
          <i className="fa fa-calendar" aria-hidden="true"></i>
          <p className="ml-2 text-[#3B9254FF]" style={{ fontWeight: 700 }}>
            {create_date}
            {/* .toLocaleDateString() */}
          </p>
        </div>
        <div className="flex items-center">
          <i className="fas fa-clock    "></i>
          <p className="ml-2 text-[#3B9254FF]" style={{ fontWeight: 700 }}>
            {end_date}
            {/* .toLocaleTimeString() */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardTransaction;
