"use client";

import React, { useState } from "react";
import { DateRange } from "react-day-picker";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FilterButtons03 } from "@/components/common/filter-buttons";
import { ChartJsBarChart01 } from "@/components/charts/chartjs-bar-charts";

import { ArrowDown, ArrowUp } from "lucide-react";
import { DateRangePicker } from "@/components/common/date-range-picker";

const ActiveUsersSessionsCard = () => {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(),
  });
  const [selectedTab, setSelectedTab] = useState("View All");

  return (
    <Card className="!standard-card-styling xl:col-span-2 col-span-1">
      <CardHeader className="md:py-4 py-6 border-b border-border flex md:flex-row flex-col max-md:gap-8 items-center md:justify-between">
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px] max-md:order-2">
          Active Users and Sessions
        </CardTitle>

        <DateRangePicker date={date} setDate={setDate} />
      </CardHeader>

      {/* ACTIVE USERS AND SESSIONS BAR CHART */}
      <CardContent className="py-5 flex gap-12 flex-col">
        <FilterButtons03
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />

        <ChartJsBarChart01
          data={{
            date: [
              "02 Jan",
              "03 Jan",
              "04 Jan",
              "05 Jan",
              "06 Jan",
              "07 Jan",
              "08 Jan",
              "09 Jan",
              "10 Jan",
              "11 Jan",
              "12 Jan",
              "13 Jan",
            ],
            users: [40, 60, 50, 80, 20, 40, 50, 60, 50, 70, 80, 30],
            sessions: [10, 20, 15, 30, 5, 10, 15, 25, 20, 30, 35, 10],
            projectModeOn: [5, 10, 5, 15, 2, 5, 8, 10, 7, 12, 15, 4],
          }}
        />
      </CardContent>

      <CardFooter className="md:py-6 py-12 border-t border-border grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 xl:gap-4 gap-8">
        <div className="flex flex-col xl:gap-2 gap-4 max-xl:items-center">
          <h1 className="text-[16px] leading-[16px] font-semibold font-inter tracking-wider">
            Users
          </h1>
          <div className="flex items-end gap-2">
            <p className="text-[26px] leading-[26px] font-bold text-heading-color">
              8.8K
            </p>
            <Badge className="bg-green-100 text-green-600 font-bold gap-1 max-md:text-[10px]">
              <ArrowUp size={10} />
              7.6%
            </Badge>
          </div>
        </div>

        <div className="flex flex-col xl:gap-2 gap-4 max-xl:items-center">
          <h1 className="text-[16px] leading-[16px] font-semibold font-inter tracking-wider">
            Session
          </h1>
          <div className="flex items-end gap-2">
            <p className="text-[26px] leading-[26px] font-bold text-heading-color">
              18.2K
            </p>
            <Badge className="bg-green-100 text-green-600 font-bold gap-1 max-md:text-[10px]">
              <ArrowUp size={10} />
              7.6%
            </Badge>
          </div>
        </div>

        <div className="flex flex-col xl:gap-2 gap-4 max-xl:items-center">
          <h1 className="text-[16px] leading-[16px] font-semibold font-inter tracking-wider">
            Bounce Rate
          </h1>
          <div className="flex items-end gap-2">
            <p className="text-[26px] leading-[26px] font-bold text-heading-color">
              46.7%
            </p>
            <Badge className="bg-red-100 text-red-600 font-bold gap-1 max-md:text-[10px]">
              <ArrowDown size={10} />
              7.6%
            </Badge>
          </div>
        </div>

        <div className="flex flex-col xl:gap-2 gap-4 max-xl:items-center">
          <h1 className="text-[16px] leading-[16px] font-semibold font-inter tracking-wider">
            Session Duration
          </h1>
          <div className="flex items-end gap-2">
            <p className="text-[26px] leading-[26px] font-bold text-heading-color">
              9m 24s
            </p>
            <Badge className="bg-green-100 text-green-600 font-bold gap-1 max-md:text-[10px]">
              <ArrowUp size={10} />
              7.6%
            </Badge>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ActiveUsersSessionsCard;
