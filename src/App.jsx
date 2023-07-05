// import { useState } from "react";
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
import BranchMember from "./app/components/menu_navbar/membership/branchMember";
import TestStyle from "../tests/TestStyle";
// import Booking from "./app/page/Booking"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />

          {/* header */}
          <Route path="/notification" element={<Notification />} />

          {/* menu article */}
          <Route path="/membership" element={<Membership />} />
          <Route path="/membership/:branch" element={<BranchMember />} />
          <Route path="/extend" element={<Extend />} />
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/personaltrainer" element={<Personaltrainer />} />
          <Route path="/branch" element={<Branch />} />
          <Route path="/inbody" element={<Inbody />} />
          <Route path="/preference" element={<Preference />} />
          <Route path="/contract" element={<Contract />} />
          <Route path="/contract/:id" element={<DetailContracts />} />

          {/* footer menu */}
          <Route path="/class" element={<Class />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/log" element={<History />} />
          <Route path="/account" element={<User />} />

          {/* test */}
          <Route path="/style" element={<TestStyle />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
