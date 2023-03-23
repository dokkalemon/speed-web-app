import { styled, Theme } from "@mui/material";

export const ResultsContainer = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  backgroundColor: "#312929",
  position: "relative",
  overflow: "hidden",
  padding: "20px",
  boxShadow: "3px 5px 5px rgba(0, 0, 0, 0.2)",
  borderRadius: "15px",
  gap: "10px",
  color: "#fff",
  [theme.breakpoints.down("lg")]: {
    paddingTop: "80px",
  },
}));

export const Tabs = styled("div")(({ theme, active }: { theme?: Theme; active: boolean }) => ({
  height: "100%",
  width: "20%",
  minWidth: "250px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  [`@media (max-width: ${theme?.breakpoints.values.lg}px)`]: {
    position: "fixed",
    top: 0,
    height: "100vh !important",
    left: active ? 0 : "-100%",
    width: "100%",
    backgroundColor: "#312929",
    padding: "80px 20px",
    zIndex: 999,
    transition: "all 0.2s ease",
  },
}));

export const Tab = styled("div")(({ active }: { active: boolean }) => ({
  width: "100%",
  height: "50px",
  overflow: "hidden",
  backgroundColor: active ? "#413939" : "transparent",
  borderRadius: "10px",
  border: !active ? "1px solid rgba(255, 255, 255, 0.1)" : "none",
  cursor: "pointer",
  color: "white",
  padding: "20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  transition: "all 0.2s ease",
  "&:hover": {
    backgroundColor: !active ? "rgba(0, 0, 0, 0.1)" : "auto",
  },
  "&:active": {
    backgroundColor: !active ? "rgba(0, 0, 0, 0.2)" : "auto",
    scale: !active ? "0.95" : 1,
  },
}));

export const Panel = styled("div")(({ theme }) => ({
  width: "80%",
  borderRadius: "10px",
  padding: "20px",
  backgroundColor: "#413939",
  [theme.breakpoints.down("lg")]: {
    width: "100%",
  },
}));

export const DrawerButtonContainer = styled("div")(({ theme }) => ({
  position: "absolute",
  top: 20,
  right: 20,
  display: "none",
  [theme.breakpoints.down("lg")]: {
    display: "block",
  },
}));
