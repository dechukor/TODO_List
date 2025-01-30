import Box from "@mui/material/Box";
import { Task } from "../Task";
import { tasks } from "../../data";
import { useState } from "react";

export const ListTask = () => {
  const [updateListTask, setUpdateListTask] = useState(true);

  const deleteTask = (idForDel: string) => {
    tasks.forEach((task, index) => {
      if (task.id === idForDel) {
        tasks.splice(index, 1);
        return;
      }
    });
    setUpdateListTask(!updateListTask);
    console.log(tasks);
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
      {tasks.map((task) => {
        return <Task key={task.id} task={task} deleteTask={deleteTask}></Task>;
      })}
    </Box>
  );
};
