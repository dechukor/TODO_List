import Box from "@mui/material/Box";
import { Button, Checkbox } from "../../components";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { styled } from "@mui/material/styles";
import { TaskType } from "../../types";
import { useState } from "react";
import { colors } from "../../app";

const TaskContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  min-width: 300px;
  height: auto;
  padding: 0.5rem;
`;

const TaskText = styled(Box)`
  border: solid 3px;
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

type TaskProps = {
  task: TaskType;
  indexTask: number;
  deleteTask: (index: number) => void;
};

export const Task = ({ task, indexTask, deleteTask }: TaskProps) => {
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

  const [updateTask, setUpdateTask] = useState(true);
  const handlerCheckbox = () => {
    task.completed = !task.completed;
    setUpdateTask(!updateTask);
  };
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
        <Button>
          <EditIcon />
        </Button>
        <Button onClick={() => deleteTask(indexTask)}>
          <DeleteIcon />
        </Button>
      </TaskBoxButton>
    </TaskContainer>
  );
};
