import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import { Button, Input } from "../../components";

export const AddTask = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", background: "cyan" }}>
      <Input />
      <Button>Add task</Button>
    </Box>
  );
};
