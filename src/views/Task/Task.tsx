import { useState } from "react";
import { TaskType } from "../../types";
import { TaskShow } from "./ShowTask";
import { TaskEditForm } from "./EditTask";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const TaskContainer = styled(Box)`
  display: flex;
  justify-content: center;
  min-width: 300px;
  height: auto;
`;

type TaskProps = {
  task: TaskType;
  indexTask: number;
  deleteTask: (index: number) => void;
};

export const Task = ({ task, indexTask, deleteTask }: TaskProps) => {
  const [editMode, setEditMode] = useState(false);

  return (
    <TaskContainer>
      {editMode ? (
        <TaskEditForm task={task} setEditMode={setEditMode} />
      ) : (
        <TaskShow
          task={task}
          indexTask={indexTask}
          deleteTask={deleteTask}
          setEditMode={setEditMode}
        />
      )}
    </TaskContainer>
  );
};
