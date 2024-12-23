import { ChartOptions } from "chart.js";
import { useTheme } from "next-themes";

export const ChartJsFrequencyChart01Cofigurations =
  (): ChartOptions<"line"> => {
    const { theme } = useTheme();
    const isDarkTheme = theme === "dark";

    return {
      responsive: true,
      plugins: {
        legend: {
          display: false,
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
            stepSize: 50,
            color: isDarkTheme ? "#ffffff" : "#000000",
          },
          border: {
            color: isDarkTheme ? "#ffffff" : "#000000",
          },
          title: {
            display: true,
            text: "Usage (times)",
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
