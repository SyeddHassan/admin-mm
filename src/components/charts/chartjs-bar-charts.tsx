"use client";

import React from "react";

import {
  ChartJsBarChart01Props,
  ChartJsBarChart02Props,
} from "@/interfaces/analytics/chartjs-bar-charts-interfaces";

import {
  ChartJsBarChart01Cofigurations,
  ChartJsBarChart02Cofigurations,
} from "@/configurations/chartjs-bar-charts-configurations";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export const ChartJsBarChart01 = ({ data }: ChartJsBarChart01Props) => {
  const chartData = {
    labels: data.date,
    datasets: [
      {
        label: "Users",
        data: data.users,
        backgroundColor: "rgba(54, 162, 235, 0.7)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "Sessions",
        data: data.sessions,
        backgroundColor: "rgba(153, 102, 255, 0.7)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
      {
        label: "Project Mode ON",
        data: data.projectModeOn,
        backgroundColor: "rgba(255, 99, 132, 0.7)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = ChartJsBarChart01Cofigurations();

  return (
    <div className="relative w-full h-[450px]">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export const ChartJsBarChart02 = ({ data }: ChartJsBarChart02Props) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: "Active Users",
        data: data.values,
        backgroundColor: "rgba(54, 162, 235, 1)",
        borderWidth: 0,
        borderColor: "rgba(54, 162, 235, 1)",
        borderRadius: 4,
      },
    ],
  };

  const options = ChartJsBarChart02Cofigurations();

  return (
    <div className="relative w-full h-[450px]">
      <Bar data={chartData} options={options} />
    </div>
  );
};
