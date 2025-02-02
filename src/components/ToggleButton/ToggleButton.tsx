import { ToggleButton as ToggleButtonMUI } from "@mui/material";
import { styled } from "@mui/material/styles";
import { colors } from "../../app/theme";

export const ToggleButton = styled(ToggleButtonMUI)({
  font: "inherit",
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  border: `solid ${colors.lightGrey} 3px`,
  borderRadius: "0",
  height: "2rem",
  padding: "0.5rem",
  minWidth: "auto",
  boxShadow: "none",
  backgroundColor: colors.darkGrey,
  color: colors.lightGrey,
  "&:hover": {
    backgroundColor: colors.darkGrey,
  },
  "&.Mui-selected, &.Mui-selected:hover": {
    color: "white",
    border: `groove white 3px`,
    backgroundColor: colors.darkGrey,
  },
});
