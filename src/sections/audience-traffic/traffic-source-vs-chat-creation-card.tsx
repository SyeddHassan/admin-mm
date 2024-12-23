"use client";

import React, { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DatePicker from "@/components/common/date-picker";
import { ChartJsBarChart05 } from "@/components/charts/chartjs-bar-charts";

const TrafficSourceVsChatCreationCard = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );

  return (
    <Card className="!standard-card-styling col-span-1">
      <CardHeader className="md:py-4 py-6 border-b border-border flex md:flex-row flex-col max-md:gap-8 items-center md:justify-between">
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px] max-md:order-2">
          Traffic Sources vs Chat Creation
        </CardTitle>

        <DatePicker date={selectedDate} setDate={setSelectedDate} />
      </CardHeader>

      {/* TRAFFIC SOURCE VS CHAT CREATION BAR CHART */}
      <CardContent className="py-4 h-[500px] max-md:px-2">
        <ChartJsBarChart05
          data={[
            { category: "Direct", sources: 5, chatCreations: 15 },
            { category: "Twitter", sources: 6, chatCreations: 8 },
            { category: "Google.com", sources: 4, chatCreations: 2 },
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default TrafficSourceVsChatCreationCard;
