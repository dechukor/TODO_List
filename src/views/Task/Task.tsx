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
  white-space: nowrap;
  padding: 0.5rem;
`;

const DateText = styled(Box)`
  font-size: 0.7rem;
`;

const DateLineSeparator = styled("hr")`
  width: 70%;
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
  deleteTask: (id: string) => void;
};

export const Task = ({ task, deleteTask }: TaskProps) => {
  const handlerCheckbox = () => {};
  return (
    <TaskContainer>
      <TaskBoxButton>
        <Checkbox
          checked={task.completed}
          color="success"
          onChange={handlerCheckbox}
        />
      </TaskBoxButton>
      <>
        <DateBox>
          <DateText>
            Create:
            <br />
            {task.dateCreate
              ? task.dateCreate.toLocaleDateString()
              : "not defined"}
          </DateText>
          <DateLineSeparator />
          <DateText>
            Deadline:
            <br />
            {task.dateDeadline
              ? task.dateDeadline.toLocaleDateString()
              : "not defined"}
          </DateText>
        </DateBox>
        <TaskText>{task.title}</TaskText>
      </>
      <TaskBoxButton>
        <Button>
          <EditIcon />
        </Button>
        <Button onClick={() => deleteTask(task.id)}>
          <DeleteIcon />
        </Button>
      </TaskBoxButton>
    </TaskContainer>
  );
};
