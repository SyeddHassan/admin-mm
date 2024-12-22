import { ChartOptions } from "chart.js";
import { useTheme } from "next-themes";

export const ChartJsBarChart01Cofigurations = (): ChartOptions<"bar"> => {
  return {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
      },
      tooltip: {
        enabled: true,
      },
      datalabels: {
        display: false,
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        beginAtZero: true,
      },
    },
  };
};

export const ChartJsBarChart02Cofigurations = (): ChartOptions<"bar"> => {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";

  return {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          color: isDarkTheme ? "#ffffff" : "#000000",
          usePointStyle: true,
          pointStyle: "circle",
          padding: 20,
          font: {
            family: "Inter",
            size: 14,
            weight: "normal",
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (context: any) => ` ${context.raw}`,
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
        ticks: {
          precision: 0,
        },
        beginAtZero: true,
      },
    },
  };
};
