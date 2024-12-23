import { ChartOptions, TooltipItem } from "chart.js";
import { useTheme } from "next-themes";

export const ChartJsPieChart01Cofigurations = (): ChartOptions<"doughnut"> => {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";

  return {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          color: isDarkTheme ? "#ffffff" : "#000000",
          usePointStyle: true,
          pointStyle: "circle",
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
        borderColor: "transparent",
        borderWidth: 0,
        cornerRadius: 8,
        padding: 10,
        displayColors: false,
        titleColor: isDarkTheme ? "#000000" : "#ffffff",
        titleFont: {
          size: 14,
        },
        bodyFont: {
          family: "Inter",
          size: 12,
        },
        bodyColor: isDarkTheme ? "#000000" : "#ffffff",
        caretSize: 0,
        callbacks: {
          label: function (tooltipItem: TooltipItem<"doughnut">) {
            const label = tooltipItem.label || "";
            const value = tooltipItem.raw || 0;
            return `${label}: ${value}%`;
          },
        },
        animation: {
          duration: 1000,
          easing: "easeOutCubic",
        },
      },

      datalabels: {
        display: true,
        color: "#fff",
        formatter: (value: number) => `${value}%`,
        font: {
          family: "JetBrains Mono, sans-serif",
          size: 12,
          weight: "normal",
        },
      },
    },

    elements: {
      arc: {
        borderWidth: 3,
        borderColor: isDarkTheme ? "#000000" : "#ffffff",
        hoverBackgroundColor: (ctx) => {
          const raw = ctx.raw as { backgroundColor: string };
          return raw.backgroundColor;
        },
        hoverBorderColor: (ctx) => {
          const raw = ctx.raw as { borderColor: string };
          return raw.borderColor;
        },
      },
    },
    cutout: "0%",
  };
};
