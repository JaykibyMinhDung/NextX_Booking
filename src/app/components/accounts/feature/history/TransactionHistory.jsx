import React from "react";
import { useQuery } from "react-query";
import { GET_HISTORY } from "../../../../../constants/queryKeys";
import { getHistory } from "../../../../../api/api";
import TitlePage from "../../../../../styles/titlepage/TitlePage";
import Search from "../../../../../styles/search/Search";
import CardTransaction from "../../../../../styles/cardtransition/CardTransition";

const TransactionHistory = () => {
  const { data } = useQuery([GET_HISTORY], () => getHistory());
  console.log(data);
  return (
    <React.Fragment>
      <TitlePage
        title={"Lịch sử giao dịch"}
        icon={null}
        navigateBack={"/account"}
      />
      <Search />
      <div className="ml-3 mt-4">
        <p>
          <span className="font-bold text-[#3B9254FF]">{data.length}</span> giao
          dịch
        </p>
      </div>
      {data.map((e, index) => (
        <CardTransaction
          key={index}
          subject={e.price_name}
          voucher={e.voucher ? e.voucher.name : null}
          voucher_discount={e.voucher ? e.voucher.total_discount : null}
          total_price={e.table_price.total_price.toLocaleString("en-US")}
          total_price_adddiscount={
            e.voucher
              ? e.table_price.total_price - e.voucher.total_discount
              : e.table_price.total_price
          }
          nameMember={e.member_name}
          status={e.status}
          date={e.created_at}
          time={e.created_at}
        />
      ))}
    </React.Fragment>
  );
};

export default TransactionHistory;
