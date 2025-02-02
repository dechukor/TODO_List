import Box from "@mui/material/Box";
import { Button } from "../../components";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TaskType } from "../../types";
import { InputBlock } from "../InputBlock";
import { colors } from "../../app";

const AddTaskContainer = styled(Box)`
  display: flex;
  padding: 0.5rem;
  flex-direction: column;
  // align-items: center;
  gap: 0.5rem;
  // width: 100%;
`;

const ButtonContainer = styled(Box)`
  display: flex;
  justify-content: center;
  // align-items: center;
  gap: 0.5rem;
`;

type AddTaskProps = {
  setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
};

export const AddTask = ({ setTasks }: AddTaskProps) => {
  const [formIsOpen, setFormIsOpen] = useState(false);
  const [textTask, setTextTask] = useState("");
  const [deadlineTask, setDeadlineTask] = useState("");

  const clearStates = () => {
    setTextTask("");
    setDeadlineTask("");
    setFormIsOpen(false);
  };

  const handleClickAddTask = () => {
    const newTask: TaskType = {
      id: uuidv4(),
      title: textTask,
      completed: false,
      dateCreate: new Date(),
      dateDeadline: deadlineTask ? new Date(deadlineTask) : null,
    };

    setTasks((current) => [...current, newTask]);
    clearStates();
  };

  return (
    <AddTaskContainer
      sx={formIsOpen ? { border: `3px solid ${colors.blue}` } : {}}
    >
      {formIsOpen && (
        <InputBlock
          textTask={textTask}
          deadlineTask={deadlineTask}
          setTextTask={setTextTask}
          setDeadlineTask={setDeadlineTask}
        />
      )}
      <ButtonContainer>
        {formIsOpen ? (
          <>
            <Button disabled={!textTask} onClick={handleClickAddTask}>
              Add task
            </Button>
            <Button onClick={clearStates}>Close</Button>
          </>
        ) : (
          <Button
            sx={{ color: colors.blue, borderColor: colors.blue }}
            onClick={() => setFormIsOpen(true)}
          >
            Add New task
          </Button>
        )}
      </ButtonContainer>
    </AddTaskContainer>
  );
};
