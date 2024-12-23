"use client";

import React, { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartJsDoughnutChart02 } from "@/components/charts/chartjs-doughnut-charts";
import DatePicker from "@/components/common/date-picker";

const OperatingSystemUsersCard = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  return (
    <Card className="!standard-card-styling lg:col-span-1 md:col-span-2 col-span-1 lg:order-3 md:order-2 order-3">
      <CardHeader className="lg:py-4 py-6 border-b border-border flex lg:flex-row flex-col max-lg:gap-8 items-center lg:justify-between">
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px] max-lg:order-2">
          Users by Operation System
        </CardTitle>

        <DatePicker date={selectedDate} setDate={setSelectedDate} />
      </CardHeader>

      {/* OPERATING SYSTEM USERS DOUGHNUT CHART */}
      <CardContent className="py-4 mx-auto lg:h-[500px] lg:flex-center max-lg:py-12 px-0">
        <ChartJsDoughnutChart02
          chartData={[
            { label: "Mac", percentage: 30, color: "#5ebce1" },
            { label: "Windows", percentage: 30, color: "#3a56af" },
            { label: "Linux", percentage: 40, color: "#ab40e8" },
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default OperatingSystemUsersCard;
