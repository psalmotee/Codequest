"use client";

import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/studentDashboard/Sidebar";
import Topbar from "../components/studentDashboard/Topbar";
import { ChevronRight } from "lucide-react";

export default function Settings() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [topbarHeight, setTopbarHeight] = useState(0);
  const [activeTab, setActiveTab] = useState("Settings");
  const [darkMode, setDarkMode] = useState(false);
  const topbarRef = useRef(null);

  // Toggle sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);

    // Apply dark mode to the document
    if (!darkMode) {
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
    }

    // Store preference in localStorage
    localStorage.setItem("darkMode", !darkMode ? "enabled" : "disabled");
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

  // Setting items
  const settingItems = [
    {
      id: "language",
      title: "Language",
      description:
        "Choose your favorite language to make everything easier to read and understand!",
      hasToggle: false,
      hasNavigation: true,
      path: "/student-dashboard/settings/language",
    },
    {
      id: "notification",
      title: "Notification",
      description:
        "Stay in the loop with fun alerts and messages about what's happening!",
      hasToggle: false,
      hasNavigation: true,
      path: "/student-dashboard/settings/notification",
    },
    {
      id: "accessibility",
      title: "Accessibility",
      description:
        "Make the website easier to use with settings that help everyone enjoy it better!",
      hasToggle: false,
      hasNavigation: true,
      path: "/student-dashboard/settings/accessibility",
    },
    {
      id: "parental",
      title: "Parental Controls",
      description:
        "Parents can customize what you see and do, keeping everything safe and just right for you!",
      hasToggle: false,
      hasNavigation: true,
      path: "/student-dashboard/settings/parental",
    },
  ];

  return (
    <div className={`flex flex-col min-h-screen ${darkMode ? "dark" : ""}`}>
      {/* Page title - visible only to screen readers */}
      <h1 className="sr-only">Settings</h1>

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
          <div className="max-w-3xl mx-auto">
            {/* Tabs */}
            <div className="flex mb-6 space-x-2 justify-center">
              <div
                className={`inline-flex rounded-md p-1 ${
                  darkMode ? "bg-gray-800" : "bg-white"
                }`}
              >
                <button
                  className={`px-6 py-2 rounded-md text-sm font-medium ${
                    activeTab === "Settings"
                      ? "bg-blue-600 text-white"
                      : darkMode
                      ? "text-gray-300 hover:bg-gray-700"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveTab("Settings")}
                >
                  Settings
                </button>
                <button
                  className={`px-6 py-2 rounded-md text-sm font-medium ${
                    activeTab === "Help"
                      ? "bg-blue-600 text-white"
                      : darkMode
                      ? "text-gray-300 hover:bg-gray-700"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveTab("Help")}
                >
                  Need help?
                </button>
              </div>
            </div>

            {/* Settings Content */}
            {activeTab === "Settings" && (
              <div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`rounded-lg shadow-sm p-6 ${
                  darkMode ? "bg-gray-800 text-white" : "bg-white"
                }`}
              >
                {/* Dark Mode Toggle */}
                <div
                  className={`mb-6 pb-6 border-b ${
                    darkMode ? "border-gray-700" : "border-gray-100"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3
                        className={`font-medium mb-1 ${
                          darkMode ? "text-white" : "text-gray-800"
                        }`}
                      >
                        Dark Mode
                      </h3>
                      <p
                        className={`text-sm ${
                          darkMode ? "text-gray-300" : "text-gray-500"
                        }`}
                      >
                        Dark mode makes the screen easier to look at in the dark
                      </p>
                    </div>
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="darkModeToggle"
                        className="sr-only"
                        checked={darkMode}
                        onChange={toggleDarkMode}
                      />
                      <label
                        htmlFor="darkModeToggle"
                        className={`flex cursor-pointer block w-12 h-6 rounded-full transition-colors duration-200 ease-in-out ${
                          darkMode ? "bg-blue-600" : "bg-gray-200"
                        }`}
                      >
                        <span
                          className={`block w-4 h-4 mt-1 ml-1 bg-white rounded-full transition-transform duration-200 ease-in-out ${
                            darkMode ? "transform translate-x-6" : ""
                          }`}
                        ></span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Other Settings */}
                <div className="space-y-6">
                  {settingItems.map((item) => (
                    <div
                      key={item.id}
                      className={`pb-6 border-b last:border-0 last:pb-0 ${
                        darkMode ? "border-gray-700" : "border-gray-100"
                      }`}
                    >
                      <Link
                        to={item.path}
                        className="w-full flex items-center justify-between text-left"
                      >
                        <div>
                          <h3
                            className={`font-medium mb-1 ${
                              darkMode ? "text-white" : "text-gray-800"
                            }`}
                          >
                            {item.title}
                          </h3>
                          <p
                            className={`text-sm ${
                              darkMode ? "text-gray-300" : "text-gray-500"
                            }`}
                          >
                            {item.description}
                          </p>
                        </div>
                        {item.hasNavigation && (
                          <ChevronRight
                            className={
                              darkMode ? "text-gray-400" : "text-gray-400"
                            }
                            size={20}
                          />
                        )}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Help Content */}
            {activeTab === "Help" && (
              <div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`rounded-lg shadow-sm p-6 ${
                  darkMode ? "bg-gray-800 text-white" : "bg-white"
                }`}
              >
                <h2 className="text-xl font-semibold mb-4">Need Help?</h2>
                <p
                  className={`mb-4 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  If you're having trouble with CodeQuest, here are some
                  resources that might help:
                </p>

                <div className="space-y-4">
                  <div
                    className={`p-4 rounded-lg ${
                      darkMode
                        ? "border-gray-700 border bg-gray-700"
                        : "border border-gray-200"
                    }`}
                  >
                    <h3 className="font-medium mb-2">
                      Frequently Asked Questions
                    </h3>
                    <p
                      className={`text-sm mb-2 ${
                        darkMode ? "text-gray-300" : "text-gray-500"
                      }`}
                    >
                      Find answers to common questions about using CodeQuest.
                    </p>
                    <button className="text-blue-500 text-sm font-medium hover:underline">
                      View FAQs
                    </button>
                  </div>

                  <div
                    className={`p-4 rounded-lg ${
                      darkMode
                        ? "border-gray-700 border bg-gray-700"
                        : "border border-gray-200"
                    }`}
                  >
                    <h3 className="font-medium mb-2">Contact Support</h3>
                    <p
                      className={`text-sm mb-2 ${
                        darkMode ? "text-gray-300" : "text-gray-500"
                      }`}
                    >
                      Still need help? Our support team is ready to assist you.
                    </p>
                    <button className="text-blue-500 text-sm font-medium hover:underline">
                      Contact Us
                    </button>
                  </div>

                  <div
                    className={`p-4 rounded-lg ${
                      darkMode
                        ? "border-gray-700 border bg-gray-700"
                        : "border border-gray-200"
                    }`}
                  >
                    <h3 className="font-medium mb-2">Video Tutorials</h3>
                    <p
                      className={`text-sm mb-2 ${
                        darkMode ? "text-gray-300" : "text-gray-500"
                      }`}
                    >
                      Watch step-by-step guides on how to use CodeQuest
                      features.
                    </p>
                    <button className="text-blue-500 text-sm font-medium hover:underline">
                      Watch Tutorials
                    </button>
                  </div>

                  <div
                    className={`p-4 rounded-lg ${
                      darkMode
                        ? "border-gray-700 border bg-gray-700"
                        : "border border-gray-200"
                    }`}
                  >
                    <h3 className="font-medium mb-2">Send Feedback</h3>
                    <p
                      className={`text-sm mb-2 ${
                        darkMode ? "text-gray-300" : "text-gray-500"
                      }`}
                    >
                      We'd love to hear what you think! Tell us what you like or
                      what we can make better!
                    </p>
                    <button className="text-blue-500 text-sm font-medium hover:underline">
                      Give Feedback
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
