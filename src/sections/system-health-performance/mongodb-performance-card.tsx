import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartJsLineChart06 } from "@/components/charts/chartjs-line-charts";

const MongodbPerformanceCard = () => {
  return (
    <Card className="!standard-card-styling">
      <CardHeader className="py-6 border-b border-border">
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          MongoDB Performance
        </CardTitle>
      </CardHeader>

      {/* MONGO DB PERFORMANCE FREQUENCY CHART */}
      <CardContent className="h-[550px]">
        <ChartJsLineChart06
          data={{
            labels: ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00"],
            datasets: [
              {
                label: "MongoDB Response Time",
                data: [50, 45, 60, 70, 55, 40],
                borderColor: "rgba(75, 192, 192, 1)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
              },
            ],
          }}
        />
      </CardContent>
    </Card>
  );
};

export default MongodbPerformanceCard;
