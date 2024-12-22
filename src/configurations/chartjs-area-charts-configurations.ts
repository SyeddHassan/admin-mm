import { ChartOptions, TooltipItem } from "chart.js";

export const ChartJsAreaChart01Cofigurations = (): ChartOptions<"line"> => {
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
    interaction: {
      mode: "nearest",
      intersect: false,
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
        ticks: {
          color: "black",
        },
        border: {
          color: "black",
        },
        title: {
          display: true,
          text: "Day (Hours)",
          font: {
            family: "Inter",
            size: 14,
          },
          color: "black",
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
