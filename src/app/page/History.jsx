// import React from "react";
import TitlePage from "../../styles/titlepage/TitlePage";
import Footer from "../components/home/footer/Footer";
import CardHistory from "../components/log/CardHistory";
import { useQuery } from "react-query";
import { getLogContractBooking } from "../../api/api";
import { GET_HISTORYBOOKING } from "../../constants/queryKeys";

const History = () => {
  const { data, isLoading } = useQuery([GET_HISTORYBOOKING], () =>
    getLogContractBooking()
  );
  if (isLoading) {
    return <div>loading...</div>;
  }
  console.log(data);
  return (
    <div>
      <TitlePage title={"Lịch sử"} />
      {data.map((e) => (
        <CardHistory key={e.id} data={e} />
      ))}
      <Footer />
    </div>
  );
};

export default History;
