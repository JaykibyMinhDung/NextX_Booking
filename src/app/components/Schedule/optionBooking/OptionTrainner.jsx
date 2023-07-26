// import React from "react";
import CardLine from "../../../../styles/cardTimeLine/CardLine";
import { useLocation, useNavigate } from "react-router-dom";

const Optiontrainner = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;

  return (
    <div className="ml-4">
      {data.map((e, index) => (
        <CardLine
          key={index}
          text={
            e.full_name

            // new Date(e.date_time).toLocaleDateString("en-GB")
          }
          data={"name"}
          fulldata={e}
          onClose={() => navigate("/booking")}
        />
      ))}
    </div>
  );
};

export default Optiontrainner;
