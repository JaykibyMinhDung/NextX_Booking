// import React from "react";
// import style from "./rating.css";
import "./ratingPT.css";

const StarRating = () => {
  return (
    <div className="starsPT">
      <form action="">
        <input
          type="radio"
          className="starPT starPT-5"
          id="starPT-5"
          name="starPT"
        />
        <label className="starPT starPT-5" htmlFor="starPT-5"></label>
        <input
          type="radio"
          className="starPT starPT-4"
          id="starPT-4"
          name="starPT"
        />
        <label className="starPT starPT-4" htmlFor="starPT-4"></label>
        <input
          type="radio"
          className="starPT starPT-3"
          id="starPT-3"
          name="starPT"
        />
        <label className="starPT starPT-3" htmlFor="starPT-3"></label>
        <input
          type="radio"
          className="starPT starPT-2"
          id="starPT-2"
          name="starPT"
        />
        <label className="starPT starPT-2" htmlFor="starPT-2"></label>
        <input
          type="radio"
          className="starPT starPT-1"
          id="starPT-1"
          name="starPT"
        />
        <label className="starPT starPT-1" htmlFor="starPT-1"></label>
      </form>
    </div>
  );
};

export default StarRating;
