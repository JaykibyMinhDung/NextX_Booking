// import React from "react";
// import style from "./rating.css";
import "./rating.css";

const StarRating = () => {
  return (
    <div className="stars">
      <form action="">
        <input type="radio" className="star star-5" id="star-5" name="star" />
        <label className="star star-5" htmlFor="star-5"></label>
        <input type="radio" className="star star-4" id="star-4" name="star" />
        <label className="star star-4" htmlFor="star-4"></label>
        <input type="radio" className="star star-3" id="star-3" name="star" />
        <label className="star star-3" htmlFor="star-3"></label>
        <input type="radio" className="star star-2" id="star-2" name="star" />
        <label className="star star-2" htmlFor="star-2"></label>
        <input type="radio" className="star star-1" id="star-1" name="star" />
        <label className="star star-1" htmlFor="star-1"></label>
      </form>
    </div>
  );
};

export default StarRating;
