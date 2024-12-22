"use client";

import React, { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartJsDoughnutChart02 } from "@/components/charts/chartjs-doughnut-charts";
import DatePicker from "@/components/common/date-picker";

const NewVsReturningVisitorsCard = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );

  return (
    <Card className="!standard-card-styling col-span-1">
      <CardHeader className="xl:py-4 py-6 border-b border-border flex xl:flex-row flex-col max-xl:gap-8 items-center xl:justify-between">
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px] max-xl:order-2">
          New vs Returning Visitors
        </CardTitle>

        <DatePicker date={selectedDate} setDate={setSelectedDate} />
      </CardHeader>

      {/* NEW VS RETURNING VISITORS DOUGHNUT CHART */}
      <CardContent className="mx-auto h-[600px] flex-center max-xl:py-12 px-0">
        <ChartJsDoughnutChart02
          chartData={[
            { label: "New Visitors", percentage: 30, color: "#3a56af" },
            { label: "Returning", percentage: 70, color: "#5ebce1" },
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default NewVsReturningVisitorsCard;
