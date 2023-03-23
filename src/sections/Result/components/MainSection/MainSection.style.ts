import { styled } from "@mui/material";

export const MainSectionContainer = styled("div")({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  padding: "0px 0px",
  marginBottom: "30px",
});

export const LegendContainer = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "30px",
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
    gap: "60px",
  },
}));

export const LegendLabelContainer = styled("div")(({ theme }) => ({
  height: "40px",
  padding: "0px 20px",
  display: "flex",
  alignItems: "flex-start",
  gap: "10px",
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const LegendColor = styled("div")(({ color }: { color: string }) => ({
  height: "15px",
  width: "40px",
  minHeight: "15px",
  minWidth: "40px",
  backgroundColor: color,
}));
