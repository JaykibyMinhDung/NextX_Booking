import { useQuery } from "react-query";
import TitlePage from "../../../../styles/titlepage/TitlePage";
import CardInbody from "./cardInbody";
import { GET_INBODY } from "../../../../constants/queryKeys";
import { getInbody } from "../../../../api/api";

const Inbody = () => {
  const { data, isLoading } = useQuery([GET_INBODY], () => getInbody());
  if (isLoading) {
    return <div>loading...</div>;
  }
  // console.log(data);
  // const dataJson = dataInbodyTest.data;
  return (
    <div>
      <TitlePage title={"Inbody"} />
      <div className="mt-16">
        {data.map((e) => (
          <CardInbody
            key={e.member_id}
            date={e.created_date}
            time={e.order}
            muscle={e.muscle_mass}
            fat={e.body_fat_mass}
            weight={e.weight}
          />
        ))}
      </div>
    </div>
  );
};

export default Inbody;
