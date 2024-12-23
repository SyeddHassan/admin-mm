"use client";

import React from "react";
import { DateRange } from "react-day-picker";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DateRangePicker } from "@/components/common/date-range-picker";
import { ChartJsFrequencyChart01 } from "@/components/charts/chartjs-frequency-charts";

const UsageFrequencyCard = () => {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(),
  });

  return (
    <Card className="!standard-card-styling xl:col-span-2 col-span-1">
      <CardHeader className="md:py-4 py-6 border-b border-border flex md:flex-row flex-col max-md:gap-8 items-center md:justify-between">
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px] max-md:order-2">
          Usage Frequency
        </CardTitle>

        <DateRangePicker date={date} setDate={setDate} />
      </CardHeader>

      {/* USAGE FREQUENCY LINE CHART */}
      <CardContent className="py-12 xl:h-[650px] max-md:px-2">
        <ChartJsFrequencyChart01
          labels={[
            "Feb '17",
            "5 Feb",
            "10 Feb",
            "15 Feb",
            "20 Feb",
            "25 Feb",
            "Mar '17",
            "5 Mar",
            "10 Mar",
            "15 Mar",
            "20 Mar",
            "25 Mar",
            "Apr '17",
            "5 Apr",
            "10 Apr",
            "15 Apr",
          ]}
          values={[
            160, 170, 190, 200, 220, 180, 150, 120, 130, 140, 110, 90, 100, 120,
            130, 140,
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default UsageFrequencyCard;
