import Box from "@mui/material/Box";
import { AddTask, ListTask } from "../";

export const Main = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", background: "blue" }}>
      <AddTask></AddTask>
      <ListTask></ListTask>
    </Box>
  );
};
