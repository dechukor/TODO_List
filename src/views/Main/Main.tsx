import Box from "@mui/material/Box";
import { AddTask, ListTask } from "../";

export const Main = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <AddTask></AddTask>
      <ListTask></ListTask>
    </Box>
  );
};
