"use client";

import React, { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DatePicker from "@/components/common/date-picker";
import { ChartJsDoughnutChart04 } from "@/components/charts/chartjs-doughnut-charts";

const UsersSharingLinkCard = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );

  return (
    <Card className="!standard-card-styling col-span-1">
      <CardHeader className="md:py-4 py-6 border-b border-border flex md:flex-row flex-col max-md:gap-8 items-center md:justify-between">
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px] max-md:order-2">
          Users Sharing Link
        </CardTitle>

        <DatePicker date={selectedDate} setDate={setSelectedDate} />
      </CardHeader>

      {/* USERS SHARING LINK PIE CHART */}
      <CardContent className="h-[600px] py-0 flex-center px-0">
       <div className="w-full h-full lg:max-w-[400px] max-w-[300px] flex-center">
       <ChartJsDoughnutChart04
          chartData={[
            { label: "Message", percentage: 20, color: "#5ebce1" },
            { label: "Mail", percentage: 25, color: "#3a56af" },
            { label: "Whatsapp", percentage: 15, color: "#ab40e8" },
            { label: "Telegram", percentage: 15, color: "#e1d75e" },
            { label: "Instagram", percentage: 15, color: "#e8a7b4" },
            { label: "Other", percentage: 20, color: "#40e8a5" },
          ]}
        />
       </div>
      </CardContent>
    </Card>
  );
};

export default UsersSharingLinkCard;
