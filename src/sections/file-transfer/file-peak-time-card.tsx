"use client";

import React, { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartJsLineChart01 } from "@/components/charts/chartjs-line-charts";
import DatePicker from "@/components/common/date-picker";

const FilePeakTimeCard = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );

  return (
    <Card className="!standard-card-styling xl:col-span-2 col-span-1">
      <CardHeader className="xl:py-4 py-6 border-b border-border flex xl:flex-row flex-col max-xl:gap-8 items-center xl:justify-between">
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px] max-xl:order-2">
          Files Peak Time
        </CardTitle>

        <DatePicker date={selectedDate} setDate={setSelectedDate} />
      </CardHeader>

      {/* FILE PEAK TIME LINE CHART */}
      <CardContent className="h-[550px] w-full xl:w-[70%] md:w-[90%] max-xl:py-12 flex-center mx-auto">
        <ChartJsLineChart01
          chartData={[
            {
              name: "Standard",
              value: "14:00",
              color: "#434edd",
              data: [40, 50, 45, 55, 45, 50, 40, 55, 45],
            },
            {
              name: "Secure",
              value: "09:40",
              color: "#2b7d6b",
              data: [40, 50, 45, 55, 45, 50, 40, 55, 45],
            },
            {
              name: "Wallet",
              value: "14:30",
              color: "#FF9800",
              data: [40, 50, 45, 55, 45, 50, 40, 55, 45],
            },
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default FilePeakTimeCard;