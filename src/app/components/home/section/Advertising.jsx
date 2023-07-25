// import React from 'react'

import { useQuery } from "react-query";
import { GET_BANNER } from "../../../../constants/queryKeys";
import { getBanner } from "../../../../api/api";
import { Slide } from "react-slideshow-image";
import DefaultImage from "../../../../assets/default.jpg";
import "react-slideshow-image/dist/styles.css";
import "./advertising.css";

const Advertising = () => {
  const { data, isLoading } = useQuery([GET_BANNER], () => getBanner());
  if (isLoading) {
    return <div>Loadding...</div>;
  }

  const hrefNextX = () => {
    return;
    // window.location.assign(link);
  };
  // console.log(data);
  return (
    <nav>
      <div className="detail__backgroundimage">
        <>
          <div className="slideshow-container">
            <Slide
              autoplay={true}
              indicators={true}
              prevArrow={false}
              nextArrow={false}
            >
              {Array.isArray(data) && data.length > 1 ? (
                data.map((slideImage, index) => (
                  <div key={index} className="relative">
                    <img
                      onClick={() => hrefNextX(slideImage.link)}
                      src={
                        slideImage.picture ? slideImage.picture : DefaultImage
                      }
                      alt=""
                    />
                    <span className="totalImage">
                      {index + 1 + "/" + data.length}
                    </span>
                  </div>
                ))
              ) : (
                <img src={data ? data : DefaultImage} alt="lỗi" />
              )}
            </Slide>
          </div>
        </>
      </div>
    </nav>
  );
};

export default Advertising;
