import { MessageSquare, Clock, Send, Mic } from "lucide-react";
import { motion } from "framer-motion";

const QuestionCorner = ({ darkMode, activeCategory, setActiveCategory }) => {
  // Community questions data
  const questions = [
    {
      id: 1,
      title: "How Do Robots Know What to Do?",
      content:
        "I'm really curious about how robots are programmed. Do they have some kind of artificial intelligence that helps them make decisions? Or are they just following a set of instructions? I've been watching some videos about Boston Dynamics robots and they seem so smart!",
      author: {
        name: "Alex Chen",
        avatar: "/images/avatars/alex.png",
      },
      replies: 3,
      timestamp: "2h ago",
    },
    {
      id: 2,
      title: "Who Invented the Internet?",
      content:
        "For my history of technology project, I need to know who actually invented the internet. I've heard different names like Tim Berners-Lee and ARPANET, but I'm confused about who should get credit for the actual invention. Can anyone help clarify this?",
      author: {
        name: "Sarah Kim",
        avatar: "/images/avatars/sarah.png",
      },
      replies: 7,
      timestamp: "5h ago",
    },
    {
      id: 3,
      title: "What's the Fun Way to Learn Math?",
      content:
        "Mathematics has never been my strong suit, but I really want to improve my understanding. Are there any fun games or interactive websites that can help make learning math more enjoyable? I've tried some apps but they get boring quickly.",
      author: {
        name: "Michael Johnson",
        avatar: "/images/avatars/michael.png",
      },
      replies: 4,
      timestamp: "1d ago",
    },
    {
      id: 4,
      title: "Why Does the Moon Change Shape?",
      content:
        "My little sister asked me why the moon looks different every night, and I realized I don't have a good explanation. I know it has something to do with the phases, but can someone explain in simple terms why we see different shapes throughout the month?",
      author: {
        name: "Emily Wong",
        avatar: "/images/avatars/emily.png",
      },
      replies: 6,
      timestamp: "2d ago",
    },
    {
      id: 5,
      title: "How Can I Make My Own Game?",
      content:
        "I've been playing video games for years and now I want to try making one myself. I don't have any coding experience, but I'm willing to learn. What would be the best way to start? Are there any beginner-friendly tools or resources you'd recommend?",
      author: {
        name: "David Miller",
        avatar: "/images/avatars/david.png",
      },
      replies: 11,
      timestamp: "3d ago",
    },
    {
      id: 6,
      title: "Can You Clone Art or Animation?",
      content:
        "I really like the animation style in shows like 'Adventure Time' and I'm wondering if it's possible to recreate that style. Is it considered copying if I make my own characters but use a similar style? What's the line between inspiration and copying?",
      author: {
        name: "Sophia Garcia",
        avatar: "/images/avatars/sophia.png",
      },
      replies: 5,
      timestamp: "4d ago",
    },
    {
      id: 7,
      title: "Is There Life on Other Planets?",
      content:
        "I've been reading about exoplanets and the search for extraterrestrial life. With all the planets we've discovered, what are the chances that there's life out there? Has NASA found any evidence yet? I'm really interested in astronomy and space exploration.",
      author: {
        name: "James Wilson",
        avatar: "/images/avatars/james.png",
      },
      replies: 8,
      timestamp: "5d ago",
    },
    {
      id: 8,
      title: "Why Do Colors Exist in the Ocean?",
      content:
        "During my marine biology class, we learned that the deep ocean should be completely dark, but there are still colorful fish down there. If there's no light, why would fish evolve to have colors? What's the evolutionary advantage of being colorful in the dark?",
      author: {
        name: "Olivia Taylor",
        avatar: "/images/avatars/olivia.png",
      },
      replies: 4,
      timestamp: "6d ago",
    },
  ];

  // Categories for filtering
  const categories = [
    { name: "Question/Confusion", count: 24 },
    { name: "Robots", count: 18 },
    { name: "Coding & Games", count: 12 },
    { name: "Space", count: 9 },
    { name: "Nature & Earth", count: 7 },
  ];

  // Filter questions based on active category
  const filteredQuestions =
    activeCategory === "Question/Confusion" || activeCategory === "All"
      ? questions
      : questions.filter((q) => {
          // Simple filtering based on keywords in the content
          const content = q.content.toLowerCase();
          const title = q.title.toLowerCase();
          const category = activeCategory.toLowerCase();

          if (
            category === "robots" &&
            (title.includes("robot") || content.includes("robot"))
          )
            return true;
          if (
            category === "coding & games" &&
            (content.includes("coding") ||
              content.includes("game") ||
              title.includes("game") ||
              title.includes("code"))
          )
            return true;
          if (
            category === "space" &&
            (content.includes("planet") ||
              content.includes("space") ||
              content.includes("moon") ||
              title.includes("planet") ||
              title.includes("space"))
          )
            return true;
          if (
            category === "nature & earth" &&
            (content.includes("biology") ||
              content.includes("earth") ||
              content.includes("ocean") ||
              content.includes("nature") ||
              title.includes("ocean") ||
              title.includes("earth"))
          )
            return true;

          return false;
        });

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Left Column - Questions */}
      <div className="lg:w-3/4">
        <h2 className={"sr-only"}>Community</h2>

        {/* Questions List */}
        <div className="space-y-4">
          {filteredQuestions.map((question) => (
            <motion.div
              key={question.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`p-4 rounded-lg ${
                darkMode
                  ? "bg-gray-800 border border-gray-700"
                  : "bg-white shadow-sm"
              }`}
            >
              <h3
                className={`text-lg font-medium mb-2 ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                {question.title}
              </h3>
              <p
                className={`text-sm mb-4 line-clamp-2 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {question.content}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full overflow-hidden">
                    <img
                      src={
                        question.author.avatar ||
                        "/placeholder.svg?height=32&width=32"
                      }
                      alt={question.author.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span
                    className={`text-sm ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {question.author.name}
                  </span>
                </div>

                <div className="flex items-center space-x-4 text-sm">
                  <div
                    className={`flex items-center ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    <MessageSquare size={16} className="mr-1" />
                    <span>{question.replies}</span>
                  </div>
                  <div
                    className={`flex items-center ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    <Clock size={16} className="mr-1" />
                    <span>{question.timestamp}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right Column - Categories and Top Contributors */}
      <div className="lg:w-1/4 space-y-6">
        {/* Ask a Question Button (Mobile) */}
        <div className="w-full mb-4">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors">
            Ask a question
          </button>
        </div>

        {/* Question Crushers */}
        <div
          className={`p-4 rounded-lg ${
            darkMode
              ? "bg-gray-800 border border-gray-700"
              : "bg-white shadow-sm"
          }`}
        >
          <h3
            className={`font-medium mb-4 ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Question Crushers
          </h3>
          <ul className="space-y-3">
            {[
              { name: "Toriola Jimmy", avatar: "/images/avatars/toriola.png" },
              { name: "Temmy", avatar: "/images/avatars/temmy.png" },
              { name: "Magic_Mimi", avatar: "/images/avatars/magic_mimi.png" },
              { name: "CR7", avatar: "/images/avatars/cr7.png" },
              { name: "Monaky", avatar: "/images/avatars/monaky.png" },
            ].map((contributor, index) => (
              <li key={index} className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <img
                    src={
                      contributor.avatar ||
                      "/placeholder.svg?height=32&width=32"
                    }
                    alt={contributor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span
                  className={`text-sm ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {contributor.name}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Top Topics */}
        <div
          className={`p-4 rounded-lg ${
            darkMode
              ? "bg-gray-800 border border-gray-700"
              : "bg-white shadow-sm"
          }`}
        >
          <h3
            className={`font-medium mb-4 ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Top Topics
          </h3>
          <ul className="space-y-2">
            {["Robots", "Coding & Games", "Space", "Nature & Earth"].map(
              (topic, index) => (
                <li key={index}>
                  <button
                    onClick={() => setActiveCategory(topic)}
                    className={`w-full text-left py-1 px-2 rounded-md text-sm ${
                      activeCategory === topic
                        ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                        : darkMode
                        ? "text-gray-300 hover:bg-gray-700"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {topic}
                  </button>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QuestionCorner;
