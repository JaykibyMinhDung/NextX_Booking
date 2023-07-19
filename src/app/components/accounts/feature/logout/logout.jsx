import React from "react";

const SignOutWeb = (props) => {
  const dataParrent = props;
  return (
    <React.Fragment>
      <div className="text-center text-xl">
        <h2 className="font-bold mb-2">Thông báo</h2>
        <p>Bạn có chắc muốn đăng xuất?</p>
      </div>
      <div
        style={{ marginTop: "50px", marginLeft: "10px" }}
        className="w-full text-lg flex items-center justify-evenly"
      >
        <button onClick={dataParrent.onClose} className="text-blue-500">
          Hủy
        </button>
        <button onClick={dataParrent.logout} className="text-red-500">
          Đồng ý
        </button>
      </div>
    </React.Fragment>
  );
};

export default SignOutWeb;
