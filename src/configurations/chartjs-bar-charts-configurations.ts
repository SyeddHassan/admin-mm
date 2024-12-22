import { ChartOptions, TooltipItem } from "chart.js";
import { useTheme } from "next-themes";

export const ChartJsBarChart01Cofigurations = (): ChartOptions<"bar"> => {
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
          font: {
            family: "Inter",
            size: 14,
            weight: "normal",
          },
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: "rgba(0, 0, 0, 1)",
        titleColor: "#fff",
        bodyColor: "#fff",
        footerColor: "#fff",
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
          duration: 200,
          easing: "easeOutQuart",
        },
      },

      datalabels: {
        display: false,
      },
      zoom: {
        zoom: {
          wheel: {
            enabled: true,
            speed: 0.2,
          },
          pinch: {
            enabled: true,
          },
          mode: "xy",
        },
        pan: {
          enabled: true,
          mode: "xy",
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
        stacked: true,
        ticks: {
          color: "black",
        },
        border: {
          color: "black",
        },
        grid: {
          display: false,
        },
      },
      y: {
        stacked: true,
        beginAtZero: true,
        ticks: {
          color: "black",
        },
        border: {
          color: "black",
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
        backgroundColor: "rgba(0, 0, 0, 1)",
        titleColor: "#fff",
        bodyColor: "#fff",
        footerColor: "#fff",
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
          duration: 200,
          easing: "easeOutQuart",
        },
      },
      zoom: {
        zoom: {
          wheel: {
            enabled: true,
            speed: 0.2,
          },
          pinch: {
            enabled: true,
          },
          mode: "xy",
        },
        pan: {
          enabled: true,
          mode: "xy",
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
        ticks: {
          color: "black",
        },
        border: {
          color: "black",
        },
      },
      y: {
        grid: {
          color: "rgba(200, 200, 200, 0.5)",
        },
        border: {
          color: "black",
        },
        ticks: {
          precision: 0,
          color: "black",
        },
        title: {
          display: true,
          text: "Sessions",
          font: {
            family: "Inter",
            size: 14,
          },
          color: "black",
        },
        beginAtZero: true,
      },
    },
  };
};

export const ChartJsBarChart03Cofigurations = (): ChartOptions<"bar"> => {
  return {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Bar Chart Example",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Hour of Day",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Count",
        },
      },
    },
  };
};
