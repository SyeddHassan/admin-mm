"use client";

import React from "react";
import { DateRange } from "react-day-picker";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DateRangePicker } from "@/components/common/date-range-picker";
import { ChartJsLineChart03 } from "@/components/charts/chartjs-line-charts";

import { Eye } from "lucide-react";

const ImpressionsCard = () => {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(),
  });

  return (
    <Card className="!standard-card-styling col-span-1">
      <CardHeader className="md:py-4 py-6 border-b border-border flex md:flex-row flex-col max-md:gap-8 items-center md:justify-between">
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px] max-md:order-2">
          Impressions
        </CardTitle>

        <DateRangePicker date={date} setDate={setDate} />
      </CardHeader>

      {/* IMPRESSIONS LINE CHART */}
      <CardContent className="py-6 h-[500px]">
        <ChartJsLineChart03
          data={{
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
            values: [150, 60, 40, 25, 30, 20, 18],
          }}
          averageLabel={{
            text: "Avg./Day",
            value: 198,
            icon: <Eye />,
          }}
          leftText="Impressions"
          bottomText="Time Period"
        />
      </CardContent>
    </Card>
  );
};

export default ImpressionsCard;