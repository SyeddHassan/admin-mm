"use client";

import React, { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartJsPieChart01 } from "@/components/charts/chartjs-pie-charts";
import DatePicker from "@/components/common/date-picker";

const BroswerUsersCard = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  return (
    <Card className="!standard-card-styling xl:col-span-1 md:col-span-4 col-span-1 xl:order-2 md:order-3 order-2">
      <CardHeader className="md:py-4 py-6 border-b border-border flex md:flex-row flex-col max-md:gap-8 items-center md:justify-between">
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px] max-md:order-2">
          Users by Browser
        </CardTitle>

        <DatePicker date={selectedDate} setDate={setSelectedDate} />
      </CardHeader>

      {/* BROWSER USERS PIE CHART */}
      <CardContent className="py-4 mx-auto xl:h-[500px] xl:flex-center max-xl:py-12 px-0">
        <ChartJsPieChart01
          chartData={[
            { label: "Chrome", percentage: 20, color: "#2285f2" },
            { label: "Safari", percentage: 25, color: "#d83b82" },
            { label: "Firefox", percentage: 15, color: "#ab40e8" },
            { label: "Explorer", percentage: 15, color: "#5e37ed" },
            { label: "Other", percentage: 20, color: "#4dd992" },
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default BroswerUsersCard;
