// import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./app/page/Home";
import Notification from "./app/components/notification/Notification";
import ClassLoyal from "./app/components/class/ClassLoyal";
import Membership from "./app/components/menu_navbar/membership/Membership";
// css
import "./App.css";

import Extend from "./app/components/menu_navbar/extend_package/Extend";
import Reserve from "./app/components/menu_navbar/reserve/Reserve";
import Feedback from "./app/components/menu_navbar/feedback/Feedback";
import CardPage from "./styles/cardPage/CardPage";
import Personaltrainer from "./app/components/menu_navbar/personaltrainer/Personaltrainer";
import Inbody from "./app/components/menu_navbar/inbody/Inbody";
import Preference from "./app/components/menu_navbar/preference/Preference";
import Contract from "./app/components/menu_navbar/contract/contract";
import Branch from "./app/components/menu_navbar/personaltrainer/Branch";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/extend" element={<Extend />} />
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/personaltrainer" element={<Personaltrainer />} />
          <Route path="/branch" element={<Branch />} />
          <Route path="/inbody" element={<Inbody />} />
          <Route path="/preference" element={<Preference />} />
          <Route path="/contract" element={<Contract />} />
          <Route path="/class" element={<ClassLoyal />} />
          {/* test */}
          <Route path="/style" element={<CardPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
