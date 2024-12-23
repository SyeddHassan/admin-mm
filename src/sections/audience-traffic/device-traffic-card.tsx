"use client";

import React, { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DeviceTrafficTable } from "@/components/tables/device-traffic-table";
import DatePicker from "@/components/common/date-picker";
import { ChartJsBarChart04 } from "@/components/charts/chartjs-bar-charts";

const DeviceTrafficCard = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );

  return (
    <Card className="!standard-card-styling lg:col-span-2 col-span-1">
      <CardHeader className="md:py-4 py-6 border-b border-border flex md:flex-row flex-col max-md:gap-8 items-center md:justify-between">
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px] max-md:order-2">
          Traffic by Device
        </CardTitle>

        <DatePicker date={selectedDate} setDate={setSelectedDate} />
      </CardHeader>

      {/* TRAFFIC BY DEVICE BAR CHART */}
      <CardContent className="h-[700px] flex flex-col gap-4">
        <div className="h-[400px]">
          <ChartJsBarChart04
            data={{
              labels: ["Mobile", "Desktop", "Other"],
              values: [27, 11, 4],
            }}
          />
        </div>

        <div className="h-[300px]">
          <DeviceTrafficTable
            data={[
              {
                deviceType: "Summary",
                pageViews: 573,
                siteSessions: 129,
                uniqueVisitors: 38,
                isTotal: true,
              },
              {
                deviceType: "Desktop",
                pageViews: 334,
                siteSessions: 66,
                uniqueVisitors: 11,
              },
              {
                deviceType: "Mobile",
                pageViews: 239,
                siteSessions: 63,
                uniqueVisitors: 27,
              },
              {
                deviceType: "Other",
                pageViews: 12,
                siteSessions: 4,
                uniqueVisitors: 2,
              },
            ]}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default DeviceTrafficCard;
