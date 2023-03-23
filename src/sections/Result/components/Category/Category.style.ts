import { CircularProgress, styled } from "@mui/material";

export const CategoryContainer = styled("div")(({ theme }) => ({
  marginTop: "30px",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  gap: "40px",
  width: "60%",
  [theme.breakpoints.down("lg")]: {
    width: "100%",
  },
}));

export const StyledProgressBar = styled(CircularProgress)({});
