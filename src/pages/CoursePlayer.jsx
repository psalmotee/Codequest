"use client";

import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "../components/studentDashboard/Sidebar";
import Topbar from "../components/studentDashboard/Topbar";
import {
  FaPlay,
  FaPause,
  FaVolumeUp,
  FaExpand,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

// Import course images for the demo
import image1 from "/CourseLibrary-img/image 1.png";
import grace from "/CourseLibrary-img/Grace.png";

export default function CoursePlayer() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [topbarHeight, setTopbarHeight] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);
  const topbarRef = useRef(null);
  const videoRef = useRef(null);
  const { courseId, lessonId } = useParams();
  const navigate = useNavigate();

  // Toggle sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Toggle video play/pause
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Update progress bar as video plays
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progress =
        (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setVideoProgress(progress);
    }
  };

  // Handle seeking when user clicks on progress bar
  const handleSeek = (e) => {
    if (videoRef.current) {
      const progressBar = e.currentTarget;
      const clickPosition =
        (e.clientX - progressBar.getBoundingClientRect().left) /
        progressBar.offsetWidth;
      videoRef.current.currentTime = clickPosition * videoRef.current.duration;
    }
  };

  // Course data (in a real app, this would come from an API based on courseId)
  const courseData = {
    title: "Geometry and Shapes",
    instructor: "Grace Thompson",
    instructorAvatar: grace,
    description:
      "Shapes are everywhere - daily in life course, you'll learn how to spot them, measure them, and solve problems with them.\n\nIn Geometry and Shapes, we'll explore how shapes and space are used in everyday life. You'll discover the properties of 2D and 3D shapes like triangles, circles, squares, rectangles, cubes, spheres, and more. By the end of this course, you'll be able to identify shapes, calculate their areas, and solve geometry problems.",
    videoUrl: "https://example.com/geometry-intro.mp4",
    thumbnailUrl: image1, // Using the Robotics & Coding image as a placeholder
    chapters: [
      {
        id: 1,
        title: "Introduction to Shapes",
        active: false,
        completed: true,
      },
      { id: 2, title: "2D vs 3D Shapes", active: true, completed: false },
      { id: 3, title: "Triangles", active: false, completed: false },
      { id: 4, title: "Circles", active: false, completed: false },
      { id: 5, title: "Quadrilaterals", active: false, completed: false },
      { id: 6, title: "Calculating Areas", active: false, completed: false },
      {
        id: 7,
        title: "Practical Applications",
        active: false,
        completed: false,
      },
      { id: 8, title: "Assessment", active: false, completed: false },
    ],
    keyPoints: [
      "Learn to identify different shapes (2D and 3D shapes)",
      "Understand the properties of each shape, and calculate perimeter",
      "How to spot patterns and symmetry in designs",
      "How to use geometry in everyday life",
    ],
  };

  // Navigate to previous/next lesson
  const goToPreviousLesson = () => {
    // In a real app, you would navigate to the previous lesson
    console.log("Navigate to previous lesson");
  };

  const goToNextLesson = () => {
    // In a real app, you would navigate to the next lesson
    console.log("Navigate to next lesson");
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
      {/* Page title - visible only to screen readers */}
      <h1 className="sr-only">Course Player - {courseData.title}</h1>

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
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Left Column - Video Player and Course Content */}
              <div className="lg:w-3/4">
                {/* Video Player */}
                <div className="bg-black rounded-lg overflow-hidden mb-6 relative">
                  {/* Video Element */}
                  <video
                    ref={videoRef}
                    className="w-full aspect-video object-cover"
                    poster={courseData.thumbnailUrl}
                    onTimeUpdate={handleTimeUpdate}
                    onClick={togglePlay}
                  >
                    <source src={courseData.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Video Controls Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    {/* Progress Bar */}
                    <div
                      className="h-1 bg-gray-600 rounded-full mb-3 cursor-pointer"
                      onClick={handleSeek}
                    >
                      <div
                        className="h-full bg-blue-500 rounded-full"
                        style={{ width: `${videoProgress}%` }}
                      ></div>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <button
                          className="text-white hover:text-blue-400 transition-colors"
                          onClick={togglePlay}
                        >
                          {isPlaying ? (
                            <FaPause size={18} />
                          ) : (
                            <FaPlay size={18} />
                          )}
                        </button>
                        <button className="text-white hover:text-blue-400 transition-colors">
                          <FaVolumeUp size={18} />
                        </button>
                        <span className="text-white text-sm">0:00 / 10:30</span>
                      </div>
                      <button className="text-white hover:text-blue-400 transition-colors">
                        <FaExpand size={18} />
                      </button>
                    </div>
                  </div>

                  {/* Play Button Overlay (visible when paused) */}
                  {!isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button
                        className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 transition-colors"
                        onClick={togglePlay}
                      >
                        <FaPlay size={24} />
                      </button>
                    </div>
                  )}
                </div>

                {/* Course Content */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h2 className="text-2xl font-bold mb-4">
                    {courseData.title}
                  </h2>

                  <div className="whitespace-pre-line text-gray-700 mb-6">
                    {courseData.description}
                  </div>

                  <h3 className="font-semibold text-lg mb-2">
                    What you'll learn:
                  </h3>
                  <ul className="list-disc pl-5 mb-6 space-y-1">
                    {courseData.keyPoints.map((point, index) => (
                      <li key={index} className="text-gray-700">
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* Instructor Info */}
                  <div className="flex items-center mt-8">
                    <img
                      src={courseData.instructorAvatar || "/placeholder.svg"}
                      alt={courseData.instructor}
                      className="w-12 h-12 rounded-full object-cover mr-3"
                    />
                    <div>
                      <p className="font-medium">{courseData.instructor}</p>
                      <p className="text-sm text-gray-500">Course Instructor</p>
                    </div>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex justify-between mt-8">
                    <button
                      onClick={goToPreviousLesson}
                      className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                    >
                      <FaChevronLeft size={14} />
                      <span>Previous</span>
                    </button>
                    <button
                      onClick={goToNextLesson}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                      <span>Next</span>
                      <FaChevronRight size={14} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column - Course Chapters */}
              <div className="lg:w-1/4">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="p-4 border-b border-gray-200">
                    <h3 className="font-semibold">Course Chapters</h3>
                  </div>
                  <div className="divide-y divide-gray-200">
                    {courseData.chapters.map((chapter) => (
                      <div
                        key={chapter.id}
                        className={`p-4 hover:bg-gray-50 cursor-pointer ${
                          chapter.active ? "bg-blue-50" : ""
                        }`}
                      >
                        <div className="flex items-center">
                          <div
                            className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                              chapter.completed
                                ? "bg-green-500 text-white"
                                : chapter.active
                                ? "bg-blue-500 text-white"
                                : "bg-gray-200"
                            }`}
                          >
                            {chapter.completed ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            ) : (
                              <span className="text-xs">{chapter.id}</span>
                            )}
                          </div>
                          <span
                            className={`${
                              chapter.active
                                ? "font-medium text-blue-700"
                                : "text-gray-700"
                            }`}
                          >
                            {chapter.title}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
