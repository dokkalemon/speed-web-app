import { styled } from "@mui/material";

export const ResultsContainer = styled("div")({
  width: "100%",
  height: "100%",
  display: "flex",
  backgroundColor: "#312929",
  padding: "20px",
  boxShadow: "3px 5px 5px rgba(0, 0, 0, 0.2)",
  borderRadius: "5px",
  gap: "10px",
  color: "#fff",
});

export const Tabs = styled("div")({
  height: "100%",
  width: "20%",
  minWidth: "250px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});

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

export const Panel = styled("div")({
  height: "100px",
  width: "80%",
  borderRadius: "10px",
  backgroundColor: "#413939",
});
