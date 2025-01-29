import Box from "@mui/material/Box";
import { Button, Checkbox } from "../../components";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { styled } from "@mui/material/styles";
import { TaskType } from "../../types";

const TaskContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  min-width: 300px;
  height: auto;
  padding: 0.5rem;
`;

const TaskText = styled(Box)`
  border: solid #999999 3px;
  text-align: left;
  width: 100%;
  height: auto;
  padding: 0.5rem;
`;

const DateBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
`;

const DataText = styled(Box)`
  font-size: 0.7rem;
`;

const TaskBoxButton = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  padding: 0.5rem;
`;

type TaskProps = {
  task: TaskType;
};

export const Task = ({ task }: TaskProps) => {
  return (
    <TaskContainer>
      <TaskBoxButton>
        <Checkbox checked={task.completed} color="success" />
      </TaskBoxButton>
      <>
        <DateBox>
          <DataText>Create: 23.01.2025</DataText>
          <DataText>Deadline: 30.01.2025</DataText>
        </DateBox>
        <TaskText>{task.title}</TaskText>
      </>
      <TaskBoxButton>
        <Button>
          <EditIcon />
        </Button>
        <Button>
          <DeleteIcon />
        </Button>
      </TaskBoxButton>
    </TaskContainer>
  );
};
