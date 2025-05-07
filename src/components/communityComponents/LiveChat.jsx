"use client";

import { motion } from "framer-motion";
import { Send, Mic } from "lucide-react";

const LiveChat = ({ darkMode }) => {
  // Suggested questions for Live Chat
  const suggestedQuestions = [
    "What is coding really made of?",
    "Can plants grow without sunlight?",
    "Why do we need math in real life?",
  ];

  return (
  // Live Chat Content
  <div className="max-w-3xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`p-6 rounded-lg ${darkMode ? "bg-gray-800" : "bg-white"}`}
    >
      {/* Welcome Message */}
      <div className="text-center mb-8">
        <h2
          className={`text-2xl font-semibold mb-2 ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          Hello, Jayy one 👋
        </h2>
        <p
          className={`text-xl mb-2 ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Got something you're wondering about?
        </p>
        <p
          className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}
        >
          Use one of the questions below or type in something you've been
          wondering!
        </p>
      </div>

      {/* Suggested Questions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {suggestedQuestions.map((question, index) => (
          <button
            key={index}
            className={`p-3 text-center rounded-lg text-sm font-medium border transition-colors ${
              darkMode
                ? "border-gray-700 bg-gray-700 hover:bg-gray-600 text-white"
                : "border-gray-200 hover:bg-gray-50 text-gray-800"
            }`}
          >
            {question}
          </button>
        ))}
      </div>

      {/* Message Input */}
      <div className="relative">
        <div
          className={`flex items-center rounded-full px-4 py-2 ${
            darkMode
              ? "bg-gray-700 border-gray-600 text-white"
              : "bg-white border border-gray-200 text-gray-800"
          }`}
        >
          <button
            className={`p-1 rounded-full ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            <Mic size={18} />
          </button>
          <input
            type="text"
            placeholder="Type message"
            className={`flex-1 px-3 py-1 bg-transparent border-none focus:outline-none ${
              darkMode
                ? "text-white placeholder-gray-400"
                : "text-gray-800 placeholder-gray-500"
            }`}
          />
          <button
            className={`p-1 rounded-full ${
              darkMode
                ? "text-blue-400 hover:text-blue-300"
                : "text-blue-600 hover:text-blue-700"
            }`}
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </motion.div>
  </div>
  );
};

export default LiveChat;