// import React from "react";
import { useQuery } from "react-query";
import TitlePage from "../../../../styles/titlepage/TitlePage";
import { GET_PREFERENCE } from "../../../../constants/queryKeys";
import { getPreference } from "../../../../api/api";
import CardPreference from "./CardPreference";

const Preference = () => {
  const { data, isLoading } = useQuery([GET_PREFERENCE], () => getPreference());
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <TitlePage title={"Ưu đãi"} />
      <div className="ml-4 mt-16 text-base font-medium">
        <span className="text-red-500">{data.length}</span> Ưu đãi
      </div>
      {data.map((e) => (
        <CardPreference
          key={e.id}
          desc={e.description}
          nameCode={e.code}
          KM={e.name}
          sale={e.f_discount}
        />
      ))}
    </div>
  );
};

export default Preference;
