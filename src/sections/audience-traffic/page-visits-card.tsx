"use client";

import React, { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DatePicker from "@/components/common/date-picker";
import { ChartJsBarChart04 } from "@/components/charts/chartjs-bar-charts";

const PageVisitsCard = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );

  return (
    <Card className="!standard-card-styling col-span-1">
      <CardHeader className="md:py-4 py-6 border-b border-border flex md:flex-row flex-col max-md:gap-8 items-center md:justify-between">
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px] max-md:order-2">
          Page Visits
        </CardTitle>

        <DatePicker date={selectedDate} setDate={setSelectedDate} />
      </CardHeader>

      {/* PAGE VISITS BAR CHART */}
      <CardContent className="py-4 h-[500px] max-md:px-2">
        <ChartJsBarChart04
          data={{
            labels: [
              "Homepage",
              "Chat Session",
              "FAQS",
              "Privacy",
              "Terms of Use",
              "Contact Page",
            ],
            values: [58, 55, 27, 26, 24, 17],
          }}
        />
      </CardContent>
    </Card>
  );
};

export default PageVisitsCard;
