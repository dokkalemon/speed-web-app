import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { RadialBarChart } from "components";
import { IPrimaryCategoryProps } from "types/domains";

import {
  LegendColor,
  LegendContainer,
  LegendLabelContainer,
  MainSectionContainer,
} from "./MainSection.style";
import { IMainSectionProps } from "./MainSection.types";

const MainSection = ({ site }: IMainSectionProps) => {
  //hooks
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  //renders
  const renderLegendLabel = (el: IPrimaryCategoryProps) => {
    return (
      <LegendLabelContainer>
        <LegendColor color={el.fill} />
        <Stack gap="5px" alignItems={isMobile ? "center" : "auto"}>
          <Typography variant="body1" sx={{ lineHeight: "15px" }}>
            {el.label}
          </Typography>
          <Typography
            variant={isMobile ? "subtitle1" : "body1"}
            sx={{ fontWeight: "700", color: el.fill, lineHeight: isMobile ? "20px" : "15px" }}
          >
            {el.score.toString()}%
          </Typography>
        </Stack>
      </LegendLabelContainer>
    );
  };

  return (
    <MainSectionContainer>
      <RadialBarChart data={site.results?.primaryCategories as IPrimaryCategoryProps[]} />
      <LegendContainer>
        {site.results?.primaryCategories?.map((el) => renderLegendLabel(el))}
      </LegendContainer>
    </MainSectionContainer>
  );
};

export { MainSection };
