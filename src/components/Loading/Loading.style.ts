import { keyframes, styled } from "@mui/material";

export const LoadingContainer = styled("div")({
  width: "100%",
  display: "flex",
  flexDirection: "column",

  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999,
});

export const LogoContainer = styled("div")({
  position: "relative",
  height: "100px",
  width: "100px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const rotateAnimation = keyframes`
0% {
    rotate: 0deg
}

100% {
    rotate: 360deg
}
`;
export const LogoHandContainer = styled("div")({
  height: "100%",
  width: "100%",
  position: "absolute",
  display: "flex",
  top: 0,
  left: 0,
  alignItems: "center",
  justifyContent: "center",
  animation: `${rotateAnimation} 1s linear infinite`,
  rotate: "10deg",
});
