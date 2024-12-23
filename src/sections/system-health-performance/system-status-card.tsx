import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TimelineChart from "@/components/charts/timeline-chart";

const SystemStatusCard = () => {
  return (
    <Card className="!standard-card-styling lg:col-span-2 col-span-1">
      <CardHeader className="lg:py-8 py-6 border-b border-border">
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          System Status
        </CardTitle>
      </CardHeader>

      {/* SYSTEM STATUS CHART */}
      <CardContent className="p-8 py-10">
        <TimelineChart
          data={[
            { name: "Server Status", status: "operational" },
            { name: "File Uploading", status: "major" },
            { name: "ChatGPT Integration", status: "partial" },
            { name: "Chat Function", status: "operational" },
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default SystemStatusCard;
