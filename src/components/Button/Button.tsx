import { Button as ButtonMUI } from "@mui/material";
import { styled } from "@mui/material/styles";
import { colors } from "../../app/theme";

export const Button = styled(ButtonMUI)`
  font: inherit;
  white-space: nowrap;
  box-sizing: border-box;
  border: solid ${colors.lightGrey} 3px;
  border-radius: 0;
  height: 2rem;
  padding: 0.5rem 0.5rem;
  min-width: auto;
  box-shadow: none;
`;
