"use client";

import { useState, useEffect, useRef } from "react";
import Sidebar from "../components/studentDashboard/Sidebar";
import Topbar from "../components/studentDashboard/Topbar";
import { AnimatePresence } from "framer-motion";
import image from "/gamification-img/image.png";
import image1 from "/gamification-img/image-1.png"
import image2 from "/gamification-img/image-2.png"

export default function Gamification() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [topbarHeight, setTopbarHeight] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");
  const [showCategoryNames, setShowCategoryNames] = useState(false);
  const [namePosition, setNamePosition] = useState({ x: 0, y: 0 });
  const topbarRef = useRef(null);

  // Toggle sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Categories
  const categories = [
    // { id: "all", name: "All", image: image },
    { id: "mcqs", name: "MCQs", image: image },
    {
      id: "coding",
      name: "Coding Exercises",
      image: image1,
    },
    {
      id: "puzzles",
      name: "Puzzles",
      image: image2,
    },
  ];

  // Quiz items
  const quizItems = [
    {
      id: 1,
      title: "Science Sparks",
      description: "Scored 42 out of 50",
      category: "MCQs",
      progress: 84,
      image: image,
    },
    {
      id: 2,
      title: "Logic Leap",
      description: "Scored 32 out of 66",
      category: "Coding Exercises",
      progress: 48,
      image: image1,
    },
    {
      id: 3,
      title: "Tech Tinker Trivia",
      description: "Scored 28 out of 40",
      category: "MCQs",
      progress: 70,
      image: image,
    },
    {
      id: 4,
      title: "Puzzle Pop",
      description: "Scored 48 out of 50",
      category: "Puzzles",
      progress: 92,
      image: image2,
    },
    {
      id: 5,
      title: "Brain Box",
      description: "Scored 12 out of 25",
      category: "Puzzles",
      progress: 48,
      image: image2,
    },
    {
      id: 6,
      title: "Tap to Code",
      description: "Scored 8 out of 32",
      category: "Coding Exercises",
      progress: 25,
      image: image1,
    },
    {
      id: 7,
      title: "Think and Thinker",
      description: "Scored 10 out of 20",
      category: "MCQs",
      progress: 50,
      image: image,
    },
    {
      id: 8,
      title: "Little Coders Challenge",
      description: "Scored 6 out of 10",
      category: "Coding Exercises",
      progress: 60,
      image: image1,
    },
    {
      id: 9,
      title: "Mind Mixer",
      description: "Scored 5 out of 15",
      category: "Puzzles",
      progress: 33,
      image: image2,
    },
  ];

  // Filter items by active category
  const filteredItems = quizItems.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

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

  // Effect to change category content every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCategoryNames((prev) => !prev);
      if (showCategoryNames) {
        setNamePosition({
          x: Math.random() * 100 - 50,
          y: Math.random() * 100 - 50,
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [showCategoryNames]);

  // Progress circle component
  const ProgressCircle = ({ progress }) => {
    const radius = 15;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    // Determine color based on progress
    const getColor = (progress) => {
      if (progress >= 70) return "#22c55e"; // Green
      // if (progress >= 50) return "#3b82f6"; // Blue
      if (progress >= 40) return "#eab308"; // Yellow
      return "#ef4444"; // Red
    };

    return (
      <div className="relative w-10 h-10 flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="20"
            cy="20"
            r={radius}
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="3"
          />
          <circle
            cx="20"
            cy="20"
            r={radius}
            fill="none"
            stroke={getColor(progress)}
            strokeWidth="3"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>
        <span className="absolute text-xs font-medium">{progress}%</span>
      </div>
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FFF8F1]">
      {/* Page title - visible only to screen readers */}
      <h1 className="sr-only">Gamification</h1>

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
          <div className="max-w-7xl mx-auto">
            {/* Page Header with Tabs */}
            <div className="mb-6 flex flex-wrap items-center justify-between">
              <div className="flex space-x-2 mb-4 md:mb-0">
                <button className="bg-blue-600 text-white px-4 py-1.5 rounded-md text-sm font-medium">
                  Quiz
                </button>
                <button className="text-gray-600 hover:bg-gray-100 px-4 py-1.5 rounded-md text-sm font-medium">
                  Achievements
                </button>
                <button className="text-gray-600 hover:bg-gray-100 px-4 py-1.5 rounded-md text-sm font-medium">
                  Leaderboard
                </button>
              </div>
            </div>

            {/* Category Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`rounded-lg overflow-hidden shadow-sm ${
                    activeCategory === category.name
                      ? "ring-2 ring-blue-500"
                      : ""
                  }`}
                  onClick={() => setActiveCategory(category.name)}
                >
                  <div className="relative h-32">
                    <img
                      src={
                        category.image ||
                        `/placeholder.svg?height=128&width=300`
                      }
                      alt={category.name}
                      className="w-full h-full object-cover"
                    />
                    <AnimatePresence>
                      {showCategoryNames && (
                        <div
                          initial={{ opacity: 0, ...namePosition }}
                          animate={{ opacity: 1, x: 0, y: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5 }}
                          className="absolute bg-black bg-opacity-50 inset-0 flex items-center justify-center"
                        >
                          <h3 className="text-white font-bold text-lg drop-shadow-lg">
                            {category.name}
                          </h3>
                        </div>
                      )}
                    </AnimatePresence>
                  </div>
                </button>
              ))}
            </div>

            {/* Quiz Items */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-6">{activeCategory}</h2>
              <div className="space-y-4">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center p-3 border border-gray-100 rounded-lg hover:bg-gray-50 cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-md overflow-hidden mr-4">
                      <img
                        src={
                          item.image || `/placeholder.svg?height=48&width=48`
                        }
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-800">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {item.description}
                      </p>
                    </div>
                    <ProgressCircle progress={item.progress} />
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
