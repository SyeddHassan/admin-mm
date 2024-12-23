import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MongodbPerformanceCard = () => {
  return (
    <Card className="!standard-card-styling">
      <CardHeader className="py-6 border-b border-border">
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          MongoDB Performance
        </CardTitle>
      </CardHeader>

      {/* MONGO DB PERFORMANCE FREQUENCY CHART */}
      <CardContent className="h-[550px]"></CardContent>
    </Card>
  );
};

export default MongodbPerformanceCard;
