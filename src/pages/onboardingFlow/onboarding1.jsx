import React from "react";
import { Outlet } from "react-router-dom";

const Onboarding1 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <Outlet />
    </div>
  );
};

export default Onboarding1;
