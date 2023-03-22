import { RadialBarChart as Chart, RadialBar } from "recharts";

import { IRadialChartProps } from "./RadialBarChart.types";

const RadialBarChart = ({ data }: IRadialChartProps) => {
  return (
    <Chart
      data={data}
      height={350}
      barSize={60}
      width={350}
      startAngle={0}
      endAngle={360}
      innerRadius="20%"
      outerRadius="80%"
    >
      <RadialBar label={false} dataKey="score" />
    </Chart>
  );
};

export { RadialBarChart };
