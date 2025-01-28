import Box from "@mui/material/Box";
import { Button } from "../../components";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export const Task = () => {
  return (
    <Box
      sx={{
        width: "30%",
        minWidth: "300px",
        height: "auto",
        padding: "10px",
        background: "grey",
      }}
    >
      <h3>One task</h3>
      <Button>text</Button>
      <Button>
        <EditIcon />
      </Button>
      <Button>
        <DeleteIcon />
      </Button>
    </Box>
  );
};
