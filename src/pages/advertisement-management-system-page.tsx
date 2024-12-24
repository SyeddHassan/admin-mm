import React from "react";

import SectionalHeading from "@/components/common/sectional-heading";
import AdvertisementManagementSystemStatsCards from "@/sections/advertisement-management/advertisement-management-system-stats-card";
import AdvertisementCampaignsCard from "@/sections/advertisement-management/advertisement-campaigns-card";
import ImpressionsConversionsCard from "@/sections/advertisement-management/impressions-conversions-card";
import GoalAchievedCard from "@/sections/advertisement-management/goal-achieved-card";
import ImpressionsCard from "@/sections/advertisement-management/impressions-card";
import ConversionsCard from "@/sections/advertisement-management/conversions-card";
import PeakTimeTypeCard from "@/sections/advertisement-management/peak-time-type-card";
import AdvertisingTypeCard from "@/sections/advertisement-management/advertising-time-card";
import RegionAdCampaignsCard from "@/sections/advertisement-management/region-ad-campaigns-card";

const AdvertisementManagementSystemPage = () => {
  return (
    <main className="page-layout-standard section-margin-standard">
      <SectionalHeading
        title="Advertisement Management System"
        showNewCampaign={true}
      />
      <AdvertisementManagementSystemStatsCards />
      <AdvertisementCampaignsCard />

      <div className="w-full grid lg:grid-cols-3 grid-cols-1 lg:gap-4 gap-8">
        <ImpressionsConversionsCard />
        <GoalAchievedCard />
      </div>

      <div className="w-full grid lg:grid-cols-2 lg:gap-4 gap-8">
        <ImpressionsCard />
        <ConversionsCard />
      </div>

      <div className="w-full grid lg:grid-cols-3 md:grid-cols-4 grid-cols-1 md:gap-4 gap-8">
        <PeakTimeTypeCard />
        <AdvertisingTypeCard />
        <RegionAdCampaignsCard />
      </div>
    </main>
  );
};

export default AdvertisementManagementSystemPage;
