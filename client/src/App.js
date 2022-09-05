import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage"
import SignUpPage from "./components/pages/SignUpPage"
import HomePage from "./components/pages/HomePage"

function App() {
  const [token, setToken] = useState(null);

  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="SignUp" element={<SignUpPage />} />
        <Route path="Home/:id/*" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
