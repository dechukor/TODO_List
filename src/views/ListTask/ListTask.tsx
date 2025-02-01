import Box from "@mui/material/Box";
import { Task } from "../Task";
import { tasks } from "../../data";
import { useState } from "react";

export const ListTask = () => {
  console.log(tasks);
  const [updateListTask, setUpdateListTask] = useState(true);

  const deleteTask = (indexForDel: number) => {
    tasks.splice(indexForDel, 1);
    setUpdateListTask(!updateListTask);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      {tasks.map((task, index) => {
        return (
          <Task
            key={task.id}
            task={task}
            indexTask={index}
            deleteTask={deleteTask}
          ></Task>
        );
      })}
    </Box>
  );
};
