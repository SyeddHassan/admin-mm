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
        align: "end",
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
        beginAtZero: true,
        ticks: {
          stepSize: 5,
          color: "black",
        },
        border: {
          color: "black",
        },
        title: {
          display: true,
          text: "Duration (minutes)",
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

export const ChartJsLineChart03Cofigurations = (
  leftText: string,
  bottomText: string
): ChartOptions<"line"> => {
  return {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
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
        title: {
          display: true,
          text: bottomText, 
          font: {
            family: "Inter",
            size: 14,
          },
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
          text: leftText, 
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
