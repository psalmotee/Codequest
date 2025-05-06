"use client";

import { useState, useEffect, useRef } from "react";

// Import components
import Sidebar from "../components/teacherDashboard/Sidebar";
import Topbar from "../components/teacherDashboard/Topbar";
import WelcomeBanner from "../components/teacherDashboard/WelcomeBanner";
import MyStudents from "../components/teacherDashboard/MyStudents";
import SubjectsDifficulty from "../components/teacherDashboard/SubjectsDifficulty";
import AttendanceChart from "../components/teacherDashboard/AttendanceChart";
import ClassProgress from "../components/teacherDashboard/ClassProgress";
import UpcomingEvents from "../components/teacherDashboard/UpcomingEvents";

export default function TeacherDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [topbarHeight, setTopbarHeight] = useState(0);
  const topbarRef = useRef(null);
  const [teacher] = useState({
    name: "Jide Ogunmepon",
    title: "Mr. Ogunmepon",
    avatar: "/images/teacher-avatar.png",
  });

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
    <div className="flex flex-col min-h-screen bg-gray-50">
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
          <div className="space-y-6">
            {/* Welcome Banner */}
            <WelcomeBanner name={teacher.name} />

            {/* Two Column Grid - My Students and Subjects Difficulty */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <MyStudents />
              <SubjectsDifficulty />
            </div>

            {/* Three Column Grid - Attendance, Class Progress, Upcoming */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <AttendanceChart />
              <ClassProgress />
              <UpcomingEvents />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
