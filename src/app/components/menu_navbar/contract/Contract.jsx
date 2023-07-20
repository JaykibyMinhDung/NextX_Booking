// import React from "react";
import { useQuery } from "react-query";
import TitlePage from "../../../../styles/titlepage/TitlePage";
import { GET_CONTRACT } from "../../../../constants/queryKeys";
import { getContract } from "../../../../api/api";
import CardPageContracts from "./CardPageContracts";
// import CardPage from "../../../../styles/cardPage/CardPage";
import { FaChevronDown } from "react-icons/fa";
import style from "./contract.module.css";
import { useNavigate } from "react-router-dom";

const Contract = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useQuery([GET_CONTRACT], () => getContract());
  if (isLoading) {
    return <div>loading...</div>;
  }
  console.log(data);
  const dividedPrice = data.map((e) => Number(e.total_money_payment));
  const totalPrice = dividedPrice.reduce(
    (prePrice, afterPrice) => Number(prePrice) + Number(afterPrice),
    0
  );
  const navigateDetail = (prcode) => {
    navigate(`/contract/${prcode}`, {
      state: { data, prcode },
    });
  };
  // console.log(dividedPrice);
  return (
    <div>
      <TitlePage title={"Hợp đồng"} />
      <div className={style.contracts__header}>
        <p>
          <span className="text-green-500 font-bold text-base">
            {data.length}
          </span>{" "}
          hợp đồng
        </p>
        <div className={style.contracts__totalPrice}>
          <span>
            Đã trả: <b>{totalPrice.toLocaleString()}đ</b>
          </span>
          <button>
            <FaChevronDown />
          </button>
        </div>
      </div>
      {data.map((e) => (
        <CardPageContracts
          onClick={() => navigateDetail(e.prcode_text)}
          key={e.order_id}
          image={e.member_avatar}
          created_at={e.begin_date}
          subject={e.tableprices_name}
          name={e.member_full_name}
          branch={e.branch.name}
          dayTrainer={e.rehearsal_status}
          ended_at={e.end_date}
          price={Number(e.total_money_payment)}
          expire={e.order_status_note}
        />
      ))}
    </div>
  );
};

export default Contract;
