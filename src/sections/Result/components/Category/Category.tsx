import { AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { CategoryContainer, DetailContainer, Title } from "./Category.style";
import { ICategoryProps } from "./Category.types";
import { Icon } from "@iconify/react";

const Category = ({ category }: ICategoryProps) => {
  return (
    <CategoryContainer>
      <AccordionSummary
        expandIcon={<Icon icon="ic:round-expand-more" style={{ fontSize: "25px" }} />}
        sx={{
          width: "100%",
        }}
      >
        <Title>
          <Typography variant="body1" sx={{ width: "70%", fontWeight: "600" }}>
            {category.title}
          </Typography>
          {/*    <Typography
            variant="subtitle2"
            sx={{ width: "25%", textAlign: "right", paddingRight: "20px" }}
          >
            {category.score}
          </Typography> */}
        </Title>
      </AccordionSummary>
      <AccordionDetails>
        <DetailContainer>
          <Typography variant="body1" sx={{ width: "100%" }}>
            {category.description}
          </Typography>
        </DetailContainer>
      </AccordionDetails>
    </CategoryContainer>
  );
};

export { Category };
