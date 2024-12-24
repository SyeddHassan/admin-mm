"use client";

import React, { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartJsGaugeChart } from "@/components/charts/chartjs-gauge-charts";
import DatePicker from "@/components/common/date-picker";

const MemoryUtilizationCard = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );

  return (
    <Card className="!standard-card-styling col-span-1">
      <CardHeader className="md:py-4 py-6 border-b border-border flex md:flex-row flex-col max-md:gap-8 items-center md:justify-between">
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px] max-md:order-2">
          Memory Utilization (%)
        </CardTitle>

        <DatePicker date={selectedDate} setDate={setSelectedDate} />
      </CardHeader>

      {/* MEMORY UTILIZATION GAUGE CHART */}
      <CardContent className="w-full flex justify-center items-center py-6">
        <ChartJsGaugeChart percentage={55} />
      </CardContent>
    </Card>
  );
};

export default MemoryUtilizationCard;
