// import React from "react";
import { useQuery } from "react-query";
import TitlePage from "../../../../styles/titlepage/TitlePage";
import { GET_PREFERENCE } from "../../../../constants/queryKeys";
import { getPreference } from "../../../../api/api";

const Preference = () => {
  const { data, isLoading } = useQuery([GET_PREFERENCE], () => getPreference());
  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log(data);
  return (
    <div>
      <TitlePage title={"Ưu đãi"} />
      <div>{}</div>
    </div>
  );
};

export default Preference;
