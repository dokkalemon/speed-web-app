import { Accordion, styled } from "@mui/material";

export const CategoryContainer = styled(Accordion)(({ theme }) => ({
  width: "60%",
  marginBottom: "5px",
  borderRadius: "10px !important",
  [theme.breakpoints.down("lg")]: {
    width: "100%",
  },
}));

export const Title = styled("div")({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const DetailContainer = styled("div")({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});
