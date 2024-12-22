import { ChartOptions, TooltipItem } from "chart.js";

export const ChartJsAreaChart01Cofigurations = (): ChartOptions<"line"> => {
  return {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
      },

      tooltip: {
        callbacks: {
          label: (context: TooltipItem<"line">) => {
            return ` ${context.dataset.label}: ${context.raw}`;
          },
        },
      },

      datalabels: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          color: "rgba(200, 200, 200, 0.5)",
        },
      },
    },
  };
};

export const ChartJsAreaChart02Cofigurations = (): ChartOptions<"line"> => {
  return {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
      datalabels: {
        display: false,
      },
    },

    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 5,
        },
      },
    },
  };
};
