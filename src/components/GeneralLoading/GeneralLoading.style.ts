import { styled } from "@mui/material";

export const GeneralLoadingContainer = styled("div")({
  height: "100vh",
  width: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  backdropFilter: "blur(10px)",
  position: "fixed",
  zIndex: "999999",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
