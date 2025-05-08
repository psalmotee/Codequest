"use client";

import { useState, useEffect, useRef } from "react";
import Sidebar from "../components/studentDashboard/Sidebar";
import Topbar from "../components/studentDashboard/Topbar";
import QuestionCorner from "../components/communityComponents/QuestionCorner";
import LiveChat from "../components/communityComponents/LiveChat";

export default function Community() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [topbarHeight, setTopbarHeight] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Question/Confusion");
  const [activeTab, setActiveTab] = useState("Question Corner"); // State for tab navigation
  const topbarRef = useRef(null);

  // Toggle sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Check for saved dark mode preference on component mount
  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode === "enabled") {
      setDarkMode(true);
      document.documentElement.classList.add("dark-mode");
    }
  }, []);

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
    <div className={`flex flex-col min-h-screen ${darkMode ? "dark" : ""}`}>
      {/* Page title - visible only to screen readers */}
      <h1 className="sr-only">Community</h1>

      {/* Sticky Header */}
      <div ref={topbarRef} className="sticky top-0 z-40 w-full">
        <Topbar
          toggleSidebar={toggleSidebar}
          sidebarOpen={sidebarOpen}
          darkMode={darkMode}
        />
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
            <Sidebar darkMode={darkMode} />
          </div>
        </div>

        {/* Main Content Area */}
        <div
          className={`flex-1 p-4 lg:p-6 ${
            darkMode ? "bg-gray-900" : "bg-[#FFF8F1]"
          }`}
        >
          <div className="max-w-7xl mx-auto">
            {/* Tab Navigation */}
            <div className="flex justify-center mb-6">
              <div
                className={`inline-flex rounded-md p-1 ${
                  darkMode ? "bg-gray-800" : "bg-white"
                }`}
              >
                <button
                  onClick={() => setActiveTab("Question Corner")}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    activeTab === "Question Corner"
                      ? "bg-blue-600 text-white"
                      : darkMode
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  Question Corner
                </button>
                <button
                  onClick={() => setActiveTab("Live Chat")}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    activeTab === "Live Chat"
                      ? "bg-blue-600 text-white"
                      : darkMode
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  Live Chat
                </button>
              </div>
            </div>

            {/* Tab Content */}
            {activeTab === "Question Corner" ? (
              <QuestionCorner
                darkMode={darkMode}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
              />
            ) : (
              <LiveChat darkMode={darkMode} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
