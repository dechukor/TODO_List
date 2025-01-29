import Box from "@mui/material/Box";
import { Task } from "../Task";
import { tasks } from "../../data";

export const ListTask = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "20px",
        padding: "20px",
      }}
    >
      {tasks.map((task) => {
        return <Task key={task.id} task={task}></Task>;
      })}
    </Box>
  );
};
