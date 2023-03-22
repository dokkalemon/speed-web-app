import { CircularProgress, styled } from "@mui/material";

export const CategoryContainer = styled("div")({
  marginTop: "30px",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  gap: "40px",
  width: "60%",
});

export const StyledProgressBar = styled(CircularProgress)({});
