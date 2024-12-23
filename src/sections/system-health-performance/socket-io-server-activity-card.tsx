import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartJsLineChart08 } from "@/components/charts/chartjs-line-charts";

const SocketIOServerActivityCard = () => {
  return (
    <Card className="!standard-card-styling col-span-1">
      <CardHeader className="py-6 border-b border-border">
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Socket IO Server Activity
        </CardTitle>
      </CardHeader>

      {/* SOCKET IO SERVER ACTIVITY FREQUENCY CHART */}
      <CardContent className="h-[550px]">
        <ChartJsLineChart08
          data={{
            labels: [
              "00:00",
              "00:10",
              "00:20",
              "00:30",
              "00:40",
              "00:50",
              "01:00",
            ],
            datasets: [
              {
                label: "Active Connections",
                data: [150, 165, 178, 170, 182, 168, 175],
              },
            ],
          }}
        />
      </CardContent>
    </Card>
  );
};

export default SocketIOServerActivityCard;
