import { MessageSquare, Clock, Send, Mic } from "lucide-react";

// import image
import mukky from "/community-img/mukky.png"
import james from "/community-img/james.png";
import mary from "/community-img/mary.png";
import justice from "/community-img/justice.png";
import oluwa from "/community-img/oluwa.png";
import mike from "/community-img/mike.png";
import temmy from "/community-img/temmy.png";
import angela from "/community-img/angela.png";
import toriola from "/community-img/toriola.png";
import magic from "/community-img/magic.png";
import cr7 from "/community-img/cr7.png";
import monaky from "/community-img/monaky.png";



const QuestionCorner = ({ darkMode, activeCategory, setActiveCategory }) => {
  // Community questions data
  const questions = [
    {
      id: 1,
      title: "How Do Robots Know What to Do?",
      content:
        "Robots are super cool they can move, talk, solve problems, and even play games! But how do they know what to do and when to do it? Are they using their own brains to decide, or are humans giving them secret instructions? I really want to understand what’s going on inside a robot’s head!",
      author: {
        name: "mukkkky",
        avatar: mukky,
      },
      replies: 25,
      timestamp: "4hrs ago",
    },
    {
      id: 2,
      title: "Who Invented the Internet?",
      content:
        "We use the internet all the time for games, videos, school, and chatting with friends but who invented it in the first place? Was it just one person or a whole team? And how does something invisible like Wi-Fi send so much information so fast? I’d love to know how it all began!",
      author: {
        name: "James11",
        avatar: james,
      },
      replies: 107,
      timestamp: "7hrs ago",
    },
    {
      id: 3,
      title: "What's the Fun Way to Learn Math?",
      content:
        "Sometimes math feels like a big puzzle that’s hard to solve but I really want it to be fun! Do you know any cool games, funny tricks, or easy ways to remember things like times tables or fractions? I’m hoping to find some fun ways to make math feel more like play and less like work!",
      author: {
        name: "Marryfone",
        avatar: mary,
      },
      replies: 133,
      timestamp: "8hrs ago",
    },
    {
      id: 4,
      title: "Why Does the Moon Change Shape?",
      content:
        "One night the moon is a big glowing circle, and another night it’s just a little sliver or even totally gone! Why does it keep changing like that? Is it hiding behind clouds, or is something else going on in space? I’d love to know why the moon doesn’t always look the same!",
      author: {
        name: "Justice",
        avatar: justice,
      },
      replies: 200,
      timestamp: "8hrs ago",
    },
    {
      id: 5,
      title: "How Can I Make My Own Game?",
      content:
        "I’ve got awesome ideas for a game maybe with dragons, space robots, or a candy maze! But I don’t know how to turn those ideas into a real game. What tools or apps should I use? Do I need to learn to code first, or is there an easier way to get started? I’d love help figuring out how to bring my game to life!",
      author: {
        name: "OluwaT",
        avatar: oluwa,
      },
      replies: 127,
      timestamp: "11hrs ago",
    },
    {
      id: 6,
      title: "Can You Clone Art or Animation?",
      content:
        "I really enjoy drawing, painting, and making up my own characters and I’ve heard you can use code to bring your art to life! Can I use programming to make pictures move, create animations, or even design my own digital comics or games? I’d love to know how to mix my creativity with tech in a fun way!",
      author: {
        name: "Mike",
        avatar: mike,
      },
      replies: 139,
      timestamp: "18hrs ago",
    },
    {
      id: 7,
      title: "Is There Life on Other Planets?",
      content:
        "Our planet is bursting with life trees, bugs, dolphins, and people but what about the rest of space? Could there be aliens on Mars, tiny creatures on faraway moons, or life we haven’t even imagined yet? I really want to know if Earth is the only place with living things or if we have cosmic neighbors out there!",
      author: {
        name: "Temmy",
        avatar: temmy,
      },
      replies: 303,
      timestamp: "22hrs ago",
    },
    {
      id: 8,
      title: "Why Do Cakes Riset in the Oven?",
      content:
        "It’s like magic when we mix cake batter, it’s all gooey and flat, but once it goes into the oven, it rises and turns into something soft and delicious! What’s really going on in there? Is it the heat, some special ingredient, or a secret science trick that makes cakes grow and get fluffy?",
      author: {
        name: "Angela",
        avatar: angela,
      },
      replies: 225,
      timestamp: "1day ago",
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
            <div
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
                    <span
                      className={`text-sm mr-1 ${
                        darkMode ? "text-gray-500" : "text-gray-300"
                      }`}
                    >
                      Asked by
                    </span> 
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
            </div>
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
              { name: "Toriola Jimmy", avatar: toriola },
              { name: "Temmy", avatar: temmy },
              { name: "Magic_Mimi", avatar: magic },
              { name: "CR7", avatar: cr7 },
              { name: "Monaky", avatar: monaky },
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
