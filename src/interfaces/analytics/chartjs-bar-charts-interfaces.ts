export interface ChartJsBarChart01Props {
  data: {
    date: string[];
    users: number[];
    sessions: number[];
    projectModeOn: number[];
  };
}

export interface ChartJsBarChart02Props {
  data: {
    labels: string[];
    values: number[];
  };
}

export interface ChartJsBarChart03Props {
  labels: string[];
  values: number[];
}
