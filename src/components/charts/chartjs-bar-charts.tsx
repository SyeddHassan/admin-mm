"use client";

import React from "react";

import {
  ChartJsBarChart01Props,
  ChartJsBarChart02Props,
  ChartJsBarChart03Props,
  ChartJsBarChart04Props,
  ChartJsBarChart05Props,
} from "@/interfaces/analytics/chartjs-bar-charts-interfaces";

import {
  ChartJsBarChart01Cofigurations,
  ChartJsBarChart02Cofigurations,
  ChartJsBarChart03Cofigurations,
  ChartJsBarChart04Cofigurations,
  ChartJsBarChart05Cofigurations,
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
    <div className="relative w-full h-[550px]">
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
        backgroundColor: "#2D88E5",
        borderColor: "#2D88E5",
        borderWidth: 1,
      },
    ],
  };

  const options = ChartJsBarChart03Cofigurations();

  return (
    <div className="relative w-full h-full">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export const ChartJsBarChart04 = ({ data }: ChartJsBarChart04Props) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: "Value",
        data: data.values,
        backgroundColor: "#2D88E5",
        borderWidth: 0,
        borderColor: "#2D88E5",
        borderRadius: 4,
      },
    ],
  };

  const options = ChartJsBarChart04Cofigurations();

  return (
    <div className="relative w-full h-full aspect-square mx-auto">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export const ChartJsBarChart05 = ({ data }: ChartJsBarChart05Props) => {
  const chartData = {
    labels: data.map((item) => item.category),
    datasets: [
      {
        label: "Sources",
        data: data.map((item) => item.sources),
        backgroundColor: "#2D88E5",
        borderRadius: 3,
        barThickness: 45,
        barPercentage: 0.5,
        categoryPercentage: 0.9,
      },
      {
        label: "Chat Creations",
        data: data.map((item) => item.chatCreations),
        backgroundColor: "#AB40E8",
        borderRadius: 3,
        barThickness: 45,
        barPercentage: 0.5,
        categoryPercentage: 0.9,
      },
    ],
  };

  const options = ChartJsBarChart05Cofigurations();

  return (
    <div className="relative w-full h-full aspect-square mx-auto">
      <Bar data={chartData} options={options} />
    </div>
  );
};
