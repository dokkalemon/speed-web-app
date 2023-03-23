import { Stack, Typography } from "@mui/material";
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
  //renders
  const renderLegendLabel = (el: IPrimaryCategoryProps) => {
    console.log(el);
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
            {el.score.toString()}
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
