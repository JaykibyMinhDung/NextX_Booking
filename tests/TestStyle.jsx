import React, { useState } from "react";

const TestStyle = () => {
  const [test, setTest] = useState(false);
  const showHandle = () => {
    setTest(true);
  };
  const hiddenHandle = () => {
    setTest(false);
  };
  return (
    <div className="fixed z-10 left-0 top-0 w-full h-full overflow-auto bg-gray-500">
      <button onClick={showHandle}>open</button>
      <br />
      <button onClick={hiddenHandle}>off</button>
      {test ? (
        <dialog open>
          <h2>Thông báo</h2>
          <p>Bạn có chắc muốn đăng xuất</p>
          <div>
            <button>Đồng ý</button>
            <button>hủy</button>
          </div>
        </dialog>
      ) : (
        <dialog>
          <h2>Thông báo</h2>
          <p>Bạn có chắc muốn đăng xuất</p>
          <div>
            <button>Đồng ý</button>
            <button>hủy</button>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default TestStyle;
