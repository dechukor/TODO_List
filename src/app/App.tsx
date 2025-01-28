import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme.ts";
import { TodoPage } from "../views";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <TodoPage />
    </ThemeProvider>
  );
};
