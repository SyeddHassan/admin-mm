import React from "react";

import MessageMomentStatsCards from "@/sections/dashboard/messagemoment-stats-cards";
import RealTimeMonitoringMapVersionCard from "@/sections/dashboard/real-time-monitoring-map-version-card";
import RealTimeMonitoringTableVersionCard from "@/sections/dashboard/real-time-monitoring-table-version-card";
import AvgUsersChatRoomCard from "@/sections/dashboard/avg-users-chat-room-card";
import ReturnedVisitorsCard from "@/sections/dashboard/returned-visitors-card";

const DashboardPage = () => {
  return (
    <main className="page-layout-standard section-margin-standard">
      <MessageMomentStatsCards />
      <RealTimeMonitoringMapVersionCard />
      <RealTimeMonitoringTableVersionCard />

      <div className="w-full grid md:grid-cols-2 grid-cols-1 md:gap-4 gap-8">
        <AvgUsersChatRoomCard />
        <ReturnedVisitorsCard />
      </div>
    </main>
  );
};

export default DashboardPage;
