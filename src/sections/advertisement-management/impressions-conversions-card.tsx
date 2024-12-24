"use client";

import React from "react";
import { DateRange } from "react-day-picker";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DateRangePicker } from "@/components/common/date-range-picker";
import { ChartJsBarChart06 } from "@/components/charts/chartjs-bar-charts";

const ImpressionsConversionsCard = () => {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(),
  });

  return (
    <Card className="!standard-card-styling lg:col-span-2 col-span-1">
      <CardHeader className="md:py-4 py-6 border-b border-border flex md:flex-row flex-col max-md:gap-8 items-center md:justify-between">
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px] max-md:order-2">
          Impressions/Conversions
        </CardTitle>

        <DateRangePicker date={date} setDate={setDate} />
      </CardHeader>

      {/* IMPRESSION CONVERSION BAR CHART */}
      <CardContent className="py-8 h-[650px] max-md:px-2">
        <ChartJsBarChart06
          data={{
            labels: [
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
            ],
            sessions: [75, 82, 98, 95, 85, 105, 90, 112, 92],
            activations: [35, 38, 35, 28, 45, 48, 50, 52, 38],
          }}
          legends={["Impressions", "Conversions"]}
          colors={["#0C62EC", "#AB40E8"]}
        />
      </CardContent>
    </Card>
  );
};

export default ImpressionsConversionsCard;
