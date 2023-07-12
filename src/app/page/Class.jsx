// import React from "react";
import TitlePage from "../../styles/titlepage/TitlePage";
import Footer from "../components/home/footer/Footer";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import ClassLoyal from "../components/class/classloyal/ClassLoyal";
import HeaderClass from "../components/class/header/HeaderClass";
import { useQuery } from "react-query";
import { GET_CLASS } from "../../constants/queryKeys";
import { getClass } from "../../api/api";

const Class = () => {
  const { data, isLoading } = useQuery([GET_CLASS], () => getClass());
  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log(data);
  return (
    <div>
      <TitlePage title={"Lớp học"} icon={null} />
      <div className="flex items-center justify-between mx-4 mt-16 mb-3 bg-slate-100 p-3 rounded-2xl">
        <div className="flex items-center">
          <FaMapMarkerAlt />
          <p className="ml-3">Chi nhánh</p>
        </div>
        <div>
          <FaChevronRight />
        </div>
      </div>
      <HeaderClass />
      {data.map((e, index) => (
        <ClassLoyal
          key={index}
          hour={e.time}
          nameclass={e.books.class_name}
          branch={e.books.branch_name}
          namePT={e.books.employee_name}
          numbook={e.books.num_booked}
          numTotal={e.books.num_enabled}
        />
      ))}
      <Footer />
    </div>
  );
};

export default Class;
