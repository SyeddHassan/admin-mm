import React from "react";

import SectionalHeading from "@/components/common/sectional-heading";
import ActiveUsersSessionsCard from "@/sections/users-sessions/active-users-sessions-card";
import SessionTypeCard from "@/sections/users-sessions/session-type-card";
import ActiveRegionsSessionsCard from "@/sections/users-sessions/active-regions-sessions-card";
import AvgSessionDurationCard from "@/sections/users-sessions/avg-session-duration-card";
import PeakUsageTimesCard from "@/sections/users-sessions/peak-uasge-times-card";
import PeakTimesCard from "@/sections/users-sessions/peak-times-card";
import ActiveUsersSessionTimeCard from "@/sections/users-sessions/active-users-session-time-card";
import UsersSharingLinkCard from "@/sections/users-sessions/users-sharing-link-card";
import DeviceUsersCard from "@/sections/users-sessions/device-users-card";
import BroswerUsersCard from "@/sections/users-sessions/broswer-users-card";
import OperatingSystemUsersCard from "@/sections/users-sessions/operating-system-users-card";
import UsersAvgInactivityCard from "@/sections/users-sessions/users-avg-inactivity-card";
import UsersAvgMessagesCard from "@/sections/users-sessions/users-avg-messages-card";

const UsersSessionsPage = () => {
  return (
    <main className="page-layout-standard section-margin-standard">
      <SectionalHeading title="Users & Sessions" />

      <div className="w-full grid xl:grid-cols-3 grid-cols-1 xl:gap-4 gap-8">
        <ActiveUsersSessionsCard />
        <SessionTypeCard />
      </div>

      <div className="w-full grid xl:grid-cols-5 grid-cols-1 xl:gap-4 gap-8">
        <ActiveRegionsSessionsCard />
        <AvgSessionDurationCard />
      </div>

      <div className="w-full grid xl:grid-cols-3 grid-cols-1 xl:gap-4 gap-8">
        <PeakUsageTimesCard />
        <PeakTimesCard />
      </div>

      <div className="w-full grid xl:grid-cols-3 grid-cols-1 xl:gap-4 gap-8">
        <ActiveUsersSessionTimeCard />
        <UsersSharingLinkCard />
      </div>

      <div className="w-full grid xl:grid-cols-3 md:grid-cols-4 grid-cols-1 md:gap-4 gap-8">
        <DeviceUsersCard />
        <BroswerUsersCard />
        <OperatingSystemUsersCard />
      </div>

      <div className="w-full grid md:grid-cols-2 md:gap-4 gap-8">
        <UsersAvgMessagesCard />
        <UsersAvgInactivityCard />
      </div>
    </main>
  );
};

export default UsersSessionsPage;
