import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SelectAccount from "./pages/SelectAccount";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/Login";
import AboutUs from "./components/landingComponents/AboutUsSection"

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/aboutus" element={<AboutUs />} />
      {/* <rou */}
      <Route path="/select-account" element={<SelectAccount />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<SignIn />} />
    </Routes>
  );
}

export default App;
