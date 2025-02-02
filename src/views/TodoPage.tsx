import { Header, Main, Footer } from ".";
import Box from "@mui/material/Box";
import { TaskType } from "../types";

type TodoPageProps = {
  tasks: TaskType[];
  setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
};

export const TodoPage = ({ tasks, setTasks }: TodoPageProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          borderRadius: "10px",
        }}
      >
        <Header />
        <Main tasks={tasks} setTasks={setTasks} />
      </Box>
      <Footer />
    </Box>
  );
};
