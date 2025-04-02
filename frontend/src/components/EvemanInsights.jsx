import React from "react";

const EvemanInsights = () => {
  const insights = {
    totalEvents: 120,
    totalClients: 85,
    successfulEvents: 110,
    activeManagers: 25,
    positiveFeedback: "95%",
  };

  return (
    <div className="w-full flex flex-col items-center text-center py-16 px-10">
      <div className="w-full max-w-8xl bg-[rgb(27,35,41)] shadow-lg border-2 border-black rounded-2xl p-6 sm:p-10 lg:p-15">
        <h2 className="text-4xl text-[rgb(164,174,233)] font-semibold mb-6">Eveman Insights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full">
          <p className="text-lg sm:text-xl text-gray-100 ">
            <span className="text-blue-100">{insights.totalEvents}+</span> Total Events Managed
          </p>
          <p className="text-lg sm:text-xl text-gray-100 font-semibold">
            <span className="text-blue-100">{insights.totalClients}+</span> Clients Served
          </p>
          <p className="text-lg sm:text-xl text-gray-100 font-semibold">
            <span className="text-blue-100">{insights.successfulEvents}+</span> Successful Events
          </p>
          <p className="text-lg sm:text-xl text-gray-100 font-semibold">
            <span className="text-blue-100">{insights.activeManagers}+</span> Active Event Managers
          </p>
          <p className="text-lg sm:text-xl text-gray-200 font-semibold md:col-span-2">
            <span className="text-[#9e3c51]">{insights.positiveFeedback}</span> Positive Feedback
          </p>
        </div>
        <p className="mt-4 text-sm sm:text-base text-gray-400 font-semibold">Response Time: 25 minutes</p>
      </div>
    </div>
  );
};

export default EvemanInsights;
