// import React from "react";
import TitlePage from "../../styles/titlepage/TitlePage";
import Footer from "../components/home/footer/Footer";
import CardHistory from "../components/log/CardHistory";
import { useQuery } from "react-query";
import { getLogContractBooking } from "../../api/api";
import { GET_HISTORYBOOKING } from "../../constants/queryKeys";
import Loading from "../../spinner/Loading";
import NotFound from "../../errors/404";

const History = () => {
  const { data, isFetching, isError } = useQuery([GET_HISTORYBOOKING], () =>
    getLogContractBooking()
  );
  if (isFetching) {
    return <Loading />;
  }
  if (isError) {
    <NotFound />;
  }
  // console.log(data);
  return (
    <div>
      <TitlePage title={"Lịch sử"} />
      <div className="mt-16">
        {data ? (
          data.map((e) => <CardHistory key={e.id} data={e} />)
        ) : (
          <img
            src="https://www.codewithrandom.com/wp-content/uploads/2022/08/Copy-of-Copy-of-Copy-of-SVG-in-HTML-10.png"
            alt=""
          />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default History;
