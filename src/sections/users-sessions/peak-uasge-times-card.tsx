"use client";

import React from "react";
import { DateRange } from "react-day-picker";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DateRangePicker } from "@/components/common/date-range-picker";
import { ChartJsAreaChart01 } from "@/components/charts/chartjs-area-charts";

const PeakUsageTimesCard = () => {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(),
  });

  return (
    <Card className="!standard-card-styling xl:col-span-2">
      <CardHeader className="md:py-4 py-6 border-b border-border flex md:flex-row flex-col max-md:gap-8 items-center md:justify-between">
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px] max-md:order-2">
          Peak Usage Times
        </CardTitle>

        <DateRangePicker date={date} setDate={setDate} />
      </CardHeader>

      {/* PEAK USAGE TIMES AREA CHART */}
      <CardContent className="h-[550px] w-full flex-center mx-auto max-xl:py-8">
        <ChartJsAreaChart01
          data={{
            labels: [
              "01 Jan 2014",
              "03 Jan 2014",
              "05 Jan 2014",
              "08 Jan 2014",
              "10 Jan 2014",
              "12 Jan 2014",
              "15 Jan 2014",
              "17 Jan 2014",
              "20 Jan 2014",
            ],
            standard: [8, 10, 12, 14, 16, 12, 18, 20, 22],
            secure: [10, 12, 14, 16, 18, 16, 20, 22, 25],
          }}
        />
      </CardContent>
    </Card>
  );
};

export default PeakUsageTimesCard;
