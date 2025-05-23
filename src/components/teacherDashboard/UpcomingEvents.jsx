"use client";

import { useState } from "react";
import Maths from "/images/Maths-Test.png";
import Typing from "/images/Typing.png";
import Coding from "/images/Coding.png";
import ML from "/images/ML.png";

const events = [
  {
    id: 1,
    title: "Science Fair",
    date: "May 15",
    time: "9:00 AM",
    image: Maths,
  },
  {
    id: 2,
    title: "Coding Speed Test",
    date: "May 18",
    time: "2:00 PM",
    image: Typing,
  },
  {
    id: 3,
    title: "Parent's Class",
    date: "May 20",
    time: "4:30 PM",
    image: Coding,
  },
  {
    id: 4,
    title: "Technical Activities",
    date: "May 22",
    time: "10:00 AM",
    image: ML,
  },
  {
    id: 5,
    title: "Art Workshop",
    date: "May 25",
    time: "1:00 PM",
    image: Maths,
  },
  {
    id: 6,
    title: "Sports Day",
    date: "May 28",
    time: "8:00 AM",
    image: Typing,
  },
  {
    id: 7,
    title: "Music Concert",
    date: "May 30",
    time: "6:00 PM",
    image: Coding,
  },
  {
    id: 8,
    title: "Robotics Challenge",
    date: "June 2",
    time: "11:00 AM",
    image: ML,
  },
];

const UpcomingEvents = () => {
  const [upcomingEvents] = useState(events);

  return (
    <div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="bg-white p-5 rounded-lg shadow-sm h-full overflow-hidden"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium">Upcoming</h3>
      </div>
      <div
        className="space-y-4 max-h-96 overflow-y-auto"
        style={{ scrollbarWidth: "thin", scrollbarColor: "#cbd5e0 #edf2f7" }}
      >
        {upcomingEvents.map((event) => (
          <div key={event.id} className="flex items-center space-x-3">
            <img
              src={event.image || "/placeholder.svg"}
              alt={event.title}
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div className="flex-1">
              <h3 className="font-medium text-sm">{event.title}</h3>
              <div className="text-xs text-gray-500">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3 w-3 mr-1"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  {event.date}
                </div>
                <div className="flex items-center mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3 w-3 mr-1"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  {event.time}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
