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

export interface ChartJsBarChart04Props {
  data: {
    labels: string[];
    values: number[];
  };
}

export interface ChartJsBarChart05Props {
  data: {
    category: string;
    sources: number;
    chatCreations: number;
  }[];
}

export interface ChartJsBarChart06Props {
  data: {
    labels: string[];
    sessions: number[];
    activations: number[];
  };
  legends: string[];
  colors: string[];
}

export interface ChartJsBarChart07Props {
  data: {
    region: string;
    campaigns: number;
  }[];
}
