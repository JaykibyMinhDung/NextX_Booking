// import React from 'react'

import { useQuery } from "react-query";
import { getCheckin } from "../../../../../api/api";
import { GET_CHECKIN } from "../../../../../constants/queryKeys";
import Loading from "../../../../../spinner/Loading";

const Checkin = (props) => {
  const id = props;
  const { data, isFetching } = useQuery([GET_CHECKIN], () =>
    getCheckin(id.idCheckin)
  );
  if (isFetching) {
    return <Loading />;
  }
  // console.log(data);
  // const word = ;
  return (
    <div className="">
      {data.length > 1 ? (
        data.map((e) => (
          <div
            style={{ borderBottom: "20px solid rgb(235, 235, 235)" }}
            key={e.id}
            className=""
          >
            <div className="w-full my-4">
              <div className="flex justify-between m-4">
                <p>Mã hội viên: </p>
                <p className="text-blue-600 font-semibold">
                  {e.member.code.toUpperCase()}
                </p>
              </div>
              <hr />
              <div className="flex justify-between m-4">
                <p>Tên hội viên: </p>
                <p>{e.members_full_name}</p>
              </div>
              <hr />
              <div className="flex justify-between m-4">
                <p>Ngày checkin: </p>
                <p>
                  {/* {new Date(e.order.active_date).getDate() +
                    "/" + */}
                  {/* "/" +
                    new Date(e.time_in).getFullYear()} */}
                  {e.order.active_date}
                </p>
              </div>
              <hr />
              <div className="flex justify-between m-4">
                <p>Giờ checkin: </p>
                <p>
                  {new Date(e.time_in).getHours() < 12 &&
                  new Date(e.time_in).getMinutes() < 12
                    ? "0" +
                      new Date(e.time_in).getHours() +
                      ":" +
                      "0" +
                      new Date(e.time_in).getMinutes()
                    : new Date(e.time_in).getHours() +
                      ":" +
                      new Date(e.time_in).getMinutes()}
                </p>
              </div>
              <hr />
              <div className="flex justify-between m-4">
                <p>Giờ checkout: </p>
                <p style={{ color: e.time_out ? "" : "red" }}>
                  {e.time_out
                    ? new Date(e.time_out).getHours() +
                      ":" +
                      new Date(e.time_out).getMinutes()
                    : "Chưa checkout"}
                </p>
              </div>
              <hr />
              <div className="flex justify-between m-4">
                <p>Trạng thái: </p>
                <p>{e.status}</p>
              </div>
              <hr />
              <div className="flex justify-between m-4">
                <p>Khung giờ: </p>
                <p>{e.number_rehearsal_used}</p>
              </div>
              <hr />
              <div className="flex justify-between m-4">
                <p>PT: </p>
                <p>{e.employee_name ? e.employee_name : "Chưa đăng kí"}</p>
              </div>
              <hr />
              <div className="border-gray-800 border-t-14 flex justify-between m-4">
                <p>Ghi chú: </p>
                <p style={{ fontStyle: e.description ? "" : "italic" }}>
                  {e.description ? e.description : "(Không có ghi chú)"}
                </p>
              </div>
              <hr />
            </div>
          </div>
        ))
      ) : (
        <div
          style={{
            textAlign: "center",
            fontSize: "xx-large",
            fontWeight: "bolder",
            marginTop: "2rem",
          }}
        >
          Not data
        </div>
      )}
    </div>
  );
};

export default Checkin;

{
  /* <div className="ml-4">
          <p>Mã hội viên</p>
          <p>Tên hội viên</p>
          <p>Ngày checkin</p>
          <p>Ngày checkout</p>
          <p>Trạng thái</p>
          <p>Khung giờ</p>
          <p>PT</p>
          <p>Ghi chú</p>
        </div>
        <div className="mr-4 text-right">
          <p>hv123465</p>
          <p>Vũ Tuấn Anh</p>
          <p>06-07-2023</p>
          <p>09:01:102023</p>
          <p>Out</p>
          <p>hv123456</p>
          <p>Lê Văn Linh</p>
          <p>Tự động burnshow từ book PT</p>
        </div> */
}
