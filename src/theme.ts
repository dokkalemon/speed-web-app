import {
  createTheme,
  responsiveFontSizes,
} from "@mui/material";

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: "dark",
      primary: {
        light: "#EF3E44",
        main: "#E01E23",
        dark: "#A7040A",
      },
      secondary: {
        light: "#FCC26C",
        main: "#ff9800",
        dark: "#ff3000",
      },
      grey: {
        100: "#FFFFFF",
        200: "#eeeeee",
        300: "#DFE3E8",
        400: "#C4CDD5",
        500: "#919EAB",
        600: "#637381",
        700: "#454F5B",
        800: "#121212",
        900: "#000000",
      },
    },
    typography: {
      fontFamily: "Roboto, sans-serif",
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
      h1: {
        fontSize: "67.7px",
        fontWeight: 400,
      },
      h5: {
        fontSize: "24px",
        fontWeight: 400,
      },
      body1: {
        fontSize: "16px",
        fontWeight: 400,
      },
      body2: {
        fontSize: "18px",
        fontWeight: 500,
      },
      caption: {
        fontSize: "14px",
        fontWeight: 400,
      },
      subtitle1: {
        fontSize: "25px",
        fontWeight: 500,
      },
      subtitle2: {
        fontSize: "25px",
        fontWeight: 500,
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1400,
        xl: 1800,
      },
    },
    components: {},
  })
);

export { theme };
