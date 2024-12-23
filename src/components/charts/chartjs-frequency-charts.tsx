"use client";

import React from "react";

import { ChartJsFrequencyChart01Props } from "@/interfaces/analytics/chartjs-frequency-charts-interfaces";

import { ChartJsFrequencyChart01Cofigurations } from "@/configurations/chartjs-frequency-charts-configurations";

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

export const ChartJsFrequencyChart01 = ({
  labels,
  values,
}: ChartJsFrequencyChart01Props) => {
  const data = {
    labels,
    datasets: [
      {
        label: "Usage (times)",
        data: values,
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        tension: 0,
      },
    ],
  };

  const options = ChartJsFrequencyChart01Cofigurations();

  return <Line data={data} options={options} />;
};
