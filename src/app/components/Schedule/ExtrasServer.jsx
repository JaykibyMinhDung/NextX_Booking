// import React from "react";
import CardLine from "../../../styles/cardTimeLine/CardLine";
import { useLocation, useNavigate } from "react-router-dom";

const ExtrasServer = () => {
  const location = useLocation();
  const data = location.state;
  const navigate = useNavigate();
  return (
    <div className="ml-4">
      {data.map((e) => (
        <CardLine
          key={e.id}
          text={e.name}
          title={"ExtraServiceBooking"}
          onClose={() => navigate("/booking/resgiterbooking")}
        />
      ))}
    </div>
  );
};

export default ExtrasServer;
