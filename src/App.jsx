import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SelectAccount from "./pages/SelectAccount";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import VerifyEmail from "./pages/VerifyEmail";
import LandingPage from "./pages/LandingPage";
import Onboarding from "./pages/onboardingFlow/Onboarding";
import Step1 from "./pages/onboardingFlow/Step1";
import Step2 from "./pages/onboardingFlow/Step2";
import Step3 from "./pages/onboardingFlow/Step3";
import Step4 from "./pages/onboardingFlow/Step4";
import CompletedOnboarding from "./pages/onboardingFlow/CompletedOnboarding";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/select-account" element={<SelectAccount />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/verify-email" element={<VerifyEmail />} />

          {/* Onboarding flow using nested routes */}
          <Route path="/onboarding">
            <Route index element={<Onboarding />} />
            <Route path="step1" element={<Step1 />} />
            <Route path="step2" element={<Step2 />} />
            <Route path="step3" element={<Step3 />} />
            <Route path="step4" element={<Step4 />} />
            <Route path="final" element={<CompletedOnboarding />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
