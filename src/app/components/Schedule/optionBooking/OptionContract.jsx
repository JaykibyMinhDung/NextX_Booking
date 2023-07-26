// import React from "react";
import CardLine from "../../../../styles/cardTimeLine/CardLine";
import { useLocation, useNavigate } from "react-router-dom";

const OptionContract = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;

  return (
    <div className="ml-4">
      {data.map((e, index) => (
        <CardLine
          key={index}
          text={
            e.tableprices_name
            // new Date(e.date_time).toLocaleDateString("en-GB")
          }
          data={"PT"}
          fulldata={e}
          onClose={() => navigate("/booking")}
        />
      ))}
    </div>
  );
};

export default OptionContract;
