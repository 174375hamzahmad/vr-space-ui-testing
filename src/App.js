import LandingPage from "./components/landingPage/LandingPage";
import SignUp from "./components/signUp/SignUp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { useEffect } from "react";
function App() {
  useEffect(() => {}, []);
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
