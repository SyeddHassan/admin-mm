"use client";

import React from "react";

import {
  ChartJsBarChart01Props,
  ChartJsBarChart02Props,
  ChartJsBarChart03Props,
} from "@/interfaces/analytics/chartjs-bar-charts-interfaces";

import {
  ChartJsBarChart01Cofigurations,
  ChartJsBarChart02Cofigurations,
  ChartJsBarChart03Cofigurations,
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

import zoomPlugin from "chartjs-plugin-zoom";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  zoomPlugin
);

export const ChartJsBarChart01 = ({ data }: ChartJsBarChart01Props) => {
  const chartData = {
    labels: data.date,
    datasets: [
      {
        label: "Users",
        data: data.users,
        backgroundColor: "#0C62EC",
        borderColor: "#0C62EC",
        borderWidth: 1,
        stack: "unstacked",
      },
      {
        label: "Project Mode ON",
        data: data.projectModeOn,
        backgroundColor: "#F91B1B",
        borderColor: "#F91B1B",
        borderWidth: 1,
        stack: "stack1",
      },
      {
        label: "Sessions",
        data: data.sessions,
        backgroundColor: "#AB40E8",
        borderColor: "#AB40E8",
        borderWidth: 1,
        stack: "stack1",
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

export const ChartJsBarChart03 = ({
  labels,
  values,
}: ChartJsBarChart03Props) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: "Values",
        data: values,
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = ChartJsBarChart03Cofigurations();

  return (
    <div className="relative w-full h-[600px] aspect-square mx-auto">
      <Bar data={chartData} options={options} />
    </div>
  );
};
