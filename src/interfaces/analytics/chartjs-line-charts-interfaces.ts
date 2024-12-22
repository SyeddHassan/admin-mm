export interface ChartJsLineChart01Props {
  chartData: {
    name: string;
    value: string | number;
    color: string;
    data: number[];
  }[];
}

export interface ChartJsLineChart02Props {
  data: {
    date: string[];
    high: number[];
    low: number[];
  };
}
