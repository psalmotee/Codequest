"use client"

import { createContext, useState, useContext, useEffect } from "react"

// Create a context for dark mode
const DarkModeContext = createContext()

// Custom hook to use the dark mode context
export const useDarkMode = () => useContext(DarkModeContext)

// Provider component that wraps the app
export const DarkModeProvider = ({ children }) => {
  // Initialize state from localStorage or default to false
  const [darkMode, setDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem("darkMode")
    return savedDarkMode === "enabled"
  })

  // Update localStorage and document class when darkMode changes
  useEffect(() => {
    if (darkMode) {
      localStorage.setItem("darkMode", "enabled")
      document.documentElement.classList.add("dark-mode")
    } else {
      localStorage.setItem("darkMode", "disabled")
      document.documentElement.classList.remove("dark-mode")
    }
  }, [darkMode])

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode)
  }

  // Value to be provided to consumers
  const value = {
    darkMode,
    toggleDarkMode,
  }

  return <DarkModeContext.Provider value={value}>{children}</DarkModeContext.Provider>
}

export default DarkModeContext
