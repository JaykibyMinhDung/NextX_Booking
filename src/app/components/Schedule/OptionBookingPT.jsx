// import React from 'react'
import CardLine from "../../../styles/cardTimeLine/CardLine";

const OptionBookingPT = (props) => {
  const option = props;
  // console.log(option.chooseOption);

  return (
    <div>
      {option.chooseOption ? (
        option.chooseOption.map((e, index) => (
          <CardLine
            key={index}
            text={
              e.name
                ? e.name
                : e.tableprices_name
                ? e.tableprices_name
                : e.full_name
                ? e.full_name
                : e
              // new Date(e.date_time).toLocaleDateString("en-GB")
            }
            data={
              e.name
                ? "Chi nhánh"
                : e.tableprices_name
                ? "PT"
                : e.full_name
                ? "name"
                : "Date"
            }
            fulldata={e}
            onClose={option.onClose}
          />
        ))
      ) : (
        <div className="text-center">Chưa có dữ liệu</div>
      )}
    </div>
  );
};

export default OptionBookingPT;
