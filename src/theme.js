import { createTheme } from "@mui/material";

 const theme = createTheme({
  palette: {
    primary: {
      main: "#1760a5",
      light: "skyblue",
    },
    secondary: {
      main: "#15c630",
    },
    otherColor: {
      main: "#999",
    },
  },

  typography: {
    fontFamily: [
      "Nunito",
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "sans-serif",
    ].join(","),
  },

  breakpoints: {
    values: {
      xs: 0,
      // sm: 600,
      sm : 1060, // temporary solution
      md: 900,
      // smmd:1060,
      lg: 1200,
      xl: 1536,
    },
  },

});

export default theme;

