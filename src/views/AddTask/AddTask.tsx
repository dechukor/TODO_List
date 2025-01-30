import Box from "@mui/material/Box";
import { Button, Input } from "../../components";
import { styled } from "@mui/material/styles";
import { useState } from "react";

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

export const AddTask = () => {
  const [formIsOpen, setFormIsOpen] = useState(false);
  const handleClickAddTask = () => {
    setFormIsOpen(!formIsOpen);
  };
  return (
    <AddTaskContainer>
      {formIsOpen ? (
        <>
          <InputContainer>
            <label htmlFor="textTask">Task</label>
            <Input
              sx={{ width: "100%" }}
              name="textTask"
              placeholder="Text task..."
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="deadlineTask">Deadline</label>
            <Input type="date" name="deadlineTask" />
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
