"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";

import { RealTimeMapData } from "@/constants/dashboard-page-components-data";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FilterButtons01 } from "@/components/common/filter-buttons";
import RealTimeMapStats from "../../components/partials/dashboard/real-time-map-stats";
import Loading from "@/components/common/loader";
const RealTimeMap = dynamic(
  () =>
    import("../../components/maps/real-time-map").then(
      (mod) => mod.RealTimeMap
    ),
  {
    ssr: false,
    loading: () => (
      <Loading
        Icon={LoaderCircle}
        iconClassName="w-[50px] h-[50px] text-secondary-theme animate-spin"
        containerClassName="w-full h-full"
      />
    ),
  }
);

import { LoaderCircle } from "lucide-react";

const RealTimeMonitoringMapVersionCard = () => {
  const [selectedTab, setSelectedTab] = useState("sessions");
  const [selectedCountry, setSelectedCountry] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  return (
    <Card className="!standard-card-styling">
      <CardHeader className="md:py-4 py-6 border-b border-border flex md:flex-row flex-col max-md:gap-4 items-center md:justify-between">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Real-Time Global Activity
        </CardTitle>

        {/* FILTER BUTTONS */}
        <FilterButtons01
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
      </CardHeader>

      {/* REAL TIME MAP ACTIVITIES & STATS */}
      <CardContent className="py-5 md:px-[1.5rem] px-1 md:h-[550px] h-[900px] flex md:flex-row flex-col">
        {/* REAL TIME MAP */}
        <div className="lg:w-[66.66666667%] md:w-[55%] w-full h-full">
          <RealTimeMap
            selectedTab={selectedTab}
            data={RealTimeMapData}
            selectedCountry={selectedCountry}
          />
        </div>

        {/* REAL TIME MAP STATS */}
        <div className="lg:w-[calc(100%-66.66666667%)] md:w-[calc(100%-55%)] w-full md:h-full h-[400px]">
          <RealTimeMapStats
            selectedTab={selectedTab}
            data={RealTimeMapData}
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default RealTimeMonitoringMapVersionCard;
