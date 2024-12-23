"use client";

import React from "react";
import { DateRange } from "react-day-picker";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartJsLineChart03 } from "@/components/charts/chartjs-line-charts";
import { DateRangePicker } from "@/components/common/date-range-picker";

import { BiSolidMessageSquareDetail } from "react-icons/bi";


const UsersAvgMessagesCard = () => {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(),
  });

  return (
    <Card className="!standard-card-styling col-span-1">
      <CardHeader className="xl:py-4 py-6 border-b border-border flex xl:flex-row flex-col max-xl:gap-8 items-center lg:justify-between">
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px] max-md:order-2">
          Avg. Messages by User
        </CardTitle>

        <DateRangePicker date={date} setDate={setDate} />
      </CardHeader>

      <CardContent className="py-6 relative h-[500px] max-md:px-2">
        <ChartJsLineChart03
          data={{
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
            values: [150, 60, 40, 25, 30, 20, 18],
          }}
          averageLabel={{
            text: "Avg. Messages by User",
            value: 8,
            icon: <BiSolidMessageSquareDetail />,
          }}
          leftText="Message"
          bottomText="Time period"
        />
      </CardContent>
    </Card>
  );
};

export default UsersAvgMessagesCard;
