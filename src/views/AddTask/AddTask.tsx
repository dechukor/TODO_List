import Box from "@mui/material/Box";
import { Button, Input } from "../../components";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { tasks } from "../../data";
import { TaskType } from "../../types";

export const AddTaskContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  // align-items: center;
  gap: 0.5rem;
  width: 70%;
`;

export const InputContainer = styled(Box)`
  display: flex;
  gap: 0.5rem;
`;

type AddTaskProps = {
  updateMain: boolean;
  setUpdateMain: (value: boolean) => void;
};

export const AddTask = ({ updateMain, setUpdateMain }: AddTaskProps) => {
  const [formIsOpen, setFormIsOpen] = useState(false);
  const [textNewTask, setTextNewTask] = useState("");
  const [deadlineNewTask, setDeadlineNewTask] = useState("");
  const clearStates = () => {
    setTextNewTask("");
    setDeadlineNewTask("");
  };
  const handleClickAddTask = () => {
    if (formIsOpen && textNewTask) {
      const newTask: TaskType = {
        id: uuidv4(),
        title: textNewTask,
        completed: false,
        dateCreate: new Date(),
        dateDeadline: deadlineNewTask ? new Date(deadlineNewTask) : null,
      };
      tasks.push(newTask);
      clearStates();
      setUpdateMain(!updateMain);
    }
    console.log(tasks);
    setFormIsOpen(!formIsOpen);
  };
  const handleInputText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextNewTask(event.target.value);
  };
  const handleInputDeadline = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDeadlineNewTask(event.target.value);
  };
  return (
    <AddTaskContainer>
      {formIsOpen ? (
        <>
          <InputContainer>
            <label htmlFor="textTaskInput">Task</label>
            <Input
              sx={{ width: "100%" }}
              id="textTaskInput"
              placeholder="Text task..."
              onChange={handleInputText}
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="deadlineTaskInput">Deadline</label>
            <Input
              type="date"
              id="deadlineTaskInput"
              onChange={handleInputDeadline}
            />
          </InputContainer>
        </>
      ) : (
        <></>
      )}
      <Button onClick={handleClickAddTask}>
        {formIsOpen ? "Add task" : "New task"}
      </Button>
    </AddTaskContainer>
  );
};
