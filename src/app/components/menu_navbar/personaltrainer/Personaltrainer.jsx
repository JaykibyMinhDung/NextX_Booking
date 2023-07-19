import React from "react";
import "./personal.css";
import TitlePage from "../../../../styles/titlepage/TitlePage";
import Search from "../../../../styles/search/Search";
import { useQuery } from "react-query";
import { getPersonalTrainer } from "../../../../api/api";
import { GET_PT } from "../../../../constants/queryKeys";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { BookingPTPayment } from "../../../../store/recoil/store";
// import { FaRegStar } from "react-icons/fa";
// import { FaStar } from "react-icons/fa";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

const Personaltrainer = () => {
  const { data, isLoading } = useQuery([GET_PT], () => getPersonalTrainer());
  const setDataPaymentPersonalTrainer = useSetRecoilState(BookingPTPayment);
  const navigate = useNavigate();
  if (isLoading) {
    return <div>loading...</div>;
  }
  // console.log(data);
  const avatar =
    "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=";
  const RegisterHandle = (datapersolnaltrainer, branch) => {
    setDataPaymentPersonalTrainer(datapersolnaltrainer);
    navigate(`/membership/${branch}`);
  };
  return (
    <React.Fragment>
      <TitlePage title={"PT"} icon={null} />
      <Search location={true} />
      <div className="box">
        <p style={{ marginLeft: "1rem" }}>
          {" "}
          <span className="font-semibold text-green-500">{data.length}</span> PT
        </p>
        {!data && (
          <img
            src="https://www.codewithrandom.com/wp-content/uploads/2022/08/Copy-of-Copy-of-Copy-of-SVG-in-HTML-10.png"
            alt=""
          />
        )}
        {data &&
          data.map((e) => (
            <div key={e.code} className="personal__card">
              <div className="personal__card--infor">
                <img
                  src={e.avatar ? e.avatar : avatar}
                  // width={"50%"}
                  alt=""
                />
                <div>
                  <h2 style={{ fontWeight: 700 }}>{e.full_name}</h2>
                  <p>{e.branch_name}</p>
                  <Box>
                    <Rating
                      name="simple-controlled"
                      defaultValue={2.5}
                      precision={0.5}
                      value={e.pt_rating}
                      readOnly
                    />
                  </Box>
                  {/* <p>{e.pt_rating ? e.pt_rating : 0} sao</p> */}
                  <p>(64 reviews)</p>
                </div>
              </div>
              <button onClick={() => RegisterHandle(e, e.branch_name)}>
                Đăng kí
              </button>
            </div>
          ))}
      </div>
    </React.Fragment>
  );
};

export default Personaltrainer;
