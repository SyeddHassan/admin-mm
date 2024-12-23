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

export interface ChartJsLineChart05Props {
  data: {
    labels: string[];
    values: number[];
  };
}

export interface ChartJsLineChart06Props {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      borderColor: string;
      backgroundColor: string;
    }[];
  };
}

export interface ChartJsLineChart07Props {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
    }[];
  };
}

export interface ChartJsLineChart08Props {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
    }[];
  };
}
