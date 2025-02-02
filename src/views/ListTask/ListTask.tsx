import Box from "@mui/material/Box";
import { Task } from "../Task";
import { useState } from "react";
import { Filter } from "../Filter";
import { FilterStateType, TaskType } from "../../types";

type ListTaskProps = {
  tasks: TaskType[];
  setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
};

export const ListTask = ({ tasks, setTasks }: ListTaskProps) => {
  const [filterState, setFilterState] = useState<FilterStateType>("all");

  const deleteTask = (idForDel: string) => {
    setTasks((current) => current.filter((task) => task.id !== idForDel));
  };

  let filteredTasks = tasks;

  if (filterState === "completed") {
    filteredTasks = tasks.filter((task) => task.completed);
  } else if (filterState === "active") {
    filteredTasks = tasks.filter((task) => !task.completed);
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <Filter filterState={filterState} setFilterState={setFilterState} />
      {filteredTasks.map((task) => {
        return (
          <Task
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            setTasks={setTasks}
          ></Task>
        );
      })}
    </Box>
  );
};
