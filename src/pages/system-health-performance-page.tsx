import React from "react";

import SectionalHeading from "@/components/common/sectional-heading";
import SystemStatusCard from "@/sections/system-health-performance/system-status-card";
import ServerStatusCard from "@/sections/system-health-performance/server-status-card";

const SystemHealthPerformancePage = () => {
  return (
    <main className="page-layout-standard section-margin-standard">
      <SectionalHeading title="System Health and Performance" />

      <div className="w-full grid xl:grid-cols-3 grid-cols-1 xl:gap-4 gap-8">
        <SystemStatusCard />
        <ServerStatusCard />
      </div>
    </main>
  );
};

export default SystemHealthPerformancePage;
