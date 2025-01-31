import Box from "@mui/material/Box";
import { Task } from "../Task";
import { tasks } from "../../data";
import { useState } from "react";

export const ListTask = () => {
  console.log(tasks);
  const [updateListTask, setUpdateListTask] = useState(true);

  // const searchTaskById = (id: string): number => {
  //   return tasks.findIndex((task) => task.id === id);
  // };

  const deleteTask = (indexForDel: number) => {
    tasks.splice(indexForDel, 1);
    setUpdateListTask(!updateListTask);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "20px",
        padding: "20px",
        width: "100%",
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
