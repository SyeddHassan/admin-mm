"use client";

import React, { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DatePicker from "@/components/common/date-picker";
import { ChartJsDoughnutChart04 } from "@/components/charts/chartjs-doughnut-charts";

const ChatGPTPromptsCard = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );

  return (
    <Card className="!standard-card-styling lg:col-span-2 col-span-1">
      <CardHeader className="md:py-4 py-6 border-b border-border flex md:flex-row flex-col max-md:gap-8 items-center md:justify-between">
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px] max-md:order-2">
          ChatGPT Prompts
        </CardTitle>

        <DatePicker date={selectedDate} setDate={setSelectedDate} />
      </CardHeader>

      {/* CHATGPT PROMPTS DOUGHNUT CHART */}
      <CardContent className="h-[600px] py-0 flex-center px-4">
        <div className="w-full max-w-[470px]">
        <ChartJsDoughnutChart04
          chartData={[
            {
              label: "Advice & Guidance",
              percentage: 70,
              color: "#5ebce1",
            },
            { label: "Problem Solving", percentage: 30, color: "#3a56af" },
            {
              label: "Creative Writing Assistance",
              percentage: 30,
              color: "#ab40e8",
            },
            {
              label: "Entertainment & Fun",
              percentage: 40,
              color: "#e1d75e",
            },
            { label: "Recommendations", percentage: 50, color: "#e8a7b4" },
            { label: "Other", percentage: 50, color: "#40e8a5" },
          ]}
        />
        </div>
      </CardContent>
    </Card>
  );
};

export default ChatGPTPromptsCard;
