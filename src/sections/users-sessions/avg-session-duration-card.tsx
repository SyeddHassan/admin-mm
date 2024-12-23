"use client";

import React from "react";
import { DateRange } from "react-day-picker";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartJsLineChart02 } from "@/components/charts/chartjs-line-charts";
import { DateRangePicker } from "@/components/common/date-range-picker";

const AvgSessionDurationCard = () => {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(),
  });

  return (
    <Card className="!standard-card-styling lg:col-span-3">
      <CardHeader className="md:py-4 py-6 border-b border-border flex md:flex-row flex-col max-md:gap-8 items-center md:justify-between">
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px] max-md:order-2">
          Average Session Duration
        </CardTitle>

        <DateRangePicker date={date} setDate={setDate} />
      </CardHeader>

      {/* AVERAGE SESSION DURATION LINE CHART */}
      <CardContent className="lg:h-full h-[550px] w-full flex-center mx-auto max-lg:py-8 lg:-translate-y-[2rem]">
        <ChartJsLineChart02
          data={{
            date: [
              "02 Jan",
              "03 Jan",
              "04 Jan",
              "05 Jan",
              "06 Jan",
              "07 Jan",
              "08 Jan",
              "09 Jan",
              "10 Jan",
              "11 Jan",
              "12 Jan",
              "13 Jan",
            ],
            high: [28, 29, 33, 36, 35, 34, 36, 37, 32, 33, 34, 33],
            low: [12, 11, 14, 18, 17, 15, 16, 18, 17, 13, 12, 13],
          }}
        />
      </CardContent>
    </Card>
  );
};

export default AvgSessionDurationCard;
