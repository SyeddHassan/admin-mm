import { ChartOptions } from "chart.js";
import { useTheme } from "next-themes";

export const ChartJsBarChart01Cofigurations = (): ChartOptions<"bar"> => {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";

  return {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
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
        footerColor: isDarkTheme ? "#000000" : "#ffffff",
        padding: 10,
        cornerRadius: 5,
        boxWidth: 10,
        boxHeight: 10,
        displayColors: false,
        bodyFont: {
          family: "Jetbrains mono",
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
        stacked: true,
        ticks: {
          color: isDarkTheme ? "#ffffff" : "#000000",
          font: {
            family: "Inter",
            size: 14,
          },
        },
        border: {
          color: isDarkTheme ? "#000000" : "#ffffff",
        },
        grid: {
          display: false,
        },
      },
      y: {
        stacked: true,
        beginAtZero: true,
        ticks: {
          stepSize: 20,
          color: isDarkTheme ? "#ffffff" : "#000000",
          font: {
            family: "Inter",
            size: 14,
          },
        },
        border: {
          color: isDarkTheme ? "#000000" : "#ffffff",
        },
        grid: {
          color: isDarkTheme ? "#ffffff1a" : "#0000001a",
        },
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
          pointStyleWidth: 10,
          boxHeight: 7,
          padding: 25,
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
        footerColor: isDarkTheme ? "#000000" : "#ffffff",
        padding: 10,
        cornerRadius: 5,
        boxWidth: 10,
        boxHeight: 10,
        displayColors: false,
        bodyFont: {
          family: "Jetbrains mono",
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
        display: true,
        align: "start",
        anchor: "end",
        offset: -20,
        color: isDarkTheme ? "#ffffff" : "#000000",
        font: {
          family: "Jetbrains mono",
          size: 14,
          weight: "bold",
        },
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
          font: {
            family: "Inter",
            size: 14,
          },
        },
        border: {
          color: isDarkTheme ? "#000000" : "#ffffff",
        },
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          stepSize: 200,
          color: isDarkTheme ? "#ffffff" : "#000000",
          font: {
            family: "Inter",
            size: 14,
          },
        },
        border: {
          color: isDarkTheme ? "#000000" : "#ffffff",
        },
        grid: {
          color: isDarkTheme ? "#ffffff1a" : "#0000001a",
        },
        title: {
          display: true,
          text: "Sessions",
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

export const ChartJsBarChart03Cofigurations = (): ChartOptions<"bar"> => {
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
        enabled: true,
        backgroundColor: isDarkTheme ? "#ffffff" : "#000000",
        titleColor: isDarkTheme ? "#000000" : "#ffffff",
        bodyColor: isDarkTheme ? "#000000" : "#ffffff",
        footerColor: isDarkTheme ? "#000000" : "#ffffff",
        padding: 10,
        cornerRadius: 5,
        boxWidth: 10,
        boxHeight: 10,
        displayColors: false,
        bodyFont: {
          family: "Jetbrains mono",
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
          font: {
            family: "Inter",
            size: 14,
          },
        },
        border: {
          color: isDarkTheme ? "#000000" : "#ffffff",
        },
        grid: {
          display: false,
        },
        title: {
          display: true,
          text: "Hour of Day",
          font: {
            family: "Inter",
            size: 14,
          },
          color: isDarkTheme ? "#ffffff" : "#000000",
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
          color: isDarkTheme ? "#ffffff" : "#000000",
          font: {
            family: "Inter",
            size: 14,
          },
        },
        border: {
          color: isDarkTheme ? "#000000" : "#ffffff",
        },
        grid: {
          color: isDarkTheme ? "#ffffff1a" : "#0000001a",
        },
        title: {
          display: true,
          text: "Avg. site sessions",
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

export const ChartJsBarChart04Cofigurations = (): ChartOptions<"bar"> => {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";

  return {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: "y",
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
        border: {
          display: false,
        },
      },

      y: {
        beginAtZero: true,

        ticks: {
          font: {
            family: "Inter",
            size: 14,
            weight: "normal",
          },
          color: isDarkTheme ? "#ffffff" : "#000000",
        },
        border: {
          color: isDarkTheme ? "#000000" : "#ffffff",
        },
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },

      tooltip: {
        enabled: true,
        backgroundColor: isDarkTheme ? "#ffffff" : "#000000",
        titleColor: isDarkTheme ? "#000000" : "#ffffff",
        bodyColor: isDarkTheme ? "#000000" : "#ffffff",
        footerColor: isDarkTheme ? "#000000" : "#ffffff",
        padding: 10,
        cornerRadius: 5,
        boxWidth: 10,
        boxHeight: 10,
        displayColors: false,
        bodyFont: {
          family: "Jetbrains mono",
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
        display: true,
        align: "start",
        anchor: "end",
        offset: -25,
        color: isDarkTheme ? "#ffffff" : "#000000",
        font: {
          family: "Jetbrains mono",
          size: 14,
          weight: "bold",
        },
      },
    },
  };
};

export const ChartJsBarChart05Cofigurations = (): ChartOptions<"bar"> => {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";

  return {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: "y",
    plugins: {
      legend: {
        position: "bottom" as const,
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
        footerColor: isDarkTheme ? "#000000" : "#ffffff",
        padding: 10,
        cornerRadius: 5,
        boxWidth: 10,
        boxHeight: 10,
        displayColors: false,
        bodyFont: {
          family: "Jetbrains mono",
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
        display: true,
        align: "start",
        anchor: "end",
        offset: -24,
        color: isDarkTheme ? "#ffffff" : "#000000",
        font: {
          family: "Jetbrains mono",
          size: 14,
          weight: "bold",
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
      },
      y: {
        ticks: {
          font: {
            family: "Inter",
            size: 14,
            weight: "normal",
          },
          color: isDarkTheme ? "#ffffff" : "#000000",
        },
        border: {
          color: isDarkTheme ? "#000000" : "#ffffff",
        },
        grid: {
          display: false,
        },
      },
    },
  };
};

export const ChartJsBarChart06Cofigurations = (): ChartOptions<"bar"> => {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";
  return {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: {
          color: isDarkTheme ? "#ffffff" : "#000000",
          font: {
            family: "Inter",
            size: 14,
          },
        },
        border: {
          color: isDarkTheme ? "#000000" : "#ffffff",
        },
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 20,
          color: isDarkTheme ? "#ffffff" : "#000000",
          font: {
            family: "Inter",
            size: 14,
          },
        },
        border: {
          color: isDarkTheme ? "#000000" : "#ffffff",
        },
        grid: {
          color: isDarkTheme ? "#ffffff1a" : "#0000001a",
        },
      },
    },
    plugins: {
      legend: {
        position: "top" as const,
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
        footerColor: isDarkTheme ? "#000000" : "#ffffff",
        padding: 10,
        cornerRadius: 5,
        boxWidth: 10,
        boxHeight: 10,
        displayColors: false,
        bodyFont: {
          family: "Jetbrains mono",
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
  };
};
