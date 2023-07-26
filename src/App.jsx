import TestStyle from "../tests/TestStyle";
// import Login from "./authentication/login/Login";
// import Register from "./authentication/register/Register";
// import Booking from "./app/page/Booking"
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";

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
import ButtonChange from "./styles/ButtonChange/ButtonChange";
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
import Login2 from "./authentication/login/Login2";
import Forget from "./authentication/forgetPW/Forget";
import Resgister2 from "./authentication/register/Resgister2";
import CodeVertify from "./authentication/register/vertification/CodeVertify";
import DetailHistory from "./app/components/log/DetailHistory/DetailHistory";
import DetailYoga from "./app/components/class/detailyoga/DetailYoga";
import ExtrasPreference from "./app/components/payment/ExtrasPreference";
import FormFeedBack from "./app/components/menu_navbar/feedback/FormFeedBack";
import OptionBranch from "./app/components/Schedule/optionBooking/OptionBranch";
import OptionContract from "./app/components/Schedule/optionBooking/OptionContract";
import Optiontrainner from "./app/components/Schedule/optionBooking/OptionTrainner";
import OptionDate from "./app/components/Schedule/optionBooking/OptionDate";
import ExtrasServer from "./app/components/Schedule/ExtrasServer";
import RatingEmployee from "./app/components/accounts/feature/history/ratingStaff/RatingEmployee";

function App() {
  // const getStateLogOut = useRecoilValue(Logout);
  // const [isAuth, setisAuth] = useState(false);
  // const [isLoading, setisLoading] = useState(false);
  // const navigate = useNavigate();

  const [activeErr, setActiveErr] = useState(false);
  const [PWError, setPWErroe] = useState("");
  const [isAuth, setIsAuth] = useRecoilState(isLogin);
  const setStateGetOut = useSetRecoilState(Logout);

  // const authRoute = JSON.parse(localStorage.getItem("tenant_packs"));
  // const logout = () => {
  //   localStorage.removeItem("tenant_packs");
  //   setisAuth(null);
  // };

  const LoginHandle = async (event, authData) => {
    // setisLoading(true);
    // console.log(values);
    event.preventDefault();
    const values = authData;
    if (!values.username && !values.password) {
      setActiveErr(true);
      return null;
    }
    values.tenant_code = "demox";
    getToken(values)
      .then((results) => {
        // return localStorage.setItem("tenant_packs", JSON.stringify(results));
        // console.log(results);
        if (results.status_code === 1) {
          // setActiveErr(true);
          setPWErroe(results.message);
          return null;
        }

        setIsAuth(results);
      })
      .then(() => {
        setStateGetOut(true);
        // setIsAuth(JSON.parse(localStorage.getItem("tenant_packs")));
        // setisLoading(false);
      })
      .catch(() => {
        setActiveErr(true);
        console.log("Quý khách đã gặp lỗi trong quá trình nhập dữ liệu");
      });
  };
  useEffect(() => {
    async function getUser() {
      const result = await getToken();
      setIsAuth(result);
    }
    // console.log(isAuth);
    getUser();
  }, [setIsAuth]);
  return (
    // basename={`/zapps/${window.APP_ID}`}" baseURL="/zapps/[ZALO_MINI_APP_ID]"
    <>
      <BrowserRouter>
        {/* basepath="/zapps/[434835250971250077]"*/}
        <Routes>
          {isAuth?.status_code !== 1 && isAuth ? (
            <>
              <Route path="*" element={<NotFound />} />
              <Route path="/" element={<Home />} />

              {/* header */}
              <Route path="/notification" element={<Notification />} />

              {/* menu article */}
              <Route path="/membership" element={<Membership />} />
              <Route path="/membership/:branch" element={<BranchMember />} />
              <Route path="/membership/:branch/payment" element={<Payment />} />
              <Route
                path="/membership/:branch/payment/preferencepay"
                element={<ExtrasPreference />}
              />
              <Route path="/extend" element={<Extend />} />
              <Route path="/reserve" element={<Reserve />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/feedback/formfeedback" element={<FormFeedBack />} />
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
              <Route path="/log/cancel" element={<DetailHistory />} />
              <Route path="/class/bookingclass" element={<DetailYoga />} />

              {/* footer menu */}
              <Route path="/class" element={<Class />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/booking/optionbarnch" element={<OptionBranch />} />
              <Route
                path="/booking/optioncontract"
                element={<OptionContract />}
              />
              <Route
                path="/booking/optiontrainner"
                element={<Optiontrainner />}
              />
              <Route path="/booking/optiondate" element={<OptionDate />} />
              <Route
                path="/booking/optiondate/ExtrasServal"
                element={<ExtrasServer />}
              />
              <Route path="/log" element={<History />} />
              <Route path="/account" element={<User />} />
              <Route
                path="/account/checkinpt/:id"
                element={<RatingEmployee />}
              />
              <Route path="/style" element={<ButtonChange />} />
              <Route path="/testmodal" element={<TestStyle />} />
            </>
          ) : (
            <>
              {/* Authentication */}
              <Route path="*" element={<HomeLogin />} />
              {/* <Route path="*" element={<NotFound />} /> */}
              {/* <Route path="/" element={<Login LoginHandle={LoginHandle} />} /> */}
              <Route
                path="/"
                element={
                  <Login2
                    LoginHandle={LoginHandle}
                    active={activeErr}
                    WrongPass={PWError}
                  />
                }
              />
              <Route path="/register" element={<Resgister2 />} />
              <Route path="/vertifycation" element={<CodeVertify />} />
              <Route path="/forgetpassword" element={<Forget />} />
            </>
          )}
        </Routes>
        {/* test */}
      </BrowserRouter>
    </>
  );
}

export default App;
