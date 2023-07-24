import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useQuery } from "react-query";

import Header from "../components/home/header/Header";
import Banner from "../components/home/header/banner/Banner";
import Navbar from "../components/home/navbar/Navbar";
import Advertising from "../components/home/section/advertising";
import Footer from "../components/home/footer/Footer";
// import { getToken } from "../../api/api";
import { GET_CONTRACT } from "../../constants/queryKeys";
import { getContract } from "../../api/api";

// css
import "swiper/css";
import Loading from "../../spinner/Loading";

const Home = () => {
  const { isFetching, data, isError } = useQuery([GET_CONTRACT], () =>
    getContract()
  );

  if (isFetching) {
    return <Loading />;
  }
  if (isError) {
    return (
      <div className="text-center">
        <p>Thoát app và khởi động lại app</p>
      </div>
    );
  }
  // console.log(data);
  return (
    <React.Fragment>
      <Header />
      <Swiper
        className="bg-gray-100 distanceCards w-full h-full box-border"
        spaceBetween={20}
        slidesPerView={1}
      >
        {data.map((e) => (
          <SwiperSlide key={e.order_id}>
            <Banner inforContract={e} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Navbar />
      <Advertising />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
