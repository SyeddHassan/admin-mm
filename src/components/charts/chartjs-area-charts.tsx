"use client";

import React from "react";

import { ChartJsAreaChart01Props } from "@/interfaces/analytics/chartjs-area-charts-interfaces";

import { ChartJsAreaChart01Cofigurations } from "@/configurations/chartjs-area-charts-configurations";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler
);

const ResponsiveAreaChart = ({ data }: ChartJsAreaChart01Props) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: "Standard",
        data: data.standard,
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        tension: 0.4,
        borderWidth: 2,
        fill: true,
        pointRadius: 0,
      },
      {
        label: "Secure",
        data: data.secure,
        borderColor: "rgba(75, 192, 75, 1)",
        backgroundColor: "rgba(75, 192, 75, 0.2)",
        tension: 0.4,
        borderWidth: 2,
        fill: true,
        pointRadius: 0,
      },
    ],
  };

  const options = ChartJsAreaChart01Cofigurations();

  return (
    <div className="relative w-full h-[450px]">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default ResponsiveAreaChart;
