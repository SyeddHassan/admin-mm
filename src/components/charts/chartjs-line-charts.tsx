"use client";

import React from "react";

import {
  ChartJsLineChart01Props,
  ChartJsLineChart02Props,
} from "@/interfaces/analytics/chartjs-line-charts-interfaces";

import { ChartJsLineChart01Cofigurations, ChartJsLineChart02Cofigurations } from "@/configurations/chartjs-line-charts-configurations";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend
);

export const ChartJsLineChart01 = ({ chartData }: ChartJsLineChart01Props) => {
  const createChartData = (data: number[], color: string) => ({
    labels: new Array(data.length).fill(""),
    datasets: [
      {
        data,
        fill: true,
        borderColor: color,
        backgroundColor: `${color}15`,
        borderWidth: 2,
      },
    ],
  });

  const options = ChartJsLineChart01Cofigurations();

  return (
    <div className="h-full w-full  flex justify-center flex-col gap-8">
      {chartData.map((data, index) => (
        <div key={index} className="w-full flex flex-col gap-6">
          <div className="w-full h-full flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: data.color }}
              />
              <h1 className="font-inter text-heading-color text-[14px]">
                {data.name}
              </h1>
            </div>

            <p className="font-bold text-[14px]">{data.value}</p>
          </div>

          <div className="relative h-12 w-full pt-1">
            <Line
              data={createChartData(data.data, data.color)}
              options={options}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export const ChartJsLineChart02 = ({ data }: ChartJsLineChart02Props) => {
  const chartData = {
    labels: data.date,
    datasets: [
      {
        label: "High",
        data: data.high,
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 5,
        pointBackgroundColor: "rgba(54, 162, 235, 1)",
      },
      {
        label: "Low",
        data: data.low,
        borderColor: "rgba(75, 75, 75, 1)",
        backgroundColor: "rgba(75, 75, 75, 0.5)",
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 5,
        pointBackgroundColor: "rgba(75, 75, 75, 1)",
      },
    ],
  };

  const options = ChartJsLineChart02Cofigurations();

  return (
    <div className="relative w-full h-[450px]">
      <Line data={chartData} options={options} />
    </div>
  );
};