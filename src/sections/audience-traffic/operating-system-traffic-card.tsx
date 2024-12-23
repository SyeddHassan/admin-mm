"use client";

import React, { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartJsDoughnutChart02 } from "@/components/charts/chartjs-doughnut-charts";
import DatePicker from "@/components/common/date-picker";

const OperatingSystemTrafficCard = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );

  return (
    <Card className="!standard-card-styling col-span-1">
      <CardHeader className="md:py-4 py-6 border-b border-border flex md:flex-row flex-col max-md:gap-8 items-center md:justify-between">
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px] max-md:order-2">
          Traffic by Operation System
        </CardTitle>

        <DatePicker date={selectedDate} setDate={setSelectedDate} />
      </CardHeader>

      {/* TRAFFIC BY OPERATING SYSTEM DOUGHNUT CHART */}
      <CardContent className="py-4 mx-auto xl:h-[700px] xl:flex-center max-xl:py-12">
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

export default OperatingSystemTrafficCard;
