import { styled, Theme } from "@mui/material";
import { CSSProperties } from "react";

export const WrapperContainer = styled("div")(
  ({
    style,
    theme,
  }: {
    style?: CSSProperties;
    theme?: Theme;
  }) => ({
    width: "1800px",
    margin: "0 auto",
    padding: "0px 10px",
    ...style,
    [`@media (max-width: ${theme?.breakpoints.values.xl}px)`]:
      {
        width: "100%",
        backgroundColor: "red",
      },
  })
);
