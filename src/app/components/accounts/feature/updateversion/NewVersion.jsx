import React from "react";

const NewVersion = (props) => {
  const dataParent = props;
  return (
    <React.Fragment>
      <div className="text-center pb-3 border-gray-300 border-b-2">
        <h2 className="text-xl text-[#3B9254FF] font-bold mb-4">
          Cảm ơn đã tin tưởng và sử dụng dịch vụ NextX
        </h2>
        <p className="text-base">Hiện tại đây là phiên bản mới nhất!</p>
      </div>
      <div className="text-center mt-1">
        <button onClick={dataParent.onClose} className=" text-xl">
          Xác nhận
        </button>
      </div>
    </React.Fragment>
  );
};

export default NewVersion;
