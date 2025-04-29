import Sidebar from "../components/studentDashboard/Sidebar.jsx";
import Topbar from "../components/studentDashboard/Topbar.jsx";
import WelcomeBanner from "../components/studentDashboard/WelcomeBanner.jsx";
import StillWorkingOn from "../components/studentDashboard/StillWorkingOn.jsx";
import TimeSpentStudying from "../components/studentDashboard/TimeSpentStudying.jsx";
import ContinueLearning from "../components/studentDashboard/ContinueLearning.jsx";
import ProgressOverview from "../components/studentDashboard/ProgressOverview.jsx";
import UpcomingClasses from "../components/studentDashboard/UpcomingClasses.jsx";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-[64px] lg:ml-64 transition-all duration-300">

        <Topbar />

        <main className="p-6 pt-24 flex flex-col lg:flex-row gap-6">
          <div className="flex-1 space-y-6">
            <WelcomeBanner />

            <div className="flex flex-col md:flex-row gap-6">
              <StillWorkingOn />
              <TimeSpentStudying />
            </div>

            <ContinueLearning />
          </div>

          <div className="w-full lg:w-[280px] space-y-6">
            <ProgressOverview />
            <UpcomingClasses />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
