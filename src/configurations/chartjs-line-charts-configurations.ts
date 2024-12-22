import { ChartOptions, TooltipItem } from "chart.js";

export const ChartJsLineChart01Cofigurations = (): ChartOptions<"line"> => {
  return {
    responsive: true,
    maintainAspectRatio: false,

    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },

    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        display: false,
      },
    },

    elements: {
      point: {
        radius: 0,
      },
      line: {
        tension: 0.3,
      },
    },
  };
};

export const ChartJsLineChart02Cofigurations = (): ChartOptions<"line"> => {
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
        beginAtZero: true,
        ticks: {
          stepSize: 5,
        },
      },
    },
  };
};

export const ChartJsLineChart03Cofigurations = (): ChartOptions<"line"> => {
  return {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
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
        beginAtZero: true,
      },
    },
  };
};
