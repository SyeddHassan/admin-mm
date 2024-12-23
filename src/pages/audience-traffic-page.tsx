import React from "react";

import SectionalHeading from "@/components/common/sectional-heading";
import TrafficOverTimeCard from "@/sections/audience-traffic/traffic-over-time-card";
import NewVsReturningVisitorsCard from "@/sections/audience-traffic/new-vs-returning-visitors-card";
import TrafficTimeDaysCard from "@/sections/audience-traffic/traffic-time-days-card";

const AudienceTrafficPage = () => {
  return (
    <main className="page-layout-standard section-margin-standard">
      <SectionalHeading title="Audience Traffic" />

      <div className="w-full grid xl:grid-cols-3 grid-cols-1 xl:gap-4 gap-8">
        <TrafficOverTimeCard />
        <NewVsReturningVisitorsCard />
      </div>

      <TrafficTimeDaysCard />

      
    </main>
  );
};

export default AudienceTrafficPage;
