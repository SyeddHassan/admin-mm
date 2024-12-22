"use client";

import React, { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartJsDoughnutChart02 } from "@/components/charts/chartjs-doughnut-charts";
import DatePicker from "@/components/common/date-picker";

const SessionTypeCard = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  return (
    <Card className="!standard-card-styling col-span-1">
      <CardHeader className="md:py-4 py-6 border-b border-border flex md:flex-row flex-col max-md:gap-8 items-center md:justify-between">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px] max-md:order-2">
          Session Type
        </CardTitle>

        {/* DATE PICKER */}
        <DatePicker date={selectedDate} setDate={setSelectedDate} />
      </CardHeader>

      {/* SESSION TYPE DOUGHNUT CHART */}
      <CardContent className="xl:h-full h-[500px] w-full flex-center mx-auto">
        <ChartJsDoughnutChart02
          chartData={[
            { label: "Standard", percentage: 30, color: "#5ebce1" },
            { label: "Secure", percentage: 20, color: "#3a56af" },
            { label: "Wallet", percentage: 70, color: "#ab40e8" },
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default SessionTypeCard;
