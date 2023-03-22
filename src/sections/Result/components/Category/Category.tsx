import { Typography } from "@mui/material";
import { CategoryContainer } from "./Category.style";
import { ICategoryProps } from "./Category.types";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const Category = ({ category }: ICategoryProps) => {
  return (
    <CategoryContainer>
      <Typography variant="h4">{category.label}</Typography>
      <div style={{ height: "150px", width: "150px", position: "relative" }}>
        <CircularProgressbar
          value={category.score}
          text={category.score.toString()}
          styles={buildStyles({
            rotation: 90,
            textSize: "30px",
            pathTransitionDuration: 1,
            pathColor: category.fill,
            textColor: category.fill,
            trailColor: "#d6d6d630",
          })}
        />
      </div>
      <Typography variant="body1" sx={{ textAlign: "center" }}>
        {category.description}
      </Typography>
    </CategoryContainer>
  );
};

export { Category };
