// import { TextField, OutlinedInput } from "@mui/material";
import { styled } from "@mui/material/styles";
import { colors } from "../../app";

export const Input = styled("input")`
  font: inherit;
  color: ${colors.lightGrey};
  box-sizing: border-box;
  background: ${colors.darkGrey};
  border: solid ${colors.lightGrey} 3px;
  border-radius: 0;
  padding: 0.5rem 0.5rem;
  height: 2rem;
  // width: auto;
  min-width: 100px;

  :focus {
    outline: none;
  }
`;
