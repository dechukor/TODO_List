import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { tasksData } from "../data.ts";
import { theme } from "./theme.ts";
import { TodoPage } from "../views";
import { useEffect, useState } from "react";
import { TaskType } from "../types/types.ts";

export const App = () => {
  const [tasks, setTasks] = useState<TaskType[]>(
    JSON.parse(localStorage.getItem("todoList")!)
      ? JSON.parse(localStorage.getItem("todoList")!).map((task: TaskType) => {
          task.dateCreate = task.dateCreate ? new Date(task.dateCreate) : null;
          task.dateDeadline = task.dateDeadline
            ? new Date(task.dateDeadline)
            : null;
          return task;
        })
      : tasksData
  );

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <ThemeProvider theme={theme}>
      <TodoPage tasks={tasks} setTasks={setTasks} />
    </ThemeProvider>
  );
};
