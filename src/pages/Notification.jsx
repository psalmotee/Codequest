"use client";

import { useState, useEffect, useRef } from "react";
import Sidebar from "../components/studentDashboard/Sidebar";
import Topbar from "../components/studentDashboard/Topbar";
import { FaRegClock } from "react-icons/fa";
import Mia from "/notification-img/Mia.png";

export default function Notification() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [topbarHeight, setTopbarHeight] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const topbarRef = useRef(null);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode === "enabled") {
      setDarkMode(true);
      document.documentElement.classList.add("dark-mode");
    }
  }, []);

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

  const notifications = [
    {
      id: 1,
      avatar: "LU",
      instructor: "Level Up",
      message:
        "<strong>You leveled Up!</strong> Great work on your math missions</strong>! You’re moving up to the next level—bigger terrain, brighter skies!",
      date: "Yesterday",
      isNew: true,
    },
    {
      id: 2,
      avatar: "EX",
      instructor: "Explorer",
      message:
        "<strong>Ready To Explore?</strong> A new quiz just dropped: use your skills to find clues, solve problems, and discover something cool!",
      date: "21 April",
      isNew: false,
    },
    {
      id: 3,
      avatar: "PR",
      instructor: "Project Reminder",
      message:
        "<strong>Project Reminder!</strong> Don’t forget to finish your “Build a Bridge” challenge—it’s due tomorrow, and there are bonus points up for grab!",
      date: "19 April",
      isNew: false,
    },
    {
      id: 4,
      avatar: Mia,
      instructor: "Mia",
      message:
        "<strong>Mia wants to be your friend!</strong> Tap here to check out her profile and decide if you’d like to be friends too.",
      date: "18 April",
      isNew: false,
    },
    {
      id: 5,
      avatar: "NR",
      instructor: "News",
      message:
        "<strong>News Flash!</strong> A live Q&A with real scientists is happening this Friday! Bring your curiosity and join the fun.",
      date: "15 April",
      isNew: false,
    },
    {
      id: 6,
      avatar: "MC",
      instructor: "Mission Complete",
      message:
        "<strong>Mission Complete!</strong> You finished this week's STEM guide—high five! New activities will be ready on Monday!",
      date: "11 April",
      isNew: false,
    },
    {
      id: 7,
      avatar: "HO",
      instructor: "Hooray",
      message:
        "<strong>Hooray!</strong> You just finished a tough challenge in record time! Your brain is getting stronger with every step—keep it up!",
      date: "7 April",
      isNew: false,
    },
    {
      id: 8,
      avatar: "MA",
      instructor: "Math Quiz",
      message:
        "<strong>Math Quiz Alert!</strong> A tricky puzzle is waiting for you in the Numbers Zone—can you crack the code and find the treasure?",
      date: "3 April",
      isNew: false,
    },
    {
      id: 9,
      avatar: "SS",
      instructor: "STEM Star",
      message:
        "<strong>STEM Star Of The Day!</strong> Your name is on the leaderboard for awesome participation—go see your spotlight moment!",
      date: "25 March",
      isNew: false,
    },
    {
      id: 10,
      avatar: "SD",
      instructor: "Save The Date",
      message:
        "<strong>Save The Date!</strong> A special STEM event is coming up next week with cool games, live classes, and surprises—don’t miss it!",
      date: "22 March",
      isNew: false,
    },
    {
      id: 11,
      avatar: "MU",
      instructor: "Mini Challenge",
      message:
        "<strong>Mini Challenge Unlocked!</strong> A new 5-minute game just dropped—perfect for a quick brain warm-up. Want to try it now?",
      date: "19 March",
      isNew: false,
    },
    {
      id: 12,
      avatar: "AU",
      instructor: "Adventure",
      message:
        "<strong>Adventure Unlocked!</strong> You just discovered a new island in the Explorer Map. Tap to explore and start a new mission",
      date: "15 March",
      isNew: false,
    },
  ];

  return (
    <div className={`flex flex-col min-h-screen ${darkMode ? "dark" : ""}`}>
      <h1 className="sr-only">Notifications</h1>
      <div ref={topbarRef} className="sticky top-0 z-40 w-full">
        <Topbar
          toggleSidebar={toggleSidebar}
          sidebarOpen={sidebarOpen}
          darkMode={darkMode}
        />
      </div>
      <div className="flex flex-1 relative">
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
        <div
          className={`flex-1 p-4 lg:p-6 ${
            darkMode ? "bg-gray-900" : "bg-[#FFF8F1]"
          }`}
        >
          <div className="max-w-3xl mx-auto">
            <div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`rounded-lg shadow-sm ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <div className="divide-y divide-gray-100 dark:divide-gray-700">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 flex items-start gap-3 relative ${
                      notification.isNew
                        ? darkMode
                          ? "bg-gray-700/30"
                          : "bg-blue-50"
                        : ""
                    }`}
                  >
                    <div className="flex-shrink-0">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold ${
                          darkMode ? "bg-gray-700" : "bg-[#A37D35]"
                        }`}
                      >
                        <img
                          src={
                            notification.avatar || "/placeholder.svg"
                          }
                          alt={notification.instructor}
                          className="w-12 h-12 rounded-full object-cover mr-3"
                        />
                        {/* {notification.avatar} */}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p
                        className={`text-sm ${
                          darkMode ? "text-gray-200" : "text-gray-800"
                        }`}
                        dangerouslySetInnerHTML={{
                          __html: notification.message,
                        }}
                      ></p>
                      <div className="flex items-center mt-1">
                        <FaRegClock
                          className={`mr-1 text-xs ${
                            darkMode ? "text-gray-400" : "text-gray-500"
                          }`}
                        />
                        <span
                          className={`text-xs ${
                            darkMode ? "text-gray-400" : "text-gray-500"
                          }`}
                        >
                          {notification.date}
                        </span>
                      </div>
                    </div>
                    {notification.isNew && (
                      <div className="absolute top-4 right-4">
                        <span className="h-2 w-2 rounded-full bg-red-500 block"></span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
