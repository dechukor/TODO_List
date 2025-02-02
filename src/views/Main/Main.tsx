import Box from "@mui/material/Box";
import { AddTask, ListTask } from "../";

import { TaskType } from "../../types";

type MainProps = {
  tasks: TaskType[];
  setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
};

export const Main = ({ tasks, setTasks }: MainProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      {/* <AddTask updateMain={updateMain} setUpdateMain={setUpdateMain}></AddTask> */}
      <AddTask setTasks={setTasks}></AddTask>
      <ListTask tasks={tasks} setTasks={setTasks}></ListTask>
    </Box>
  );
};
