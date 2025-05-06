"use client";

import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AnimatePresence } from "framer-motion";
import LandingPage from "./pages/LandingPage";
import SelectAccount from "./pages/SelectAccount";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import VerifyEmail from "./pages/VerifyEmail";
import Onboarding from "./pages/onboardingFlow/Onboarding";
import Step1 from "./pages/onboardingFlow/Step1";
import Step2 from "./pages/onboardingFlow/Step2";
import Step3 from "./pages/onboardingFlow/Step3";
import Step4 from "./pages/onboardingFlow/Step4";
import CompletedOnboarding from "./pages/onboardingFlow/CompletedOnboarding";
import TeacherDashboard from "./pages/TeacherDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import StudentProfile from "./pages/StudentProfile";
import CourseLibrary from "./pages/CourseLibrary";
import CoursePlayer from "./pages/CoursePlayer";
import Gamification from "./pages/Gamification";

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

          {/* Teacher Dashboard */}
          <Route path="/teacher-dashboard" element={<TeacherDashboard />} />

          {/* Student Dashboard and nested routes */}
          <Route path="/student-dashboard">
            <Route index element={<StudentDashboard />} />
            <Route path="student-profile" element={<StudentProfile />} />
            <Route path="courses" element={<CourseLibrary />} />
            <Route path="courses/:courseId" element={<CoursePlayer />} />
            <Route
              path="courses/:courseId/lessons/:lessonId"
              element={<CoursePlayer />}
            />
            <Route path="projects" element={<div>Projects Page</div>} />
            <Route path="gamification" element={<Gamification />} />
            <Route path="community" element={<div>Community Page</div>} />
            <Route path="settings" element={<div>Settings Page</div>} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
