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
      <CardHeader className="md:py-4 py-6 border-b border-border flex md:flex-row flex-col max-md:gap-8 items-center md:justify-between">
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px] max-md:order-2">
          New vs Returning Visitors
        </CardTitle>

        <DatePicker date={selectedDate} setDate={setSelectedDate} />
      </CardHeader>

      {/* NEW VS RETURNING VISITORS DOUGHNUT CHART */}
      <CardContent className="py-4 mx-auto xl:h-[600px] xl:flex-center max-xl:py-12">
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
