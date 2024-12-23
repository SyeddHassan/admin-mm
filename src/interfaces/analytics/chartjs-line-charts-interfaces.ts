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

export interface ChartJsLineChart03Props {
  data: {
    labels: string[];
    values: number[];
  };
  averageLabel: {
    text: string;
    value: number;
    icon?: React.ReactNode;
  };
  leftText: string;
  bottomText: string;
}

export interface ChartJsLineChart04Props {
  data: {
    labels: string[];
    values: number[];
  };
  leftText: string;
}
