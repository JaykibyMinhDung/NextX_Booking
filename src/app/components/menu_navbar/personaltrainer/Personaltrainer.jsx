import React from "react";
import "./personal.css";
import TitlePage from "../../../../styles/titlepage/TitlePage";
import Search from "../../../../styles/search/Search";
import { useQuery } from "react-query";
import { getPersonalTrainer } from "../../../../api/api";
import { GET_PT } from "../../../../constants/queryKeys";

const Personaltrainer = () => {
  const { data, isLoading } = useQuery([GET_PT], () => getPersonalTrainer());
  if (isLoading) {
    return <div>loading...</div>;
  }
  console.log(data);
  const avatar =
    "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=";
  return (
    <React.Fragment>
      <TitlePage title={"PT"} />
      <Search location={true} />
      <div className="box">
        <p style={{ marginLeft: "1rem" }}>3 PT</p>
        {data &&
          data.map((e) => (
            <>
              <div className="personal__card">
                <div className="personal__card--infor">
                  <img
                    src={e.avatar ? e.avatar : avatar}
                    // width={"50%"}
                    alt=""
                  />
                  <div>
                    <h2 style={{ fontWeight: 700 }}>{e.full_name}</h2>
                    <p>{e.branch_name}</p>
                    <p>{e.pt_rating ? e.pt_rating : 0} sao</p>
                  </div>
                </div>
                <button>Đăng kí</button>
              </div>
            </>
          ))}
      </div>
    </React.Fragment>
  );
};

export default Personaltrainer;
