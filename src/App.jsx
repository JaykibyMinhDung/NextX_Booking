import {
  useEffect,
  //  useState
} from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// css
import "./App.css";

// components
import Home from "./app/page/Home";
import Notification from "./app/components/notification/Notification";
import Membership from "./app/components/menu_navbar/membership/Membership";

import Extend from "./app/components/menu_navbar/extend_package/Extend";
import Reserve from "./app/components/menu_navbar/reserve/Reserve";
import Feedback from "./app/components/menu_navbar/feedback/Feedback";
import Personaltrainer from "./app/components/menu_navbar/personaltrainer/Personaltrainer";
import Inbody from "./app/components/menu_navbar/inbody/Inbody";
import Preference from "./app/components/menu_navbar/preference/Preference";
import Contract from "./app/components/menu_navbar/contract/contract";
import Branch from "./app/components/menu_navbar/personaltrainer/Branch";

import DetailContracts from "./app/components/menu_navbar/contract/detail/DetailContracts";
// footer
import Class from "./app/page/Class";
import Booking from "./app/page/Booking";
import History from "./app/page/History";
import User from "./app/page/User";
import NotFound from "./errors/404";
import BranchMember from "./app/components/menu_navbar/membership/BranchMember";
// import TestStyle from "../tests/TestStyle";
import ButtonChange from "./styles/ButtonChange/ButtonChange";
import Login from "./authentication/login/Login";
import Register from "./authentication/register/Register";
// import Booking from "./app/page/Booking"
import HomeLogin from "./authentication/home/HomeLogin";

import { getToken } from "./api/api";
import Payment from "./app/components/payment/Payment";

import {
  useRecoilState,
  //  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { Logout, isLogin } from "./store/recoil/authenticate";
import FormResgisterBooking from "./app/components/Schedule/FormResgisterBooking";
import CheckinPTHistory from "./app/components/accounts/feature/history/CheckinPTHistory";
import TransactionHistory from "./app/components/accounts/feature/history/TransactionHistory";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";

function App() {
  // const getStateLogOut = useRecoilValue(Logout);
  // const [isAuth, setisAuth] = useState(false);
  const [isAuth, setIsAuth] = useRecoilState(isLogin);
  // const [isLoading, setisLoading] = useState(false);
  // const navigate = useNavigate();

  const setStateGetOut = useSetRecoilState(Logout);
  // const authRoute = JSON.parse(localStorage.getItem("tenant_packs"));
  // const logout = () => {
  //   localStorage.removeItem("tenant_packs");
  //   setisAuth(null);
  // };
  const LoginHandle = async (authData) => {
    // event.preventDefault();
    // setisLoading(true);
    const values = authData;
    values.tenant_code = "demox";
    // console.log(values);
    getToken(values)
      .then((results) => {
        // return localStorage.setItem("tenant_packs", JSON.stringify(results));
        setIsAuth(results);
        // console.log(results);
      })
      .then(() => {
        setStateGetOut(true);
        // setIsAuth(JSON.parse(localStorage.getItem("tenant_packs")));
        // setisLoading(false);
      })
      // .then(() => {
      //   setTimeout(() => navigate("/homelogin"), 3000);
      // })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    async function getUser() {
      const result = await getToken();
      setIsAuth(result);
    }
    getUser();
    // if (authRoute) {
    //   return setIsAuth(true);
    // }
    // // Cái này cũng đang không lâys được dư liệu từ local, kiểm tra lại
    // if (!authRoute) {
    //   return setIsAuth(null);
    // }
  }, [setIsAuth]);
  // console.log(isAuth);

  // if (isLoading) {
  //   return <div className="text-center font-semibold text-3xl">loading...</div>;
  // }
  return (
    <>
      <BrowserRouter>
        {/* {isAuth || authRoute ? ( */}
        <Routes>
          {/* {isAuth ? ( */}
          <>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home />} />

            {/* header */}
            <Route path="/notification" element={<Notification />} />

            {/* menu article */}
            <Route path="/membership" element={<Membership />} />
            <Route path="/membership/:branch" element={<BranchMember />} />
            <Route path="/membership/:branch/payment" element={<Payment />} />
            <Route path="/extend" element={<Extend />} />
            <Route path="/reserve" element={<Reserve />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/personaltrainer" element={<Personaltrainer />} />
            <Route path="/branch" element={<Branch />} />
            <Route path="/inbody" element={<Inbody />} />
            <Route path="/preference" element={<Preference />} />
            <Route path="/contract" element={<Contract />} />
            <Route path="/contract/:id" element={<DetailContracts />} />
            <Route
              path="/booking/resgiterbooking"
              element={<FormResgisterBooking />}
            />
            <Route path="/account/checkinpt" element={<CheckinPTHistory />} />
            <Route
              path="/account/transaction"
              element={<TransactionHistory />}
            />

            {/* footer menu */}
            <Route path="/class" element={<Class />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/log" element={<History />} />
            <Route path="/account" element={<User />} />
            <Route path="/style" element={<ButtonChange />} />
          </>
          {/* ) : ( */}
          {/* // </Routes>
            // <Routes> */}
          <>
            {/* Authentication */}
            {/* <Route path="/homelogin" element={<HomeLogin />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/" element={<Login LoginHandle={LoginHandle} />} />
              <Route path="/register" element={<Register />} /> */}
          </>
          {/* )} */}
        </Routes>
        {/* test */}
      </BrowserRouter>
    </>
  );
}

export default App;
