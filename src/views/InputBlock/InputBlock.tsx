import { Input } from "../../components";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const InputContainer = styled(Box)`
  display: flex;
  gap: 0.5rem;
`;

type InputBlockProps = {
  textTask: string;
  deadlineTask: string;
  setTextTask: (textTask: string) => void;
  setDeadlineTask: (deadlineTask: string) => void;
};
export const InputBlock = ({
  textTask,
  deadlineTask,
  setTextTask,
  setDeadlineTask,
}: InputBlockProps) => {
  const handleInputText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextTask(event.target.value);
  };
  const handleInputDeadline = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDeadlineTask(event.target.value);
  };
  return (
    <>
      <InputContainer>
        <label htmlFor="textTaskInput">Task</label>
        <Input
          sx={{ width: "100%" }}
          id="textTaskInput"
          placeholder="Text task..."
          onChange={handleInputText}
          value={textTask}
        />
      </InputContainer>
      <InputContainer>
        <label htmlFor="deadlineTaskInput">Deadline</label>
        <Input
          type="date"
          id="deadlineTaskInput"
          onChange={handleInputDeadline}
          value={deadlineTask}
        />
      </InputContainer>
    </>
  );
};
