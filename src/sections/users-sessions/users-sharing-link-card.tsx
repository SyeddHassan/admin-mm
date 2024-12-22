"use client";

import React, { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartJsPieChart01 } from "@/components/charts/chartjs-pie-charts";
import DatePicker from "@/components/common/date-picker";

const UsersSharingLinkCard = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date()); 

  return (
    <Card className="!standard-card-styling col-span-1">
      <CardHeader className="md:py-4 py-6 border-b border-border flex md:flex-row flex-col max-md:gap-8 items-center md:justify-between">
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px] max-md:order-2">
          Users Sharing Link
        </CardTitle>

        <DatePicker date={selectedDate} setDate={setSelectedDate} />
      </CardHeader>

      {/* USERS SHARING LINK PIE CHART */}
      <CardContent className="py-4 mx-auto h-[500px] flex-center px-0">
        <ChartJsPieChart01
          chartData={[
            { label: "Message", percentage: 20, color: "#2285f2" },
            { label: "Mail", percentage: 25, color: "#d83b82" },
            { label: "Whatsapp", percentage: 15, color: "#ab40e8" },
            { label: "Telegram", percentage: 15, color: "#5e37ed" },
            { label: "Instagram", percentage: 15, color: "#4dd992" },
            { label: "Other", percentage: 20, color: "#f02f1d" },
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default UsersSharingLinkCard;
