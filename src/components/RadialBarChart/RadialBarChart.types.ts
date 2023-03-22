import { IPrimaryCategoryProps } from "types/domains";

export interface IRadialChartProps {
  data: IPrimaryCategoryProps[];
}

export interface IRadialChartDataProps {
  name: string;
  value: number;
  fill: string;
}
