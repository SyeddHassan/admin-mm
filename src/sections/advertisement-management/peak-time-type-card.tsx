"use client";

import React, { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartJsLineChart01 } from "@/components/charts/chartjs-line-charts";
import DatePicker from "@/components/common/date-picker";

const PeakTimeTypeCard = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );

  return (
    <Card className="!standard-card-styling lg:col-span-1 md:col-span-2 col-span-1">
      <CardHeader className="lg:py-4 py-6 border-b border-border flex lg:flex-row flex-col max-lg:gap-8 items-center lg:justify-between">
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px] max-lg:order-2">
          Peak Times by Type
        </CardTitle>

        <DatePicker date={selectedDate} setDate={setSelectedDate} />
      </CardHeader>

      {/* PEAK TIME BY TYPE LINE CHART */}
      <CardContent className="lg:h-[500px] w-full lg:w-[70%] max-lg:py-12 flex-center mx-auto">
        <ChartJsLineChart01
          chartData={[
            {
              name: "Text Ads",
              value: "14:00",
              color: "#434edd",
              data: [40, 50, 45, 55, 45, 50, 40, 55, 45],
            },
            {
              name: "Image/Video Ads",
              value: "09:40",
              color: "#2b7d6b",
              data: [40, 50, 45, 55, 45, 50, 40, 55, 45],
            },
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default PeakTimeTypeCard;
