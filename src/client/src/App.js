import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage"
import HomePage from "./components/pages/HomePage"
import { InfoProvider } from "./Contexts";

import "./styles/Pages/root.scss"

function App() {

  return (
    <>
      <InfoProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="Home/*" element={<HomePage />} />
        </Routes>
      </InfoProvider>
    </>
  );
}

export default App;
