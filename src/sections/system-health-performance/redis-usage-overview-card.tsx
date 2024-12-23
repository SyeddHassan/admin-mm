import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartJsLineChart07 } from "@/components/charts/chartjs-line-charts";

const RedisUsageOverviewCard = () => {
  return (
    <Card className="!standard-card-styling col-span-1">
      <CardHeader className="py-6 border-b border-border">
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Redis Usage Overview
        </CardTitle>
      </CardHeader>

      {/* REDIS USAGE OVERVIEW FREQUENCY CHART */}
      <CardContent className="h-[550px]">
        <ChartJsLineChart07
          data={{
            labels: ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00"],
            datasets: [
              {
                label: "Memory Usage",
                data: [256, 312, 428, 489, 385, 290],
              },
            ],
          }}
        />
      </CardContent>
    </Card>
  );
};

export default RedisUsageOverviewCard;
