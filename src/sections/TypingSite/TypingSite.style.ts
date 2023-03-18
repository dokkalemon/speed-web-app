import { styled } from "@mui/material";

export const TypingSiteContainer = styled("form")(
  ({ theme }) => ({
    padding: "70px 0px",
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: "10px",
    [theme.breakpoints.down("lg")]: {
      width: "70%",
    },
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  })
);
