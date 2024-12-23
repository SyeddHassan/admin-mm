import React from "react";

import SectionalHeading from "@/components/common/sectional-heading";
import SystemStatusCard from "@/sections/system-health-performance/system-status-card";
import ServerStatusCard from "@/sections/system-health-performance/server-status-card";
import ServerActivityCard from "@/sections/system-health-performance/server-activity-card";
import CpuUtilizationCard from "@/sections/system-health-performance/cpu-utilization-card";
import MemoryUtilizationCard from "@/sections/system-health-performance/memory-utilization-card";
import DiskUtilizationCard from "@/sections/system-health-performance/disk-utilization-card";
import AnomaliesEvolutionCard from "@/sections/system-health-performance/anomalies-evolution-card";
import MongodbPerformanceCard from "@/sections/system-health-performance/mongodb-performance-card";
import RedisUsageOverviewCard from "@/sections/system-health-performance/redis-usage-overview-card";
import SocketIOServerActivityCard from "@/sections/system-health-performance/socket-io-server-activity-card";

const SystemHealthPerformancePage = () => {
  return (
    <main className="page-layout-standard section-margin-standard">
      <SectionalHeading title="System Health and Performance" />

      <div className="w-full grid lg:grid-cols-3 grid-cols-1 lg:gap-4 gap-8">
        <SystemStatusCard />
        <ServerStatusCard />
      </div>

      <ServerActivityCard />

      <div className="w-full grid lg:grid-cols-3 grid-cols-1 lg:gap-4 gap-8">
        <CpuUtilizationCard />
        <MemoryUtilizationCard />
        <DiskUtilizationCard />
      </div>

      <AnomaliesEvolutionCard />

      <MongodbPerformanceCard />

      <div className="w-full grid md:grid-cols-2 grid-cols-1 md:gap-4 gap-8">
        <RedisUsageOverviewCard />
        <SocketIOServerActivityCard />
      </div>
    </main>
  );
};

export default SystemHealthPerformancePage;
