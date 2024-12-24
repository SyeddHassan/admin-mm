"use client";

import React, { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DatePicker from "@/components/common/date-picker";
import { ChartJsBarChart07 } from "@/components/charts/chartjs-bar-charts";

const RegionAdCampaignsCard = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );

  return (
    <Card className="!standard-card-styling lg:col-span-1 md:col-span-4 col-span-1">
      <CardHeader className="md:py-4 py-6 border-b border-border flex md:flex-row flex-col max-md:gap-8 items-center md:justify-between">
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px] max-md:order-2">
          Ads Campaign by Region
        </CardTitle>

        <DatePicker date={selectedDate} setDate={setSelectedDate} />
      </CardHeader>

      {/* REGION AD CAMPAIGNS BAR CHART */}
      <CardContent className="h-[500px] py-12">
        <ChartJsBarChart07
          data={[
            { region: "Worldwide", campaigns: 383 },
            { region: "Africa", campaigns: 258 },
            { region: "Australia", campaigns: 214 },
            { region: "Asia", campaigns: 120 },
            { region: "Europe", campaigns: 15 },
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default RegionAdCampaignsCard;
