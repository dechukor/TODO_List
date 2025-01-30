import Box from "@mui/material/Box";
import { AddTask, ListTask } from "../";
import { useState } from "react";

export const Main = () => {
  const [updateMain, setUpdateMain] = useState(true);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <AddTask updateMain={updateMain} setUpdateMain={setUpdateMain}></AddTask>
      <ListTask></ListTask>
    </Box>
  );
};
