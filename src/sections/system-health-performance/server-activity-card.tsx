"use client";

import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartJsLineChart09 } from "@/components/charts/chartjs-line-charts";

const ServerActivityCard = () => {
  return (
    <Card className="!standard-card-styling">
      <CardHeader className="py-6 border-b border-border">
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Server Activity
        </CardTitle>
      </CardHeader>

      {/* SERVER ACTIVITY LINE CHART */}
      <CardContent className="h-[700px] py-8 pb-12">
        <ChartJsLineChart09 data={[
  { timestamp: "Nov 29 11:15 AM", responseTime: 1100, contentLength: 50 },
  { timestamp: "Nov 29 12:04 PM", responseTime: 1300, contentLength: 48 },
  { timestamp: "Nov 29 12:30 PM", responseTime: 2100, contentLength: 52 },
  { timestamp: "Nov 29 12:53 PM", responseTime: 2300, contentLength: 49 },
  { timestamp: "Nov 29 01:14 PM", responseTime: 800, contentLength: 51 },
  { timestamp: "Nov 29 01:35 PM", responseTime: 1200, contentLength: 50 },
  { timestamp: "Nov 29 01:55 PM", responseTime: 700, contentLength: 48 },
  { timestamp: "Nov 29 02:17 PM", responseTime: 1100, contentLength: 53 },
  { timestamp: "Nov 29 02:38 PM", responseTime: 900, contentLength: 47 },
  { timestamp: "Nov 29 02:59 PM", responseTime: 1300, contentLength: 50 },
  { timestamp: "Nov 29 02:21 PM", responseTime: 1100, contentLength: 49 },
]}/>
      </CardContent>
    </Card>
  );
};

export default ServerActivityCard;
