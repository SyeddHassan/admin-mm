import React from "react";

import SectionalHeading from "@/components/common/sectional-heading";
import TrafficOverTimeCard from "@/sections/audience-traffic/traffic-over-time-card";
import NewVsReturningVisitorsCard from "@/sections/audience-traffic/new-vs-returning-visitors-card";
import TrafficTimeDaysCard from "@/sections/audience-traffic/traffic-time-days-card";
import DeviceTrafficCard from "@/sections/audience-traffic/device-traffic-card";
import OperatingSystemTrafficCard from "@/sections/audience-traffic/operating-system-traffic-card";
import TrafficSourceVsChatCreationCard from "@/sections/audience-traffic/traffic-source-vs-chat-creation-card";
import PageVisitsCard from "@/sections/audience-traffic/page-visits-card";

const AudienceTrafficPage = () => {
  return (
    <main className="page-layout-standard section-margin-standard">
      <SectionalHeading title="Audience Traffic" />

      <div className="w-full grid xl:grid-cols-3 grid-cols-1 xl:gap-4 gap-8">
        <TrafficOverTimeCard />
        <NewVsReturningVisitorsCard />
      </div>

      <TrafficTimeDaysCard />

      <div className="w-full grid xl:grid-cols-3 grid-cols-1 xl:gap-4 gap-8">
        <DeviceTrafficCard />
        <OperatingSystemTrafficCard />
      </div>

      <div className="w-full grid xl:grid-cols-2 grid-cols-1 xl:gap-4 gap-8">
        <TrafficSourceVsChatCreationCard />
        <PageVisitsCard />
      </div>
    </main>
  );
};

export default AudienceTrafficPage;
