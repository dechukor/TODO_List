import Box from "@mui/material/Box";
import { Task } from "../";

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
      <Task></Task>
    </Box>
  );
};
