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
        grid: {
          color: isDarkTheme ? "#ffffff1a" : "#0000001a",
        },
        beginAtZero: true,
        ticks: {
          stepSize: 5,
          color: isDarkTheme ? "#ffffff" : "#000000",
          font: {
            family: "Inter",
            size: 14,
          },
        },
        border: {
          color: isDarkTheme ? "#000000" : "#ffffff",
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
          stepSize: 30,
          color: isDarkTheme ? "#ffffff" : "#000000",
          font: {
            family: "Inter",
            size: 14,
          },
        },
        border: {
          color: isDarkTheme ? "#000000" : "#ffffff",
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

export const ChartJsLineChart04Cofigurations = (
  leftText: string
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
        grid: {
          color: isDarkTheme ? "#ffffff1a" : "#0000001a",
        },
        ticks: {
          stepSize: 30,
          color: isDarkTheme ? "#ffffff" : "#000000",
          font: {
            family: "Inter",
            size: 14,
          },
        },
        border: {
          color: isDarkTheme ? "#000000" : "#ffffff",
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

export const ChartJsLineChart05Cofigurations = (): ChartOptions<"line"> => {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";

  return {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: isDarkTheme ? "#ffffff" : "#000000",
          font: {
            family: "Inter",
            size: 14,
          },
        },
      },
      y: {
        grid: {
          display: true,
          color: "rgba(0, 0, 0, 0.1)",
        },
        ticks: {
          stepSize: 30,
          color: isDarkTheme ? "#ffffff" : "#000000",
          font: {
            family: "Inter",
            size: 14,
          },
        },
        border: {
          color: isDarkTheme ? "#000000" : "#ffffff",
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
    elements: {
      line: {
        tension: 0.1,
        borderColor: "rgb(59, 130, 246)",
        borderWidth: 2,
      },
      point: {
        radius: 0,
        hoverRadius: 6,
        hitRadius: 10,
        backgroundColor: "rgb(59, 130, 246)",
      },
    },
  };
};

export const ChartJsLineChart06Cofigurations = (): ChartOptions<"line"> => {
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
    scales: {
      x: {
        title: {
          display: true,
          text: "Time",
          font: {
            family: "Inter",
            size: 14,
            weight: "bold",
          },
          color: isDarkTheme ? "#ffffff" : "#000000",
        },
        grid: {
          display: false,
        },
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
      },
      y: {
        grid: {
          color: isDarkTheme ? "#ffffff1a" : "#0000001a",
        },
        title: {
          display: true,
          text: "Response Time (ms)",
          font: {
            family: "Inter",
            size: 14,
            weight: "bold",
          },
          color: isDarkTheme ? "#ffffff" : "#000000",
        },
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
      },
    },
    elements: {
      line: {
        tension: 0.4,
      },
      point: {
        radius: 4,
        hoverRadius: 6,
      },
    },
    interaction: {
      mode: "nearest",
      axis: "x",
      intersect: false,
    },
  };
};

export const ChartJsLineChart07Cofigurations = (): ChartOptions<"line"> => {
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
    scales: {
      x: {
        title: {
          display: true,
          text: "Time",
          font: {
            family: "Inter",
            size: 14,
            weight: "bold",
          },
          color: isDarkTheme ? "#ffffff" : "#000000",
        },
        grid: {
          display: false,
        },
        ticks: {
          color: isDarkTheme ? "#ffffff" : "#000000",
        },
      },
      y: {
        grid: {
          color: isDarkTheme ? "#ffffff1a" : "#0000001a",
        },
        ticks: {
          color: isDarkTheme ? "#ffffff" : "#000000",
        },
      },
    },
    elements: {
      line: {
        tension: 0.6,
        borderWidth: 2,
      },
      point: {
        radius: 3,
        hoverRadius: 5,
      },
    },
    interaction: {
      mode: "nearest",
      intersect: false,
      axis: "x",
    },
  };
};

export const ChartJsLineChart08Cofigurations = (): ChartOptions<"line"> => {
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
    scales: {
      x: {
        title: {
          display: true,
          text: "Time",
          font: {
            family: "Inter",
            size: 14,
            weight: "bold",
          },
          color: isDarkTheme ? "#ffffff" : "#000000",
        },
        grid: {
          display: false,
        },
        ticks: {
          color: isDarkTheme ? "#ffffff" : "#000000",
        },
      },
      y: {
        grid: {
          color: isDarkTheme ? "#ffffff1a" : "#0000001a",
        },
        ticks: {
          color: isDarkTheme ? "#ffffff" : "#000000",
        },
      },
    },
    elements: {
      line: {
        tension: 0.4,
        borderWidth: 2,
      },
      point: {
        radius: 3,
        hoverRadius: 4,
      },
    },
    interaction: {
      mode: "nearest",
      intersect: false,
      axis: "x",
    },
  };
};

export const ChartJsLineChart09Cofigurations = (): ChartOptions<"line"> => {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";

  return {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: "index",
      intersect: false,
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
    scales: {
      x: {
        grid: {
          display: false,
        },

        ticks: {
          stepSize: 5,
          color: isDarkTheme ? "#ffffff" : "#000000",
          font: {
            family: "Inter",
            size: 14,
          },
          maxRotation: 45,
          minRotation: 45,
        },
        border: {
          color: isDarkTheme ? "#000000" : "#ffffff",
        },
      },
      y: {
        grid: {
          color: isDarkTheme ? "#ffffff1a" : "#0000001a",
        },
        min: 0,
        max: 3000,
        ticks: {
          stepSize: 500,
          color: isDarkTheme ? "#ffffff" : "#000000",
          font: {
            family: "Inter",
            size: 14,
          },
        },
        border: {
          color: isDarkTheme ? "#000000" : "#ffffff",
        },
      },
    },
  };
};
