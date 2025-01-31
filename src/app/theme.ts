import { createTheme } from "@mui/material/styles";
import { ColorsType } from "../types";

export const colors: ColorsType = {
  darkGrey: "#272727",
  lightGrey: "#747474",
  green: "#14A76C",
  yellow: "#FFE400",
  orange: "#FF652F",
  red: "#F90B3F",
};

export const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: colors.darkGrey,
      contrastText: colors.lightGrey,
    },
    success: {
      main: colors.green,
    },
    info: {
      main: colors.yellow,
    },
    warning: {
      main: colors.red,
    },
  },
  components: {
    MuiButton: {
      defaultProps: { variant: "contained" },
    },
  },
});
