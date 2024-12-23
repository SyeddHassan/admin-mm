"use client";

import React, { useState } from "react";
import { useTheme } from "next-themes";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartJsDoughnutChart01 } from "@/components/charts/chartjs-doughnut-charts";
import DatePicker from "@/components/common/date-picker";

const FileMomentServerCapacityCard = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );

  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";

  return (
    <Card className="!standard-card-styling col-span-1">
      <CardHeader className="md:py-4 py-6 border-b border-border flex md:flex-row flex-col max-md:gap-8 items-center md:justify-between">
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px] max-md:order-2">
          Server Capacity (FileMoment)
        </CardTitle>

        <DatePicker date={selectedDate} setDate={setSelectedDate} />
      </CardHeader>

      {/* FILEMOMENT SERVER CAPACITY DOUGHNUT CHART */}
      <CardContent className="py-4 mx-auto h-[500px] flex-center max-xl:py-12 px-0">
        <ChartJsDoughnutChart01
          backgroundColor={[
            "#f04c3d",
            `${isDarkTheme ? "#121212" : "#f2f2f2"}`,
          ]}
          label="Server Space (Capacity)"
          labelColor="text-[#f04c3d]"
          percentage={54}
        />
      </CardContent>
    </Card>
  );
};

export default FileMomentServerCapacityCard;
