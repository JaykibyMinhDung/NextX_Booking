import "./inbody.css";

const CardInbody = (props) => {
  const dataParents = props;
  return (
    <div className="inbody__card">
      <div className="inbody__header">
        <p>Ngày tạo</p>
        <p style={{ color: "blue", textAlign: "revert" }}>{dataParents.date}</p>
      </div>
      <hr />
      <div className="inbody__header">
        <div className="bold__text">
          <p>Lần đo</p>
          <p>Khối lượng cơ</p>
          <p>Khối lượng mỡ</p>
          <p>Cân nặng</p>
        </div>
        <div>
          <p>{dataParents.time}</p>
          <p>{dataParents.muscle}</p>
          <p>{dataParents.fat}</p>
          <p>{dataParents.weight}</p>
        </div>
      </div>
    </div>
  );
};

export default CardInbody;
