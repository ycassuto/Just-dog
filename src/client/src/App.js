import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage"
import SignUpPage from "./components/pages/SignUpPage"
import HomePage from "./components/pages/HomePage"
import { InfoProvider } from "./Contexts";

import "./styles/DogCard.scss"
import "./styles/NavBar.scss"
import "./styles/HomePage.scss"

function App() {

  return (
    <div>
      <InfoProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="SignUp" element={<SignUpPage />} />
          <Route path="Home/*" element={<HomePage />} />
        </Routes>
      </InfoProvider>
    </div>
  );
}

export default App;
