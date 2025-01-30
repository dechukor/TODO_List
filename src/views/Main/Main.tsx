import Box from "@mui/material/Box";
import { AddTask, ListTask } from "../";

export const Main = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <AddTask></AddTask>
      <ListTask></ListTask>
    </Box>
  );
};
