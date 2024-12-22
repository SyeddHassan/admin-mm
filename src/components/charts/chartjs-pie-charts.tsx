"use client";

import React from "react";

import { ChartJsPieChart01Props } from "@/interfaces/analytics/chartjs-pie-charts-interfaces";

import { ChartJsPieChart01Cofigurations } from "@/configurations/chartjs-pie-charts-configurations";

import { Doughnut } from "react-chartjs-2";
import {
  ArcElement,
  Tooltip,
  Legend,
  DoughnutController,
  Chart as ChartJS,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  DoughnutController,
  ChartDataLabels
);

export const ChartJsPieChart01 = ({ chartData }: ChartJsPieChart01Props) => {
  const data = {
    labels: chartData.map((data) => data.label),
    datasets: [
      {
        data: chartData.map((data) => data.percentage),
        backgroundColor: chartData.map((data) => data.color),
        borderColor: "#fff",
        borderWidth: 3,
      },
    ],
  };

  const options = ChartJsPieChart01Cofigurations();

  return (
    <div className="relative mx-auto aspect-square lg:w-[400px] w-[350px]">
      <Doughnut data={data} options={options} />
    </div>
  );
};
