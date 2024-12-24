"use client";

import React, { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DatePicker from "@/components/common/date-picker";
import { ChartJsDoughnutChart02 } from "@/components/charts/chartjs-doughnut-charts";

const BroswerUsersCard = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );

  return (
    <Card className="!standard-card-styling lg:col-span-1 md:col-span-4 col-span-1 lg:order-2 md:order-3 order-2">
      <CardHeader className="md:py-4 py-6 border-b border-border flex md:flex-row flex-col max-md:gap-8 items-center md:justify-between">
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px] max-md:order-2">
          Users by Browser
        </CardTitle>

        <DatePicker date={selectedDate} setDate={setSelectedDate} />
      </CardHeader>

      {/* BROWSER USERS DOUGHNUT CHART */}
      <CardContent className="py-4 mx-auto lg:h-[500px] lg:flex-center max-lg:py-12 px-0">
        <ChartJsDoughnutChart02
          chartData={[
            { label: "Chrome", percentage: 20, color: "#5ebce1" },
            { label: "Safari", percentage: 25, color: "#3a56af" },
            { label: "Firefox", percentage: 15, color: "#ab40e8" },
            { label: "Explorer", percentage: 15, color: "#e1d75e" },
            { label: "Other", percentage: 20, color: "#e8a7b4" },
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default BroswerUsersCard;
