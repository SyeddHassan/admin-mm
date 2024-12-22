"use client";

import React from "react";
import { format } from "date-fns";

import { cn } from "@/lib/utils";

import { DatePickerProps } from "@/interfaces/common-components-interface";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

import { CalendarIcon } from "lucide-react";

const DatePicker = ({ date, setDate }: DatePickerProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "h-[45px] sm:w-[225px] w-full border-border rounded-[6px] border text-heading-color text-[14px] font-medium !shadow-button-shadow font-inter tracking-wider bg-white hover:bg-general-hover dark:bg-background-color dark:hover:bg-primary-theme-hover",
            !date && "text-paragraph-color"
          )}
        >
          {date ? format(date, "PPP") : <span>Select a date</span>}
          <CalendarIcon className="ml-auto h-4 w-4 -translate-y-[1px] opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 bg-white dark:bg-primary-theme border-border" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          disabled={(date) =>
            date > new Date() || date < new Date("1900-01-01")
          }
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;
