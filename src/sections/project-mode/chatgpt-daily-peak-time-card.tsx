"use client";

import React, { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartJsLineChart01 } from "@/components/charts/chartjs-line-charts";
import DatePicker from "@/components/common/date-picker";

const ChatGPTDailyPeakTimeCard = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );

  return (
    <Card className="!standard-card-styling col-span-1">
      <CardHeader className="md:py-4 py-6 border-b border-border flex md:flex-row flex-col max-md:gap-8 items-center md:justify-between">
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px] max-md:order-2">
          ChatGPT Daily Peak Time
        </CardTitle>

        <DatePicker date={selectedDate} setDate={setSelectedDate} />
      </CardHeader>

      {/* CHATGPT DAILY PEAK TIME LINE CHART */}
      <CardContent className="h-[500px] w-full lg:w-[70%] md:w-[60%] max-lg:py-12 flex-center mx-auto">
        <ChartJsLineChart01
          chartData={[
            {
              name: "Morning",
              value: "09:00",
              color: "#FFA500",
              data: [40, 50, 45, 55, 45, 50, 40, 55, 45],
            },
            {
              name: "Afternoon",
              value: "14:30",
              color: "#FF6347",
              data: [40, 50, 45, 55, 45, 50, 40, 55, 45],
            },
            {
              name: "Nigth",
              value: "22:45",
              color: "#4169E1",
              data: [40, 50, 45, 55, 45, 50, 40, 55, 45],
            },
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default ChatGPTDailyPeakTimeCard;
