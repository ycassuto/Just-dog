import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage"
import HomePage from "./components/pages/HomePage"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Home/*" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
