"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import components
import Sidebar from "../components/studentDashboard/Sidebar";
import Topbar from "../components/studentDashboard/Topbar";
import WelcomeBanner from "../components/studentDashboard/WelcomeBanner";
import StillWorkingOn from "../components/studentDashboard/StillWorkingOn";
import TimeSpentStudying from "../components/studentDashboard/TimeSpentStudying";
import ContinueLearning from "../components/studentDashboard/ContinueLearning";
import ProgressOverview from "../components/studentDashboard/ProgressOverview";
import UpcomingClasses from "../components/studentDashboard/UpcomingClasses";

export default function StudentDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [topbarHeight, setTopbarHeight] = useState(0);
  const topbarRef = useRef(null);

  // Toggle sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Measure topbar height for proper sidebar positioning
  useEffect(() => {
    if (topbarRef.current) {
      setTopbarHeight(topbarRef.current.offsetHeight);
    }

    const handleResize = () => {
      if (topbarRef.current) {
        setTopbarHeight(topbarRef.current.offsetHeight);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#FFF8F1]">
      {/* Sticky Header */}
      <div ref={topbarRef} className="sticky top-0 z-40 w-full">
        <Topbar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
      </div>

      {/* Main Content */}
      <div className="flex flex-1 relative">
        {/* Sidebar - Fixed on mobile, static on desktop */}
        <div
          className={`fixed lg:sticky top-0 left-0 z-30 transition-transform duration-300 ease-in-out transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0`}
          style={{
            height: `calc(100vh - ${topbarHeight}px)`,
            top: `${topbarHeight}px`,
            marginTop: 0,
          }}
        >
          <div className="h-full overflow-y-auto">
            <Sidebar />
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-4 lg:p-6">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Welcome Banner */}
            <WelcomeBanner />

            {/* Two Column Grid - Single column on mobile */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <StillWorkingOn />
              <TimeSpentStudying />
            </div>

            {/* Continue Learning */}
            <ContinueLearning />

            {/* Right Sidebar Content - Only visible on large screens in sidebar */}
            <div className="lg:hidden space-y-6 mt-6">
              <ProgressOverview />
              <UpcomingClasses />
            </div>
          </div>
        </div>

        {/* Right Sidebar - Only visible on large screens */}
        <div className="hidden bg-[#fff] lg:block w-80 p-4 space-y-6 ">
          <ProgressOverview />
          <UpcomingClasses />
        </div>
      </div>
    </div>
  );
}
