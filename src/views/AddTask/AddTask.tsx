import Box from "@mui/material/Box";
import { Button, Input } from "../../components";

export const AddTask = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", gap: "0.5rem" }}>
      <Input />
      <Button>Add task</Button>
    </Box>
  );
};
