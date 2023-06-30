// import React from 'react'
import "./card.css";
import { FaRegCalendar } from "react-icons/fa";

const CardPage = (props) => {
  const dataParent = props;
  const dateProps = new Date(dataParent.created_at);
  const date =
    dateProps.getDay() +
    "/" +
    dateProps.getMonth() +
    "/" +
    dateProps.getFullYear();
  return (
    <div className="card__frame">
      <div>
        <h2>{dataParent.subject}</h2>
        <p>{dataParent.content}</p>
      </div>
      <hr />
      <div className="card__footer">
        <p style={{ color: "green", fontWeight: 700 }}>3{date}</p>
        <div className="card__footer--time">
          <FaRegCalendar />
          <p style={{ color: "gray" }}>
            {dateProps.getHours() + ":" + dateProps.getMinutes()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardPage;
