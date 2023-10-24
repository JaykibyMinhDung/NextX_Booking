import React from "react";
import "./button.css";
import { useSetRecoilState } from "recoil"
import { SwitchFaceId } from "../../store/recoil/store";
import { useEffect } from "react";
// import { useMemo } from "react";

const ButtonChange = ({ title }) => {
  const setStateSwitchFaceId = useSetRecoilState(SwitchFaceId)
  console.log(title)
  // const [checked, setCheck] = React.useState(false)
  const handleChange = () => {
    if (title === "Night mode") {
      setStateSwitchFaceId(title)
      // return setCheck(!checked)
    }
  }
  return (
    <React.Fragment>
      <label className="switch">
        {/* checked={checked} */}
        <input type="checkbox" onChange={handleChange} />
        <span className="slider round"></span>
      </label>
    </React.Fragment>
  );
};

export default ButtonChange;


  // Do cái này đang dùng state chung nên khi ta thay đổi thao tác ở một cáu thì cái switch chung bên dưới cũng sẽ được sủ dụng
  // useEffect(() => {
  //   if (checked) {
  //   }
  // }, [checked])