import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: "#272727",
      contrastText: "#999999",
    },
    success: {
      main: "#14A76C",
    },
    info: {
      main: "#FFE400",
    },
    warning: {
      main: "#FF652F",
    },
  },
  components: {
    MuiButton: {
      defaultProps: { variant: "contained" },
    },
  },
});
