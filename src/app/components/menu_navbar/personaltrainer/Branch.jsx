// import React from 'react'
import TitlePage from "../../../../styles/titlepage/TitlePage";
import Search from "../../../../styles/search/Search";
import BarPage from "../../../../styles/barPage/BarPage";
import { FaMapMarkerAlt } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

const Branch = () => {
  // const navigate = useNavigate()
  return (
    <div>
      <TitlePage
        title={"Chọn chi nhánh"}
        navigateBack={"/personaltrainer"}
        icon={null}
      />
      <Search />
      <div>
        <BarPage icon={FaMapMarkerAlt} text={"Chi nhánh chính"} />
      </div>
    </div>
  );
};

export default Branch;
