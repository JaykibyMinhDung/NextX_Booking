import React from "react";
import TitlePage from "../../../../styles/titlepage/TitlePage";
import Search from "../../../../styles/search/Search";
import { FaSort } from "react-icons/fa";
import "./reserve.css";
import { useQuery } from "react-query";
import { getReserve } from "../../../../api/api";
import { GET_RESERVE } from "../../../../constants/queryKeys";
import style from "../contract/contract.module.css";
import avatarDefau from "../../../../assets/avatar.jpg";

const Reserve = () => {
  const { data } = useQuery([GET_RESERVE], () => getReserve());
  const DetailReserveHandle = () => {
    return;
    // console.log("is Updating");
  };
  const response = data.data;
  return (
    <React.Fragment>
      <TitlePage title={"Bảo lưu"} icon={<FaSort />} />
      <Search />
      <div style={{ margin: "0.5rem" }}>
        <div className="reserve__header">
          <p>
            <span className="text-blue-500 font-bold">{response.length}</span>{" "}
            hợp đồng
          </p>
          <p>
            Đã trả:{" "}
            <span className="text-red-500">
              {data.meta.summation.paymented.toLocaleString()}
            </span>
          </p>
        </div>
        {response.length < 1 ? (
          <img
            src="https://www.codewithrandom.com/wp-content/uploads/2022/08/Copy-of-Copy-of-Copy-of-SVG-in-HTML-10.png"
            alt=""
          />
        ) : (
          response.map((e) => (
            <div key={e.id}>
              <div onClick={DetailReserveHandle} className={style.card__frame}>
                <div>
                  <img
                    src={e.image ? e.image : avatarDefau}
                    width={60}
                    alt="error"
                  />
                </div>
                <div style={{ width: "80%" }}>
                  <div className={style.card__mainInfor}>
                    <div>
                      <h2>{e.price_name}</h2>
                      <p>{e.code}</p>
                      <p>{e.updated_name}</p>
                      {/* <p>{e.dayTrainer}</p> */}
                    </div>
                    <div style={{ textAlign: "center", marginRight: "0.5rem" }}>
                      <p style={{ color: "blue", fontWeight: 550 }}>
                        {data.meta.summation.paymented.toLocaleString()}đ
                      </p>
                      <button className={style.btn__contracts}>
                        {e.is_active ? "Đã kích hoạt" : "Chưa kích hoạt"}
                      </button>
                    </div>
                  </div>
                  <hr />
                  <div className={style.card__footer}>
                    <p style={{ color: "green", fontWeight: 700 }}>
                      {new Date(e.begin_date).toLocaleDateString("it-IT")}
                    </p>
                    <p
                      style={{
                        color: "red",
                        fontWeight: 700,
                        marginRight: "0.8rem",
                      }}
                    >
                      {new Date(e.end_date).toLocaleDateString("it-IT")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </React.Fragment>
  );
};

export default Reserve;
