// import React from "react";
import CardLine from "../../../styles/cardTimeLine/CardLine";
import { useLocation, useNavigate } from "react-router-dom";

const ExtrasPreference = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;

  return (
    <div className="flex justify-center">
      {data.map((e) => (
        <CardLine
          key={e.id}
          text={e.code}
          data={e}
          title={"preference"}
          discount={e.total_discount}
          onClose={() => navigate("/membership/Chi%20nhánh%20chính/payment")}
        />
      ))}
    </div>
  );
};

export default ExtrasPreference;
