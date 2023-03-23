import { styled } from "@mui/material";

export const ModalContainer = styled("div")({
  height: "100vh",
  width: "100%",
  backgroundColor: "#00000030",
  backdropFilter: "blur(10px)",
  position: "fixed",
  top: 0,
  left: 0,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999,
});

export const ModalWindow = styled("div")(({ theme }) => ({
  minWidth: "450px",
  backgroundColor: "#313131",
  padding: "20px",
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "column",
  position: "relative",
  transition: "all 0.5s 1s ease",
  gap: "20px",
  justifyContent: "flex-start",
  borderRadius: "15px",
  boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.4)",
  [theme.breakpoints.down("md")]: {
    minWidth: "300px",
  },
}));
