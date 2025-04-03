// import { Routes, Route } from "react-router-dom";
import { HashRouter as Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SelectAccount from "./pages/SelectAccount";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/select-account" element={<SelectAccount />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<SignIn />} />
    </Routes>
  );
}

export default App;
