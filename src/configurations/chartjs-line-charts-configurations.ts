import { ChartOptions } from "chart.js";
import { useTheme } from "next-themes";

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
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";

  return {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
        align: "end",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          pointStyleWidth: 10,
          boxHeight: 7,
          padding: 25,
          color: isDarkTheme ? "#ffffff" : "#000000",
          font: {
            family: "Inter",
            size: 14,
            weight: "normal",
          },
        },
      },

      tooltip: {
        enabled: true,
        backgroundColor: isDarkTheme ? "#ffffff" : "#000000",
        titleColor: isDarkTheme ? "#000000" : "#ffffff",
        bodyColor: isDarkTheme ? "#000000" : "#ffffff",
        padding: 10,
        cornerRadius: 5,
        boxWidth: 10,
        boxHeight: 10,
        displayColors: false,
        bodyFont: {
          family: "Inter",
          size: 12,
          weight: "normal",
        },
        titleFont: {
          family: "Inter",
          size: 14,
          weight: "bold",
        },
        footerFont: {
          family: "Inter",
          size: 12,
          weight: "normal",
        },
        caretSize: 5,
        caretPadding: 10,
        animation: {
          duration: 1000,
          easing: "easeOutCubic",
        },
      },

      datalabels: {
        display: false,
      },
    },

    layout: {
      padding: {
        bottom: 20,
      },
    },

    scales: {
      x: {
        ticks: {
          color: isDarkTheme ? "#ffffff" : "#000000",
        },
        border: {
          color: isDarkTheme ? "#ffffff" : "#000000",
        },
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          color: isDarkTheme ? "#ffffff1a" : "#0000001a",
        },
        beginAtZero: true,
        ticks: {
          stepSize: 5,
          color: isDarkTheme ? "#ffffff" : "#000000",
        },
        border: {
          color: isDarkTheme ? "#ffffff" : "#000000",
        },
        title: {
          display: true,
          text: "Duration (minutes)",
          font: {
            family: "Inter",
            size: 14,
          },
          color: isDarkTheme ? "#ffffff" : "#000000",
        },
      },
    },
  };
};

export const ChartJsLineChart03Cofigurations = (
  leftText: string,
  bottomText: string
): ChartOptions<"line"> => {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";

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

    layout: {
      padding: {
        bottom: 20,
      },
    },

    scales: {
      x: {
        ticks: {
          color: isDarkTheme ? "#ffffff" : "#000000",
        },
        border: {
          color: isDarkTheme ? "#ffffff" : "#000000",
        },
        grid: {
          display: false,
        },
        title: {
          display: true,
          text: bottomText,
          font: {
            family: "Inter",
            size: 14,
          },
          color: isDarkTheme ? "#ffffff" : "#000000",
        },
      },
      y: {
        grid: {
          color: isDarkTheme ? "#ffffff1a" : "#0000001a",
        },
        ticks: {
          stepSize: 5,
          color: isDarkTheme ? "#ffffff" : "#000000",
        },
        border: {
          color: isDarkTheme ? "#ffffff" : "#000000",
        },
        title: {
          display: true,
          text: leftText,
          font: {
            family: "Inter",
            size: 14,
          },
          color: isDarkTheme ? "#ffffff" : "#000000",
        },

        beginAtZero: true,
      },
    },
  };
};
