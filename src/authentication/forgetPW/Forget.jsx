// import React from 'react'

import { useState } from "react";

const Forget = () => {
  const [changeEmail, setChangEmail] = useState();
  const changeEmailHandle = (event) => {
    event.preventDefault();
    setChangEmail(event.target.value);
  };
  return (
    <div>
      <h2>Điền thông tin của bạn</h2>
      <p>Email dùng để đăng nhập tài khoản NextX</p>
      <form action="">
        <label htmlFor="email">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          className=""
          type="email"
          placeholder="email"
          name="email"
          onChange={changeEmailHandle}
          value={changeEmail}
        />
        <button className="btn">Gửi code</button>
      </form>
    </div>
  );
};

export default Forget;
