// import React from "react";
import { FaCheck } from "react-icons/fa";
import { useQuery } from "react-query";
import { GET_TIMETABLES } from "../../../../../constants/queryKeys";
import { getTimeTables } from "../../../../../api/api";
import Loading from "../../../../../spinner/Loading";

const TimeTables = (props) => {
  const order_id = props;
  const { data, isFetching } = useQuery([GET_TIMETABLES], () =>
    getTimeTables(order_id.id)
  );
  if (isFetching) {
    return <Loading />;
  }
  // console.log(data);
  return (
    <div>
      <div
        style={{ borderBottom: "20px solid rgb(235, 235, 235)" }}
        className="w-full my-4"
      >
        {data.branch_rehearsal.map((e, index) => (
          <>
            <div key={index} className="flex justify-between m-4">
              <p>Chi nhánh </p>
              <p className="text-blue-600 font-semibold"> {e.branch_name}</p>
            </div>
            <hr />
            <div className="flex justify-between m-4">
              <p>Khung giờ </p>
              <p>{e.rehearsal_name}</p>
            </div>
            <hr />
            <div className="flex justify-between m-4">
              <p>Tên phòng </p>
              <p>{e.room_name}</p>
            </div>
            <hr />
            <div className="flex justify-between m-4">
              <p>Ngày bắt đầu: </p>
              <p>{e.begin_date}</p>
            </div>
            <hr />
            <div className="flex justify-between m-4">
              <p>Ngày kết thúc </p>
              <p>{e.end_date}</p>
            </div>
            <hr />
            <div className="flex justify-between m-4">
              <p>Giờ vào </p>
              <p>{e.time_in}</p>
            </div>
            <hr />
            <div className="flex justify-between m-4">
              <p>Giờ ra </p>
              <p>{e.time_out}</p>
            </div>
            <hr />
            <div className="flex justify-between m-4">
              {e.is_mon ? (
                <>
                  <p>Thứ 2 </p>
                  <FaCheck style={{ color: "green" }} />
                </>
              ) : (
                ""
              )}
            </div>
            <div className="flex justify-between m-4">
              {e.is_tu ? (
                <>
                  <p>Thứ 3 </p>
                  <FaCheck style={{ color: "green" }} />
                </>
              ) : (
                ""
              )}
            </div>
            <div className="flex justify-between m-4">
              {e.is_we ? (
                <>
                  <p>Thứ 4 </p>
                  <FaCheck style={{ color: "green" }} />
                </>
              ) : (
                ""
              )}
            </div>
            <div className="flex justify-between m-4">
              {e.is_th ? (
                <>
                  <p>Thứ 5 </p>
                  <FaCheck style={{ color: "green" }} />
                </>
              ) : (
                ""
              )}
            </div>
            <div className="flex justify-between m-4">
              {e.is_fr ? (
                <>
                  <p>Thứ 6 </p>
                  <FaCheck style={{ color: "green" }} />
                </>
              ) : (
                ""
              )}
            </div>
            <div className="flex justify-between m-4">
              {e.is_sa ? (
                <>
                  <p>Thứ 7 </p>
                  <FaCheck style={{ color: "green" }} />
                </>
              ) : (
                ""
              )}
            </div>
            <div className="flex justify-between m-4">
              {e.is_sun ? (
                <>
                  <p>Chủ nhât </p>
                  <FaCheck style={{ color: "green" }} />
                </>
              ) : (
                ""
              )}
            </div>
            <div className="flex justify-between m-4">
              {e.is_all ? (
                <>
                  <p>Cả tuần </p>
                  <FaCheck style={{ color: "green" }} />
                </>
              ) : (
                ""
              )}
            </div>
            <hr />
          </>
        ))}
      </div>
    </div>
  );
};

export default TimeTables;
