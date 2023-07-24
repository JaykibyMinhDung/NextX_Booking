import React, { useState } from "react";
import "./feedback.css";
import { FaPlusCircle } from "react-icons/fa";
import { useQuery } from "react-query";
import TitlePage from "../../../../styles/titlepage/TitlePage";
import Popup from "../../../../styles/modal/Modal";
import FormFeedBack from "./FormFeedBack";
import { GET_FEEDBACK } from "../../../../constants/queryKeys";
import { getFeedback } from "../../../../api/api";
import CardPage from "../../../../styles/cardPage/CardPage";

const Feedback = () => {
  const [showPopup, setShowPopup] = useState(false);
  const { data, isLoading } = useQuery([GET_FEEDBACK], () => getFeedback());
  // console.log(data);
  const showModalHandle = () => {
    document.body.style.overflow = "hidden";
    return setShowPopup(true);
  };
  const hiddenModalHandle = () => {
    document.body.style.overflow = "auto";
    return setShowPopup(false);
  };
  if (isLoading) {
    return <div>loading...</div>;
  }
  return (
    <React.Fragment>
      {data && data.length > 1 ? (
        <div className="feedback">
          <TitlePage title={"Góp ý, Khiếu nại"} icon={null} />
          <div className="mt-16">
            {data.map((e) => (
              <CardPage
                key={e.id}
                created_at={e.created_at}
                subject={e.subject}
                content={e.content}
              />
            ))}
          </div>
          <div onClick={showModalHandle} className="feedback__add">
            <FaPlusCircle />
          </div>
        </div>
      ) : (
        <>
          <TitlePage title={"Góp ý, Khiếu nại"} icon={null} />
          {!data && (
            <img
              src="https://www.codewithrandom.com/wp-content/uploads/2022/08/Copy-of-Copy-of-Copy-of-SVG-in-HTML-10.png"
              alt=""
            />
          )}
          <div style={{ margin: "1rem", marginTop: "4rem" }}>
            <img
              src="https://www.codewithrandom.com/wp-content/uploads/2022/08/Copy-of-Copy-of-Copy-of-SVG-in-HTML-10.png"
              alt=""
            />
          </div>
          <div onClick={showModalHandle} className="feedback__add">
            <FaPlusCircle />
          </div>
        </>
      )}
      {showPopup && (
        <Popup onClose={hiddenModalHandle}>
          <FormFeedBack onClose={hiddenModalHandle} />
        </Popup>
      )}
    </React.Fragment>
  );
};

export default Feedback;
