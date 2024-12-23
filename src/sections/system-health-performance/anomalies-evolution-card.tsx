"use client";

import React from "react";
import { DateRange } from "react-day-picker";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartJsLineChart05 } from "@/components/charts/chartjs-line-charts";
import { DateRangePicker } from "@/components/common/date-range-picker";

const AnomaliesEvolutionCard = () => {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(),
  });

  return (
    <Card className="!standard-card-styling">
      <CardHeader className="md:py-4 py-6 border-b border-border flex md:flex-row flex-col max-md:gap-8 items-center md:justify-between">
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px] max-md:order-2">
          Anomalies Evolution
        </CardTitle>

        <DateRangePicker date={date} setDate={setDate} />
      </CardHeader>

      {/* ANNOMALIES EVOLUTION LINE CHART */}
      <CardContent className="h-[500px] flex-center max-md:px-2">
        <ChartJsLineChart05
          data={{
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
            values: [150, 60, 40, 25, 30, 20, 18],
          }}
        />
      </CardContent>
    </Card>
  );
};

export default AnomaliesEvolutionCard;
