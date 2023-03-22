import { Stack, Typography } from "@mui/material";
import { RadialBarChart } from "components";

import {
  LegendColor,
  LegendContainer,
  LegendLabelContainer,
  MainSectionContainer,
} from "./MainSection.style";

const MainSection = ({ site }: any) => {
  //renders
  const renderLegendLabel = (el: any) => {
    return (
      <LegendLabelContainer>
        <LegendColor color={el.fill} />
        <Stack gap="5px">
          <Typography variant="body1" sx={{ lineHeight: "15px" }}>
            {el.label}
          </Typography>
          <Typography
            variant="caption"
            sx={{ fontWeight: "700", color: el.fill, lineHeight: "10px" }}
          >
            {el.score}
          </Typography>
        </Stack>
      </LegendLabelContainer>
    );
  };

  return (
    <MainSectionContainer>
      <RadialBarChart data={site.results.primaryCategories} />
      <LegendContainer>
        {site.results.primaryCategories.map((el: any, number: number) => renderLegendLabel(el))}
      </LegendContainer>
    </MainSectionContainer>
  );
};

export { MainSection };
