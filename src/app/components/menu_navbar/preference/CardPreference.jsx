// import React from 'react'
import "./perference.css";

const CardPreference = (props) => {
  const dataParent = props;
  return (
    <div className="card__form" title={dataParent.desc}>
      <div className="card__preference">
        <span className="card__coupon">{dataParent.sale}%</span>
      </div>
      <div className="relative w-2/5 ml-4">
        <h2 className="font-bold">{dataParent.nameCode}</h2>
        <p>{dataParent.KM}</p>
        <button className="btn__prefer font-semibold" disabled>
          {" "}
          Đã thu thập
        </button>
      </div>
    </div>
  );
};

export default CardPreference;
