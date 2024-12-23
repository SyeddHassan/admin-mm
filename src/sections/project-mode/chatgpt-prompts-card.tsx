"use client";

import React, { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartJsPieChart01 } from "@/components/charts/chartjs-pie-charts";
import DatePicker from "@/components/common/date-picker";

const ChatGPTPromptsCard = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );

  return (
    <Card className="!standard-card-styling xl:col-span-2 col-span-1">
      <CardHeader className="md:py-4 py-6 border-b border-border flex md:flex-row flex-col max-md:gap-8 items-center md:justify-between">
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px] max-md:order-2">
          ChatGPT Prompts
        </CardTitle>

        <DatePicker date={selectedDate} setDate={setSelectedDate} />
      </CardHeader>

      {/* CHATGPT PROMPTS PIE CHART */}
      <CardContent className="py-4 mx-auto xl:h-[500px] xl:flex-center max-xl:py-12 px-0">
        <ChartJsPieChart01
          chartData={[
            {
              label: "Advice & Guidance",
              percentage: 70,
              color: "#2285f2",
            },
            { label: "Problem Solving", percentage: 30, color: "#d83b82" },
            {
              label: "Creative Writing Assistance",
              percentage: 30,
              color: "#ab40e8",
            },
            {
              label: "Entertainment & Fun",
              percentage: 40,
              color: "#5e37ed",
            },
            { label: "Recommendations", percentage: 50, color: "#4dd992" },
            { label: "Other", percentage: 50, color: "#f02f1d" },
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default ChatGPTPromptsCard;
