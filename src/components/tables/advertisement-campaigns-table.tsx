"use client";

import React, { useState, useMemo } from "react";

import { AdvertismentCampaignTableProps } from "@/interfaces/table-interfces";

import { AdvertisementCampaignsTableData } from "@/constants/advertisement-management-system-page-components-data";

import {
  flexRender,
  ColumnDef,
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Progress } from "../ui/progress";
import AdvertisementCampaignsTableManageButtons from "../partials/advertisment-management/advertisement-campaigns-table-manage-button";

import { TrendingUp, ArrowUpDown } from "lucide-react";

const AdvertisementCampaignsTable = ({
  selectedTab,
  filteredInput,
}: AdvertismentCampaignTableProps) => {
  const [data] = useState(AdvertisementCampaignsTableData);

  const filteredData = useMemo(() => {
    let filtered =
      selectedTab === "View All"
        ? data
        : data.filter((row) => row.campaignDisplay === selectedTab);

    if (filteredInput) {
      filtered = filtered.filter((row) =>
        row.campaignId.toString().includes(filteredInput)
      );
    }

    return filtered;
  }, [data, selectedTab, filteredInput]);

  const columns: ColumnDef<(typeof AdvertisementCampaignsTableData)[number]>[] =
    [
      {
        id: "adStatus",
        header: () => (
          <div className="w-full flex items-center gap-2">
            <span className="font-semibold text-[14px]">Ad Status</span>
            <ArrowUpDown size={14} />
          </div>
        ),
        cell: ({ row }) => {
          const status = row.original.adStatus;
          return (
            <div className="w-[60px]">
              {status === "active" ? (
                <Switch checked />
              ) : status === "pause" ? (
                <Switch />
              ) : status === "expired" ? (
                <>
                  <h1 className="text-[14px] text-[#E14949] font-semibold">
                    Expired
                  </h1>
                </>
              ) : status === "queued" ? (
                <h1 className="text-[14px] text-[#FBBF24] font-semibold">
                  Queued
                </h1>
              ) : (
                <></>
              )}
            </div>
          );
        },
      },

      {
        accessorKey: "campaignId",
        header: () => (
          <div className="w-full flex items-center gap-2">
            <span className="font-semibold text-[14px]">Campaign ID</span>
            <ArrowUpDown size={14} />
          </div>
        ),
        cell: ({ row }) => {
          return <div className="w-[120px]">{row.original.campaignId}</div>;
        },
      },

      {
        accessorKey: "timestamp",
        header: () => (
          <div className="w-full flex items-center gap-2">
            <span className="font-semibold text-[14px]">Date</span>
            <ArrowUpDown size={14} />
          </div>
        ),
        cell: ({ row }) => {
          return <div className="w-[140px]">{row.original.timestamp}</div>;
        },
      },

      {
        accessorKey: "campaignType",
        header: () => (
          <div className="w-full flex items-center gap-2">
            <span className="font-semibold text-[14px]">Type</span>
            <ArrowUpDown size={14} />
          </div>
        ),
        cell: ({ row }) => {
          return <div className="w-[40px]">{row.original.campaignType}</div>;
        },
      },

      {
        accessorKey: "campaignDisplay",
        header: () => (
          <div className="w-full flex items-center gap-2">
            <span className="font-semibold text-[14px] ">Display</span>
            <ArrowUpDown size={14} />
          </div>
        ),
        cell: ({ row }) => {
          return <div className="w-[40px]">{row.original.campaignDisplay}</div>;
        },
      },

      {
        accessorKey: "projectMode",
        header: () => (
          <div className="w-full flex items-center gap-1">
            <span className="font-semibold text-[14px]">Project Mode</span>
            <ArrowUpDown size={14} />
          </div>
        ),
        cell: ({ row }) => {
          const projectMode = row.getValue("projectMode") as boolean;
          return <div className="w-[40px]">{projectMode ? "ON" : "OFF"}</div>;
        },
      },

      {
        accessorKey: "client",
        header: () => (
          <div className="w-full flex items-center gap-2">
            <span className="font-semibold text-[14px] ">Client</span>
            <ArrowUpDown size={14} />
          </div>
        ),
        cell: ({ row }) => {
          return <div className="w-[80px]">{row.original.client}</div>;
        },
      },

      {
        accessorKey: "zone",
        header: () => (
          <div className="w-full flex items-center gap-2">
            <span className="font-semibold text-[14px] ">Region/Country</span>
            <ArrowUpDown size={14} />
          </div>
        ),
      },

      {
        accessorKey: "impressions",
        header: () => (
          <div className="w-full flex items-center gap-2">
            <span className="font-semibold text-[14px]">Impressions</span>
            <ArrowUpDown size={14} />
          </div>
        ),
        cell: ({ row }) => {
          const impressions = row.original.impressions;
          return (
            <span className="text-sm font-medium">
              {new Intl.NumberFormat().format(impressions)}
            </span>
          );
        },
      },

      {
        accessorKey: "conversions",
        header: () => (
          <div className="w-full flex items-center gap-2">
            <span className="font-semibold text-[14px]">Conversions</span>
            <TrendingUp size={16} />
          </div>
        ),
        cell: ({ row }) => {
          const totalImpressions = row.original.impressions;
          const totalConversions = row.original.conversions;

          const percentage =
            totalImpressions > 0
              ? ((totalConversions / totalImpressions) * 100).toFixed(0)
              : 0;

          return (
            <div className="w-[200px] flex items-center lg:gap-8 gap-4">
              <span className="md:text-[14px] text-[12px]">
                {new Intl.NumberFormat().format(totalConversions)}
              </span>
              <Progress
                value={parseFloat(percentage.toString())}
                className="h-[7px] max-lg:w-[200px] bg-[#e9ecef]"
                indicatorClassName="bg-[#FFC107] rounded-[50rem]"
              />
              <p className="md:text-[14px] text-[12px]">{percentage}%</p>
            </div>
          );
        },
      },

      {
        id: "actions",
        header: "",
        cell: ({ row }) => {
          const status = row.original.adStatus;
          return (
            <>
              <AdvertisementCampaignsTableManageButtons status={status} />
            </>
          );
        },
      },
    ];

  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: { pagination: { pageSize: 10 } },
  });

  return (
    <div className="h-[860px] flex flex-col justify-between">
      <div className="max-w-full">
        <Table>
          <TableHeader className="font-inter tracking-wide text-heading-color font-semibold !text-[12px]">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="border-border">
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className="!text-[12px]">
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} className="border-border">
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No session ID found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* TABLE PAGINATION */}
      <div className="flex items-center justify-between py-4">
        <span className="font-semibold font-jetbrains_mono">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </span>

        <div className="flex items-center gap-4">
          <Button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="font-inter text-heading-color border hover:bg-general-hover text-[14px] tracking-wider !shadow-button-shadow border-border"
          >
            Previous
          </Button>
          <Button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="font-inter bg-secondary-theme text-theme-heading-color hover:bg-secondary-theme-hover text-[14px] tracking-wider !shadow-button-shadow"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdvertisementCampaignsTable;
