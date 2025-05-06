"use client";

import { useState, useEffect, useRef } from "react";
import Sidebar from "../components/studentDashboard/Sidebar";
import Topbar from "../components/studentDashboard/Topbar";
import { Link } from "react-router-dom";
import image1 from "/CourseLibrary-img/image 1.png";
import image2 from "/CourseLibrary-img/image 2.png";
import image3 from "/CourseLibrary-img/image 3.png";
import image4 from "/CourseLibrary-img/image 4.png";
import image5 from "/CourseLibrary-img/image 5.png";
import image6 from "/CourseLibrary-img/image 6.png";
import image7 from "/CourseLibrary-img/image 7.png";
import image8 from "/CourseLibrary-img/image 8.png";
import image9 from "/CourseLibrary-img/image 9.png";
import image10 from "/CourseLibrary-img/image 10.png";
import image11 from "/CourseLibrary-img/image 11.png";
import image12 from "/CourseLibrary-img/image 12.png";
import image13 from "/CourseLibrary-img/image 13.png";
import image14 from "/CourseLibrary-img/image 14.png";
import image15 from "/CourseLibrary-img/image 15.png";
import image16 from "/CourseLibrary-img/image 16.png";
import image17 from "/CourseLibrary-img/image 17.png";
import image18 from "/CourseLibrary-img/image 18.png";
import image19 from "/CourseLibrary-img/image 19.png";
import image20 from "/CourseLibrary-img/image 20.png";

export default function CourseLibrary() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [topbarHeight, setTopbarHeight] = useState(0);
  const topbarRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeSort, setActiveSort] = useState("Popular");

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

  // Continue Learning courses
  const continueLearningCourses = [
    {
      id: 1,
      title: "Robotics & Coding",
      image: image1,
      progress: 65,
    },
    {
      id: 2,
      title: "Web Development",
      image: image2,
      progress: 30,
    },
    {
      id: 3,
      title: "AI Science",
      image: image3,
      progress: 45,
    },
    {
      id: 4,
      title: "Introduction to Robotics",
      image: image4,
      progress: 20,
    },
    {
      id: 1,
      title: "Robotics & Coding",
      image: image1,
      progress: 65,
    },
    {
      id: 2,
      title: "Web Development",
      image: image2,
      progress: 30,
    },
    {
      id: 3,
      title: "AI Science",
      image: image3,
      progress: 45,
    },
    {
      id: 4,
      title: "Introduction to Robotics",
      image: image4,
      progress: 20,
    },
  ];

  // Popular courses
  const popularCourses = [
    {
      id: 1,
      title: "Python Basics & Logic",
      image: image5,
      author: "Dr. Adebayo",
      description:
        "Learn the fundamentals of Python programming and logical thinking",
      level: "Beginner",
      duration: "4 weeks",
    },
    {
      id: 2,
      title: "Intro to Robotics",
      image: image6,
      author: "Prof. Okonkwo",
      description: "Discover the exciting world of robotics and automation",
      level: "Beginner",
      duration: "6 weeks",
    },
    {
      id: 3,
      title: "Digital Graphics Design",
      image: image7,
      author: "Ms. Chidinma",
      description:
        "Create stunning digital art and graphics for various platforms",
      level: "Intermediate",
      duration: "8 weeks",
    },
    {
      id: 4,
      title: "Coding with Python",
      image: image8,
      author: "Mr. Emeka",
      description: "Build real-world applications using Python programming",
      level: "Intermediate",
      duration: "10 weeks",
    },
    {
      id: 5,
      title: "Game Development",
      image: image9,
      author: "Dr. Nnamdi",
      description:
        "Learn to create engaging games with modern development tools",
      level: "Advanced",
      duration: "12 weeks",
    },
    {
      id: 6,
      title: "Hardware & Tech Tools",
      image: image10,
      author: "Engr. Folake",
      description:
        "Understand computer hardware components and technical tools",
      level: "Beginner",
      duration: "5 weeks",
    },
    {
      id: 7,
      title: "Data Visualization",
      image: image11,
      author: "Dr. Oluwaseun",
      description: "Transform complex data into meaningful visual insights",
      level: "Intermediate",
      duration: "7 weeks",
    },
    {
      id: 8,
      title: "Working with Design",
      image: image12,
      author: "Ms. Amara",
      description: "Master design principles and create professional layouts",
      level: "Beginner",
      duration: "6 weeks",
    },
    {
      id: 9,
      title: "Digital Marketing",
      image: image13,
      author: "Mr. Tunde",
      description: "Learn effective strategies for online marketing campaigns",
      level: "Beginner",
      duration: "4 weeks",
    },
    {
      id: 10,
      title: "Math Operations",
      image: image14,
      author: "Prof. Adaobi",
      description:
        "Strengthen your mathematical skills for programming and analysis",
      level: "Intermediate",
      duration: "8 weeks",
    },
    {
      id: 11,
      title: "App Modeling",
      image: image15,
      author: "Engr. Kayode",
      description: "Design and model applications before development",
      level: "Advanced",
      duration: "9 weeks",
    },
    {
      id: 12,
      title: "Digital Career Paths",
      image: image16,
      author: "Ms. Funmi",
      description:
        "Explore various career opportunities in the digital technology field",
      level: "Beginner",
      duration: "3 weeks",
    },
    {
      id: 13,
      title: "Introduction to JSON",
      image: image17,
      author: "Mr. Chinedu",
      description:
        "Learn the fundamentals of JSON data format for web development",
      level: "Intermediate",
      duration: "4 weeks",
    },
    {
      id: 14,
      title: "Python",
      image: image18,
      author: "Dr. Nneka",
      description:
        "Comprehensive Python programming from basics to advanced concepts",
      level: "All Levels",
      duration: "12 weeks",
    },
    {
      id: 15,
      title: "Introduction to CSS",
      image: image19,
      author: "Ms. Yewande",
      description: "Master cascading style sheets for beautiful web designs",
      level: "Beginner",
      duration: "5 weeks",
    },
    {
      id: 16,
      title: "Flutter",
      image: image20,
      author: "Mr. Olumide",
      description:
        "Build cross-platform mobile applications with Flutter framework",
      level: "Intermediate",
      duration: "10 weeks",
    },
  ];

  // Filter options
  const filterOptions = ["All", "Beginner", "Intermediate", "Advanced"];

  // Sort options
  const sortOptions = ["Popular", "Newest", "Price"];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Page title - visible only to screen readers */}
      <h1 className="sr-only">Course Library</h1>

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
            {/* Continue Learning Section */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  Continue Learning
                </h2>
                <div className="flex space-x-2">
                  <button className="p-1 rounded-full text-gray-400 hover:text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <button className="p-1 rounded-full text-gray-400 hover:text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Course Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {continueLearningCourses.map((course) => (
                  <div
                    key={course.id}
                    className="bg-white rounded-lg overflow-hidden shadow-sm"
                  >
                    <div className="h-36 overflow-hidden">
                      <img
                        src={
                          course.image ||
                          `/placeholder.svg?height=144&width=300`
                        }
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-sm mb-2">
                        {course.title}
                      </h3>
                      <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-600 rounded-full"
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                      <button className="w-full text-center mt-3 text-sm font-medium text-[#2D2DFF] border border-[#2D2DFF] rounded-lg py-1.5 hover:bg-blue-50 transition">
                        Continue
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Courses Section */}
            <div>
              <div className="flex flex-wrap justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2 sm:mb-0">
                  Popular Courses
                </h2>

                {/* Filter and Sort Controls */}
                <div className="flex flex-wrap gap-2">
                  {/* Filter Pills */}
                  <div className="flex bg-white rounded-md shadow-sm p-1 mr-2">
                    {filterOptions.map((filter) => (
                      <button
                        key={filter}
                        className={`px-3 py-1 text-sm rounded-md ${
                          activeFilter === filter
                            ? "bg-blue-600 text-white"
                            : "text-gray-600 hover:bg-gray-100"
                        }`}
                        onClick={() => setActiveFilter(filter)}
                      >
                        {filter}
                      </button>
                    ))}
                  </div>

                  {/* Sort Dropdown */}
                  <div className="flex bg-white rounded-md shadow-sm p-1">
                    {sortOptions.map((sort) => (
                      <button
                        key={sort}
                        className={`px-3 py-1 text-sm rounded-md ${
                          activeSort === sort
                            ? "bg-blue-600 text-white"
                            : "text-gray-600 hover:bg-gray-100"
                        }`}
                        onClick={() => setActiveSort(sort)}
                      >
                        {sort}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Course Cards Grid */}
              <Link className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {popularCourses.map((course) => (
                  <div
                    key={course.id}
                    className="bg-white rounded-lg overflow-hidden shadow-sm"
                  >
                    <div className="h-36 overflow-hidden">
                      <img
                        src={
                          course.image ||
                          `/placeholder.svg?height=144&width=300`
                        }
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-sm mb-1">
                        {course.title}
                      </h3>
                      <p className="text-xs text-gray-500 mb-2">
                        {course.author}
                      </p>
                      <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                        {course.description}
                      </p>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>{course.level}</span>
                        <span>{course.duration}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
