import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: "#272727",
      contrastText: "#999999",
    },
  },
  components: {
    MuiButton: {
      defaultProps: { variant: "contained" },
    },
  },
});
