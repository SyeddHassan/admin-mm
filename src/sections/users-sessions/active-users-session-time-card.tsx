"use client";

import React, { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartJsBarChart02 } from "@/components/charts/chartjs-bar-charts";
import DatePicker from "@/components/common/date-picker";

const ActiveUsersSessionTimeCard = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );

  return (
    <Card className="!standard-card-styling lg:col-span-2 col-span-1">
      <CardHeader className="md:py-4 py-6 border-b border-border flex md:flex-row flex-col max-md:gap-8 items-center md:justify-between">
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px] max-md:order-2">
          Session Time by Active Users
        </CardTitle>

        <DatePicker date={selectedDate} setDate={setSelectedDate} />
      </CardHeader>

      {/* ACTIVE USERS AND SESSIONS BAR CHART */}
      <CardContent className="py-12">
        <ChartJsBarChart02
          data={{
            labels: [
              "1m 0s - 6m 0s",
              "6m 0s - 11m 0s",
              "11m 0s - 16m 0s",
              "16m 0s - 21m 0s",
              "21m 0s - 26m 0s",
              "26m 0s - 30m 0s",
            ],
            values: [931, 383, 258, 214, 159, 0],
          }}
        />
      </CardContent>
    </Card>
  );
};

export default ActiveUsersSessionTimeCard;
