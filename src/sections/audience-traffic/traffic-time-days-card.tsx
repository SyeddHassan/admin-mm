"use client";

import React, { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HeatMap } from "@/components/maps/heat-map";
import DatePicker from "@/components/common/date-picker";
import { FilterButtons04 } from "@/components/common/filter-buttons";
import { ChartJsBarChart03 } from "@/components/charts/chartjs-bar-charts";

const generateTrafficData = () => {
  const seed = 123;
  const pseudoRandom = (value: number) => (value * 9301 + 49297) % 233280;

  return Array.from({ length: 24 }, (_, i) =>
    Array.from({ length: 7 }, (_, j) => pseudoRandom(seed + i + j) % 5)
  );
};

const TrafficTimeDaysCard = () => {
  const [selectedTab, setSelectedTab] = useState("heatmap");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );

  return (
    <Card className="!standard-card-styling">
      <CardHeader className="md:py-4 py-6 border-b border-border flex md:flex-row flex-col max-md:gap-8 items-center md:justify-between">
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px] max-md:order-2">
          Traffic by Time of Day
        </CardTitle>

        <DatePicker date={selectedDate} setDate={setSelectedDate} />
      </CardHeader>

      {/* TRAFFIC BY TIME OF DAYS HEATMAP & BAR CHART */}
      <CardContent className="py-5 h-[700px] flex gap-4 flex-col">
        <FilterButtons04
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />

        {selectedTab === "heatmap" ? (
          <HeatMap
            data={{
              hours: [
                "12:00 AM",
                "1:00 AM",
                "2:00 AM",
                "3:00 AM",
                "4:00 AM",
                "5:00 AM",
                "6:00 AM",
                "7:00 AM",
                "8:00 AM",
                "9:00 AM",
                "10:00 AM",
                "11:00 AM",
                "12:00 PM",
                "1:00 PM",
                "2:00 PM",
                "3:00 PM",
                "4:00 PM",
                "5:00 PM",
                "6:00 PM",
                "7:00 PM",
                "8:00 PM",
                "9:00 PM",
                "10:00 PM",
                "11:00 PM",
              ],
              days: [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ],
              trafficData: generateTrafficData(),
            }}
          />
        ) : (
          <ChartJsBarChart03
            labels={[
              "00 am",
              "01 am",
              "02 am",
              "03 am",
              "04 am",
              "05 am",
              "06 am",
              "07 am",
              "08 am",
              "09 am",
              "10 am",
              "11 am",
              "12 pm",
              "01 pm",
              "02 pm",
              "03 pm",
              "04 pm",
              "05 pm",
              "06 pm",
              "07 pm",
              "08 pm",
              "09 pm",
              "10 pm",
              "11 pm",
            ]}
            values={[
              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1,
              1, 1,
            ]}
          />
        )}
      </CardContent>
    </Card>
  );
};

export default TrafficTimeDaysCard;
