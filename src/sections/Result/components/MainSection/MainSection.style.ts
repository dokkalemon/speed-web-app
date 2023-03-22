import { styled } from "@mui/material";

export const MainSectionContainer = styled("div")({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  padding: "0px 0px",
});

export const LegendContainer = styled("div")({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "30px",
});

export const LegendLabelContainer = styled("div")({
  height: "40px",
  padding: "0px 20px",
  display: "flex",
  alignItems: "flex-start",
  gap: "10px",
});

export const LegendColor = styled("div")(({ color }: { color: string }) => ({
  height: "15px",
  width: "40px",
  backgroundColor: color,
}));
