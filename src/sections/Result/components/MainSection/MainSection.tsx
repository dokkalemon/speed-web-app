import { Stack, Typography } from "@mui/material";
import { RadialBarChart } from "components";
import { IRadialChartDataProps } from "components/RadialBarChart/RadialBarChart.types";
import {
  LegendColor,
  LegendContainer,
  LegendLabelContainer,
  MainSectionContainer,
} from "./MainSection.style";
import { useContext } from "react";
import { SearchSiteContext } from "contexts/SearchContext";
const data = [
  {
    name: "18-24",
    value: 31.47,
    fill: "#8884d8",
  },
  {
    name: "25-29",
    value: 26.69,
    fill: "#83a6ed",
  },
  {
    name: "30-34",
    value: 15.69,
    fill: "#8dd1e1",
  },
  {
    name: "35-39",
    value: 8.22,
    fill: "#82ca9d",
  },
];

const MainSection = ({ site }: any) => {
  //context
  const { domains, activeSite } = useContext(SearchSiteContext);

  //renders
  const renderLegendLabel = (el: IRadialChartDataProps) => {
    return (
      <LegendLabelContainer>
        <LegendColor color={el.fill} />
        <Stack gap="5px">
          <Typography variant="body1" sx={{ lineHeight: "15px" }}>
            {el.name}
          </Typography>
          <Typography
            variant="caption"
            sx={{ fontWeight: "700", color: el.fill, lineHeight: "10px" }}
          >
            {el.value}
          </Typography>
        </Stack>
      </LegendLabelContainer>
    );
  };

  return (
    <MainSectionContainer>
      <RadialBarChart data={data} />
      <LegendContainer>{data.map((el, number) => renderLegendLabel(el))}</LegendContainer>
    </MainSectionContainer>
  );
};

export { MainSection };
