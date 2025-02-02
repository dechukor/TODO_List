import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { tasksData } from "../data.ts";
import { theme } from "./theme.ts";
import { TodoPage } from "../views";
import { useState } from "react";
import { TaskType } from "../types/types.ts";

export const App = () => {
  const [tasks, setTasks] = useState<TaskType[]>(tasksData);

  console.log("Render - ", tasks);

  return (
    <ThemeProvider theme={theme}>
      <TodoPage tasks={tasks} setTasks={setTasks} />
    </ThemeProvider>
  );
};
