"use client";

import React from "react";
import { DateRange } from "react-day-picker";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartJsAreaChart02 } from "@/components/charts/chartjs-area-charts";
import { DateRangePicker } from "@/components/common/date-range-picker";

const TrafficOverTimeCard = () => {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(),
  });

  return (
    <Card className="!standard-card-styling xl:col-span-2 col-span-1">
      <CardHeader className="xl:py-4 py-6 border-b border-border flex xl:flex-row flex-col max-xl:gap-8 items-center xl:justify-between">
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px] max-xl:order-2">
          Traffic Over Time
        </CardTitle>

        <DateRangePicker date={date} setDate={setDate} />
      </CardHeader>

      {/* TRAFFIC OVERTIME AREA CHART */}
      <CardContent className="h-[600px] flex-center max-md:px-2">
        <ChartJsAreaChart02
          data={{
            labels: [
              "Feb 16",
              "Feb 18",
              "Feb 20",
              "Feb 22",
              "Feb 24",
              "Feb 26",
              "Feb 28",
              "Mar 1",
              "Mar 3",
              "Mar 5",
              "Mar 7",
              "Mar 9",
              "Mar 11",
              "Mar 13",
              "Mar 15",
            ],
            values: [0, 2, 4, 0, 3, 8, 6, 10, 4, 2, 12, 6, 18, 22, 28],
          }}
        />
      </CardContent>
    </Card>
  );
};

export default TrafficOverTimeCard;
