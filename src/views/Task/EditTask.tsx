import { useState } from "react";
import { Button } from "../../components";
import { TaskType } from "../../types";
import { InputBlock } from "../InputBlock";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { colors } from "../../app";

export const EditTaskContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  border: 3px solid ${colors.orange};
  padding: 0.5rem;
  // align-items: center;
  gap: 0.5rem;
  width: 100%;
`;

export const ButtonContainer = styled(Box)`
  display: flex;
  justify-content: center;
  // align-items: center;
  gap: 0.5rem;
`;

type TypeTaskEditForm = {
  task: TaskType;
  setEditMode: (editMode: boolean) => void;
};

export const TaskEditForm = ({ task, setEditMode }: TypeTaskEditForm) => {
  const [textTask, setTextTask] = useState(task.title);
  const [deadlineTask, setDeadlineTask] = useState(
    task.dateDeadline ? task.dateDeadline.toISOString().slice(0, 10) : ""
  );
  const handleClickSaveChanges = () => {
    task.title = textTask;
    task.dateDeadline = deadlineTask ? new Date(deadlineTask) : null;
    setEditMode(false);
  };
  return (
    <EditTaskContainer>
      <InputBlock
        textTask={textTask}
        deadlineTask={deadlineTask}
        setTextTask={setTextTask}
        setDeadlineTask={setDeadlineTask}
      ></InputBlock>
      <ButtonContainer>
        <Button disabled={!textTask} onClick={() => handleClickSaveChanges()}>
          Save changes
        </Button>
        <Button onClick={() => setEditMode(false)}>Close</Button>
      </ButtonContainer>
    </EditTaskContainer>
  );
};
