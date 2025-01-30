// import { TextField, OutlinedInput } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Input = styled("input")`
  font: inherit;
  color: #999999;
  box-sizing: border-box;
  background: #272727;
  border: solid #999999 3px;
  border-radius: 0;
  padding: 0.5rem 0.5rem;
  height: 2rem;
  // width: auto;
  min-width: 100px;

  :focus {
    outline: none;
  }
`;
