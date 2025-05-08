"use client";

import { useState, useEffect, useRef } from "react";
import Sidebar from "../components/studentDashboard/Sidebar";
import Topbar from "../components/studentDashboard/Topbar";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Jayy from "/images/jayy.png";


export default function StudentProfile() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [topbarHeight, setTopbarHeight] = useState(0);
  const topbarRef = useRef(null);
  const fileInputRef = useRef(null);
  const dropAreaRef = useRef(null);

  const [profileData, setProfileData] = useState({
    fullName: "Joseph Ajayi",
    email: "JosephAjayi13@gmail.com",
    nickname: "Jayy One",
    phone: "+234 8176542210",
    bio: "Hey! I'm Joseph and I'm 13. I joined CodeQuest and I'm super excited to start coding! I really like making games and figuring out how stuff works. When I'm not on my laptop, I'm probably out playing football with my friends. I think coding is fun because it's like solving a puzzle, and I can't wait to learn more!",
  });

  const [profileImage, setProfileImage] = useState({
    src: Jayy,
    file: null,
    isDragging: false,
    error: "",
  });

  // Toggle sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form reset
  const handleReset = () => {
    setProfileData({
      fullName: "Joseph Ajayi",
      email: "JosephAjayi13@gmail.com",
      nickname: "Jayy One",
      phone: "+234 8176542210",
      bio: "Hey! I'm Joseph and I'm 13. I joined CodeQuest and I'm super excited to start coding! I really like making games and figuring out how stuff works. When I'm not on my laptop, I'm probably out playing football with my friends. I think coding is fun because it's like solving a puzzle, and I can't wait to learn more!",
    });

    // Reset profile image
    setProfileImage({
      src: "/images/student-profile.png",
      file: null,
      isDragging: false,
      error: "",
    });

    toast.info("Form has been reset", {
      position: "top-right",
      autoClose: 2000,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you would typically send the data to an API
    // If there's a new profile image, you'd upload it first
    if (profileImage.file) {
      console.log("Uploading new profile image:", profileImage.file);
      // Upload logic would go here
    }

    toast.success("Profile updated successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  // Handle profile picture click
  const handleProfilePictureClick = () => {
    fileInputRef.current?.click();
  };

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      validateAndSetImage(file);
    }
  };

  // Validate and set the image
  const validateAndSetImage = (file) => {
    // Reset any previous errors
    setProfileImage((prev) => ({ ...prev, error: "" }));

    // Check file type
    const validTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
    if (!validTypes.includes(file.type)) {
      setProfileImage((prev) => ({
        ...prev,
        error: "Please select a valid image file (JPEG, PNG, GIF, or WEBP)",
      }));
      toast.error(
        "Please select a valid image file (JPEG, PNG, GIF, or WEBP)",
        {
          position: "top-right",
          autoClose: 4000,
        }
      );
      return;
    }

    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setProfileImage((prev) => ({
        ...prev,
        error: "Image size should be less than 5MB",
      }));
      toast.error("Image size should be less than 5MB", {
        position: "top-right",
        autoClose: 4000,
      });
      return;
    }

    // Create a preview URL
    const reader = new FileReader();
    reader.onload = (e) => {
      setProfileImage({
        src: e.target?.result?.toString() || "",
        file: file,
        isDragging: false,
        error: "",
      });
      toast.info("Image selected. Click 'Update Profile' to save changes.", {
        position: "top-right",
        autoClose: 3000,
      });
    };
    reader.readAsDataURL(file);
  };

  // Drag and drop handlers
  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setProfileImage((prev) => ({ ...prev, isDragging: true }));
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setProfileImage((prev) => ({ ...prev, isDragging: false }));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setProfileImage((prev) => ({ ...prev, isDragging: false }));

    const file = e.dataTransfer?.files?.[0];
    if (file) {
      validateAndSetImage(file);
    }
  };

  // Set up drag and drop event listeners
  useEffect(() => {
    const dropArea = dropAreaRef.current;
    if (dropArea) {
      dropArea.addEventListener("dragenter", handleDragEnter);
      dropArea.addEventListener("dragleave", handleDragLeave);
      dropArea.addEventListener("dragover", handleDragOver);
      dropArea.addEventListener("drop", handleDrop);

      return () => {
        dropArea.removeEventListener("dragenter", handleDragEnter);
        dropArea.removeEventListener("dragleave", handleDragLeave);
        dropArea.removeEventListener("dragover", handleDragOver);
        dropArea.removeEventListener("drop", handleDrop);
      };
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
    <div className="flex flex-col min-h-screen bg-[#FFF8F1]">
      {/* Page title - visible only to screen readers */}
      <h1 className="sr-only">Profile Page</h1>

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
          <div className="max-w-4xl mx-auto">
            {/* Profile Form */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-6">
                Your Profile Picture
              </h2>

              {/* Profile Picture Section */}
              <div className="flex justify-center mb-8">
                <div
                  ref={dropAreaRef}
                  className={`relative cursor-pointer group ${
                    profileImage.isDragging ? "ring-4 ring-blue-300" : ""
                  }`}
                  onClick={handleProfilePictureClick}
                >
                  {/* Hidden file input */}
                  <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    accept="image/jpeg, image/png, image/gif, image/webp"
                    onChange={handleFileChange}
                  />

                  {/* Profile image */}
                  <img
                    src={profileImage.src || "/placeholder.svg"}
                    alt="Profile"
                    className="w-32 h-32 rounded-lg object-cover border-2 border-gray-200 transition-all duration-200"
                  />

                  {/* Edit button */}
                  <button
                    type="button"
                    className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full"
                    aria-label="Edit profile picture"
                    onClick={(e) => {
                      e.stopPropagation();
                      fileInputRef.current?.click();
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                    </svg>
                  </button>

                  {/* Overlay with instructions (visible on hover or when dragging) */}
                  <div
                    className={`absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center transition-opacity duration-200 ${
                      profileImage.isDragging
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    <div className="text-white text-center text-xs px-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mx-auto mb-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                        />
                      </svg>
                      {profileImage.isDragging
                        ? "Drop image here"
                        : "Click or drag image here"}
                    </div>
                  </div>
                </div>
              </div>

              {/* Error message */}
              {profileImage.error && (
                <div className="text-red-500 text-sm text-center mb-4">
                  {profileImage.error}
                </div>
              )}

              {/* Profile Form */}
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={profileData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={profileData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Nickname */}
                  <div>
                    <label
                      htmlFor="nickname"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Nickname
                    </label>
                    <input
                      type="text"
                      id="nickname"
                      name="nickname"
                      value={profileData.nickname}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      value={profileData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Bio */}
                <div className="mt-6">
                  <label
                    htmlFor="bio"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    My Bio
                  </label>
                  <textarea
                    id="bio"
                    name="bio"
                    rows="4"
                    value={profileData.bio}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                {/* Form Buttons */}
                <div className="mt-6 flex flex-wrap gap-4">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Update Profile
                  </button>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}
