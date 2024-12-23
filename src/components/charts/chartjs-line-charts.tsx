"use client";

import React from "react";

import {
  ChartJsLineChart01Props,
  ChartJsLineChart02Props,
  ChartJsLineChart03Props,
  ChartJsLineChart04Props,
  ChartJsLineChart05Props,
  ChartJsLineChart06Props,
  ChartJsLineChart07Props,
  ChartJsLineChart08Props,
  ChartJsLineChart09Props,
} from "@/interfaces/analytics/chartjs-line-charts-interfaces";

import {
  ChartJsLineChart01Cofigurations,
  ChartJsLineChart02Cofigurations,
  ChartJsLineChart03Cofigurations,
  ChartJsLineChart04Cofigurations,
  ChartJsLineChart05Cofigurations,
  ChartJsLineChart06Cofigurations,
  ChartJsLineChart07Cofigurations,
  ChartJsLineChart08Cofigurations,
  ChartJsLineChart09Cofigurations,
} from "@/configurations/chartjs-line-charts-configurations";

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
  ScriptableContext,
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

export const ChartJsLineChart03 = ({
  data,
  averageLabel,
  leftText,
  bottomText,
}: ChartJsLineChart03Props) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        data: data.values,
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 2,
        pointBackgroundColor: "rgba(54, 162, 235, 1)",
        fill: false,
        pointRadius: 0,
      },
    ],
  };

  const options = ChartJsLineChart03Cofigurations(leftText, bottomText);

  return (
    <div className="relative w-full h-[450px]">
      <Line data={chartData} options={options} />
      <div className="absolute top-6 right-10 flex items-center max-lg:gap-2 lg:flex-row flex-col space-x-2 bg-white dark:bg-background-color dark:border dark:border-border shadow-md rounded-lg p-3">
        {averageLabel.icon && (
          <span className="w-10 h-10 flex items-center justify-center bg-[#976CDD] rounded-full">
            <span className="text-white">{averageLabel.icon}</span>
          </span>
        )}
        <div className="text-center">
          <div className="md:text-[14px] text-[12px] font-inter  text-heading-color">
            {averageLabel.text}
          </div>
          <div className="md:text-[16px] text-[14px] font-bold">
            {averageLabel.value}
          </div>
        </div>
      </div>
    </div>
  );
};

export const ChartJsLineChart04 = ({
  data,
  leftText,
}: ChartJsLineChart04Props) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        data: data.values,
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 2,
        pointBackgroundColor: "rgba(54, 162, 235, 1)",
        fill: false,
        pointRadius: 0,
      },
    ],
  };

  const options = ChartJsLineChart04Cofigurations(leftText);

  return (
    <div className="relative w-full h-[450px]">
      <Line data={chartData} options={options} />
    </div>
  );
};

export const ChartJsLineChart05 = ({ data }: ChartJsLineChart05Props) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        data: data.values,
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 2,
        pointBackgroundColor: "rgba(54, 162, 235, 1)",
        fill: false,
        pointRadius: 0,
      },
    ],
  };

  const options = ChartJsLineChart05Cofigurations();

  return (
    <div className="relative w-full h-[450px]">
      <Line data={chartData} options={options} />
    </div>
  );
};

export const ChartJsLineChart06 = ({ data }: ChartJsLineChart06Props) => {
  const chartData = {
    labels: data.labels,
    datasets: data.datasets.map((dataset) => ({
      ...dataset,
      backgroundColor: (context: ScriptableContext<"line">) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, "rgba(75, 192, 192, 0.5)");
        gradient.addColorStop(1, "rgba(75, 192, 192, 0)");
        return gradient;
      },
      fill: true,
      pointRadius: 0,
    })),
  };

  const options = ChartJsLineChart06Cofigurations();

  return <Line options={options} data={chartData} className="w-full h-full" />;
};

export const ChartJsLineChart07 = ({ data }: ChartJsLineChart07Props) => {
  const colorPairs = [
    {
      border: "rgb(255, 99, 132)",
      gradient: ["rgba(255, 99, 132, 0.4)", "rgba(255, 99, 132, 0)"],
    },
  ];

  const chartData = {
    labels: data.labels,
    datasets: data.datasets.map((dataset, index) => ({
      ...dataset,
      borderColor: colorPairs[index % colorPairs.length].border,
      backgroundColor: (context: ScriptableContext<"line">) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 400);
        const colors = colorPairs[index % colorPairs.length].gradient;
        gradient.addColorStop(0, colors[0]);
        gradient.addColorStop(1, colors[1]);
        return gradient;
      },
      fill: true,
      pointRadius: 0,
    })),
  };

  const options = ChartJsLineChart07Cofigurations();
  return <Line options={options} data={chartData} className="w-full h-full" />;
};

export const ChartJsLineChart08 = ({ data }: ChartJsLineChart08Props) => {
  const colorPairs = [
    {
      border: "rgb(147, 51, 234)",
      gradient: ["rgba(147, 51, 234, 0.4)", "rgba(147, 51, 234, 0)"],
    },
  ];

  const chartData = {
    labels: data.labels,
    datasets: data.datasets.map((dataset, index) => ({
      ...dataset,
      borderColor: colorPairs[index % colorPairs.length].border,
      backgroundColor: (context: ScriptableContext<"line">) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 400);
        const colors = colorPairs[index % colorPairs.length].gradient;
        gradient.addColorStop(0, colors[0]);
        gradient.addColorStop(1, colors[1]);
        return gradient;
      },
      fill: true,
      pointRadius: 0,
    })),
  };

  const options = ChartJsLineChart08Cofigurations();

  return <Line options={options} data={chartData} className="w-full h-full" />;
};

export const ChartJsLineChart09 = ({ data }: ChartJsLineChart09Props) =>{
  const chartData= {
    labels: data.map(point => point.timestamp),
    datasets: [
      {
        label: 'Response Time (ms)',
        data: data.map(point => point.responseTime),
        borderColor: 'rgb(255, 87, 34)', // Direct value
        backgroundColor: 'rgba(255, 87, 34, 0.1)', // Direct value
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0,
      },
      {
        label: 'Content Length (kb)',
        data: data.map(point => point.contentLength),
        borderColor: 'rgb(76, 175, 80)', // Direct value
        backgroundColor: 'rgba(76, 175, 80, 0.1)', // Direct value
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  }

  const options = ChartJsLineChart09Cofigurations();

  return(
    <Line data={chartData} options={options} />

  )
}
