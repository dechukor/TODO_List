import Box from "@mui/material/Box";
import { Button, Checkbox } from "../../components";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { styled } from "@mui/material/styles";
import { TaskType } from "../../types";
import { colors } from "../../app";

const TaskText = styled(Box)`
  border: solid 3px;
  text-align: left;
  word-break: break-word;
  width: 100%;
  height: auto;
  padding: 0.5rem;
`;

const DateBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  white-space: nowrap;
  padding: 0.5rem;
`;

const DateText = styled(Box)`
  font-size: 0.85rem;
  // color: ;
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

type ShowTaskProps = {
  task: TaskType;
  deleteTask: (id: string) => void;
  setCompletedTask: (id: string) => void;
  setEditMode: (editMode: boolean) => void;
};

export const ShowTask = ({
  task,
  deleteTask,
  setCompletedTask,
  setEditMode,
}: ShowTaskProps) => {
  const currentDate = new Date().toISOString().slice(0, 10);
  let colorDeadline: string;
  let colorBorderTask: string;
  if (task.dateDeadline === null) {
    colorDeadline = colors.primaryText;
  } else if (Number(task.dateDeadline) === Number(new Date(currentDate))) {
    colorDeadline = colors.yellow;
  } else if (Number(task.dateDeadline) < Number(new Date(currentDate))) {
    colorDeadline = colors.red;
  } else {
    colorDeadline = colors.primaryText;
  }

  if (task.completed) {
    colorBorderTask = colors.green;
    colorDeadline = colors.primaryText;
  } else {
    colorBorderTask = colorDeadline;
  }

  return (
    <>
      <TaskBoxButton>
        <Checkbox
          checked={task.completed}
          color="success"
          onChange={() => setCompletedTask(task.id)}
        />
      </TaskBoxButton>
      <>
        <DateBox>
          <DateText>Create:</DateText>
          <DateText>
            {task.dateCreate
              ? task.dateCreate.toLocaleDateString()
              : "not defined"}
          </DateText>
          <DateLineSeparator />
          <DateText>Deadline:</DateText>
          <DateText sx={{ color: colorDeadline }}>
            {task.dateDeadline
              ? task.dateDeadline.toLocaleDateString()
              : "not defined"}
          </DateText>
        </DateBox>
        <TaskText sx={{ borderColor: colorBorderTask }}>{task.title}</TaskText>
      </>

      <TaskBoxButton>
        <Button onClick={() => setEditMode(true)}>
          <EditIcon />
        </Button>
        <Button onClick={() => deleteTask(task.id)}>
          <DeleteIcon />
        </Button>
      </TaskBoxButton>
    </>
  );
};
