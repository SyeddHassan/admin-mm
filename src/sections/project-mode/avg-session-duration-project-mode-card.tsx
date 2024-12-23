"use client";

import React from "react";
import { DateRange } from "react-day-picker";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DateRangePicker } from "@/components/common/date-range-picker";
import { ChartJsLineChart04 } from "@/components/charts/chartjs-line-charts";

const AvgSessionDurationProjectModeCard = () => {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(),
  });

  return (
    <Card className="!standard-card-styling xl:col-span-2 md:col-span-4 col-span-1">
      <CardHeader className="md:py-4 py-6 border-b border-border flex md:flex-row flex-col max-md:gap-8 items-center md:justify-between">
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px] max-md:order-2">
          Average Session Duration (Project Mode)
        </CardTitle>

        <DateRangePicker date={date} setDate={setDate} />
      </CardHeader>

      {/* AVERAGE SESSION DURATION LINE CHART */}
      <CardContent className="py-4 h-[500px] max-md:px-2">
        <ChartJsLineChart04
          data={{
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
            values: [150, 60, 40, 25, 30, 20, 18],
          }}
          leftText="Duration (minutes)"
        />
      </CardContent>
    </Card>
  );
};

export default AvgSessionDurationProjectModeCard;
