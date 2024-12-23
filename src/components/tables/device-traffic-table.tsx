"use client";

import React from "react";

import { DeviceTrafficTableProps } from "@/interfaces/table-interfces";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ArrowUpIcon, InfoIcon } from "lucide-react";

export const DeviceTrafficTable = ({ data }: DeviceTrafficTableProps) => {
  return (
    <div className="w-full overflow-auto font-inter">
      <Table className="w-full rounded-lg overflow-hidden shadow">
        <TableHeader className="bg-white dark:bg-black">
          <TableRow className="text-heading-color">
            <TableHead className="w-[200px]">Device Type</TableHead>
            <TableHead className="w-[150px]">
              Page Views{" "}
              <ArrowUpIcon className="inline-block w-4 h-4 ml-1 -translate-y-[1px] text-blue-500" />
            </TableHead>

            <TableHead className="w-[150px]">
              Site Sessions{" "}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <InfoIcon className="inline-block w-4 h-4 ml-1 -translate-y-[1px] text-blue-500 cursor-pointer" />
                  </TooltipTrigger>
                  <TooltipContent className="bg-white dark:bg-background-color border-border text-heading-color">
                    <p>Number of unique sessions per device type</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </TableHead>

            <TableHead className="w-[150px]">Unique Visitors</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((row, index) => (
            <TableRow
              key={index}
              className={`transition duration-200 border-b border-border ${
                row.isTotal
                  ? "bg-blue-100 font-bold text-blue-800"
                  : "hover:bg-general-hover"
              }`}
            >
              <TableCell className="flex items-center space-x-2">
                {row.isTotal && (
                  <span className="px-2 py-1 text-xs font-medium text-white bg-blue-500 rounded-full">
                    Total
                  </span>
                )}
                <span>{row.deviceType}</span>
              </TableCell>
              <TableCell className="text-sm font-medium">
                {row.pageViews.toLocaleString()}
              </TableCell>
              <TableCell className="flex items-center text-sm font-medium">
                {row.siteSessions.toLocaleString()}
                {row.siteSessions > 100 ? (
                  <ArrowUpIcon className="ml-2 w-4 h-4 text-green-500" />
                ) : (
                  <ArrowUpIcon className="ml-2 w-4 h-4 text-gray-400 rotate-180" />
                )}
              </TableCell>
              <TableCell className="text-sm font-medium">
                {row.uniqueVisitors.toLocaleString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
