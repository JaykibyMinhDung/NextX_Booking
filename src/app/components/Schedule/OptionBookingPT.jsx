// import React from 'react'
import CardLine from "../../../styles/cardTimeLine/CardLine";

const OptionBookingPT = (props) => {
  const option = props;
  console.log(option.chooseOption);
  return (
    <div>
      {option.chooseOption.map((e) => (
        <CardLine
          key={e.id}
          text={
            e.name
              ? e.name
              : e.tableprices_name
              ? e.tableprices_name
              : e.full_name
              ? e.full_name
              : e.date_time
          }
          data={
            e.name
              ? "Chi nhánh"
              : e.tableprices_name
              ? "PT"
              : e.full_name
              ? "name"
              : e.date_time
          }
          onClose={option.onClose}
        />
      ))}
    </div>
  );
};

export default OptionBookingPT;
