// import React from "react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

import TitlePage from "../../styles/titlepage/TitlePage";
import Footer from "../components/home/footer/Footer";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import ClassLoyal from "../components/class/classloyal/ClassLoyal";
import HeaderClass from "../components/class/header/HeaderClass";
import { useQuery, useMutation } from "react-query";
import { GET_CLASS } from "../../constants/queryKeys";
import { getClass } from "../../api/api";
import { useRecoilValue } from "recoil";
import { updatedDateClass } from "../../store/recoil/store";
import Loading from "../../spinner/Loading";
import NotFound from "../../errors/404";
import { useEffect, useState } from "react";

const Class = () => {
  const dateClass = useRecoilValue(updatedDateClass);
  const { data, isFetching, isError } = useQuery([GET_CLASS], () =>
    getClass(dateClass)
  );
  const [getDataDate, setGetDataDate] = useState(data);

  const mutation = useMutation({
    mutationFn: (newSchedule) => getClass(newSchedule),
    onSuccess: async (data2) => {
      setGetDataDate(data2);
    },
    onError: (err) => {
      // toast.error(err);
      return;
    },
  });

  useEffect(() => {
    mutation.mutate(dateClass);
  }, [dateClass]);

  if (isFetching) {
    return <Loading />;
  }
  // if (mutation.isSuccess) {
  //   return <Loading />;
  // }
  if (isError) {
    <NotFound />;
  }
  return (
    <div>
      <TitlePage
        title={"Lớp học"}
        // icon={null}
      />
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
      {/* <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      /> */}
      {getDataDate.map((e, index) => (
        <ClassLoyal
          key={index}
          id={e.books.id}
          hour={e.time}
          startHour={e.books.start}
          endHour={e.books.end}
          branch={e.books.branch_name}
          branch_name={e.books.branch_name}
          branch_id={e.books.branch_id}
          nameclass={e.books.class_name}
          category={e.books.category_name}
          namePT={e.books.employee_name}
          numbook={e.books.num_booked}
          numTotal={e.books.num_enabled}
          class_id={e.books.class_id}
          employee_id={e.books.employee_id}
          enabled={e.books.enabled}
          picture={e.books.employee_avatar}
          fulldata={e.books}
        />
      ))}
      <Footer />
    </div>
  );
};

export default Class;
