import { TaskType } from "../../types";
import { ShowTask } from "./ShowTask";
import { TaskEditForm } from "./EditTask";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";

const TaskContainer = styled(Box)`
  display: flex;
  justify-content: center;
  min-width: 300px;
  height: auto;
`;

type TaskProps = {
  task: TaskType;
  deleteTask: (id: string) => void;
  setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
};

export const Task = ({ task, deleteTask, setTasks }: TaskProps) => {
  const [editMode, setEditMode] = useState(false);

  const setCompletedTask = (id: string) => {
    setTasks((current) =>
      current.map((obj) => {
        if (obj.id === id) {
          obj.completed = !obj.completed;
        }
        return obj;
      })
    );
  };

  const saveEditTask = (id: string, textTask: string, deadlineTask: string) => {
    setTasks((current) =>
      current.map((obj) => {
        if (obj.id === id) {
          obj.title = textTask;
          obj.dateDeadline = deadlineTask ? new Date(deadlineTask) : null;
        }
        return obj;
      })
    );
  };

  return (
    <TaskContainer>
      {editMode ? (
        <TaskEditForm
          task={task}
          setEditMode={setEditMode}
          saveEditTask={saveEditTask}
        />
      ) : (
        <ShowTask
          task={task}
          deleteTask={deleteTask}
          setCompletedTask={setCompletedTask}
          setEditMode={setEditMode}
        />
      )}
    </TaskContainer>
  );
};
