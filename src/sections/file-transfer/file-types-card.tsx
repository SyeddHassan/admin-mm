"use client";

import React, { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartJsPieChart01 } from "@/components/charts/chartjs-pie-charts";
import DatePicker from "@/components/common/date-picker";

const FileTypesCard = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );

  return (
    <Card className="!standard-card-styling xl:col-span-3 col-span-1">
      <CardHeader className="xl:py-4 py-6 border-b border-border flex xl:flex-row flex-col max-xl:gap-8 items-center xl:justify-between">
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px] max-xl:order-2">
          Files by Type
        </CardTitle>

        <DatePicker date={selectedDate} setDate={setSelectedDate} />
      </CardHeader>

      {/* FILE TYPES PIE CHART */}
      <CardContent className="py-4 mx-auto xl:h-[500px] xl:flex-center max-xl:py-12 px-0">
        <ChartJsPieChart01
          chartData={[
            { label: "Image", percentage: 50, color: "#2285f2" },
            { label: "Audio", percentage: 30, color: "#d83b82" },
            { label: "Zip", percentage: 20, color: "#ab40e8" },
            { label: "Video", percentage: 16, color: "#5e37ed" },
            { label: "Documents", percentage: 13, color: "#4dd992" },
            { label: "Other", percentage: 19, color: "#f02f1d" },
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default FileTypesCard;