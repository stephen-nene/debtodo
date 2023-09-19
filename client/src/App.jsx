import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import Welcome from "./components/Welcome";
import Auth from "./components/Auth/Auth";
import { HomeBox } from "./components/timebox/HomeBox";
import { HomeDebt } from "./components/debts/HomeDebts";
import Error404 from './components/Error404.jsx';

// import "./assets/styles/App.css";

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState(false);

  // useEffect(() => {
  //   if (user) {
  //     navigate("/");
  //   } else {
  //     navigate("/auth");
  //   }
  // }, [user, navigate]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/debts" element={<HomeDebt />} />
        <Route path="/timebox" element={<HomeBox />} />
        <Route path="/auth" element={<Auth />} />
        <Route path='/*' element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
