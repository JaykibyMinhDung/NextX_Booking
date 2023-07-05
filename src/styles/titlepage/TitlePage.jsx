import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./title.css";

const TitlePage = (props) => {
  const dataParent = props;

  const navigate = useNavigate();

  const backHome = () => {
    if (!dataParent.navigateBack) {
      navigate("/");
    } else {
      navigate(dataParent.navigateBack);
    }
  };
  return (
    <div className="title__headers">
      <header style={{ marginBottom: "1.5rem" }}>
        <div onClick={backHome}>
          <FaArrowLeft />
        </div>
        <div>
          <p
            className={
              dataParent.title.length < 8 && dataParent.title.length > 4
                ? "ml-6"
                : dataParent.title.length < 4 && "ml-10"
              // ? "ml-10"
              // : ""
            }
          >
            {dataParent.title}
          </p>
          {dataParent?.icon && (
            <div className="title__icon">{dataParent.icon}</div>
          )}
        </div>
      </header>
    </div>
  );
};

export default TitlePage;
