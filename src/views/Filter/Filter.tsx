import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { ToggleButton } from "../../components";
import { FilterStateType, TaskType } from "../../types";

const FilterContainer = styled(Box)`
  display: flex;
  justify-content: center;
  // border: 3px solid white;
  padding: 0.5rem;
  gap: 0.5rem;
  width: 100%;
`;

type FilterProps = {
  tasks: TaskType[];
  filterState: FilterStateType;
  setFilterState: (filterState: FilterStateType) => void;
};

export const Filter = ({ tasks, filterState, setFilterState }: FilterProps) => {
  const countsTasks = {
    all: tasks.length,
    active: tasks.filter((task) => !task.completed).length,
    completed: tasks.filter((task) => task.completed).length,
  };

  return (
    <FilterContainer>
      <ToggleButtonGroup exclusive>
        <ToggleButton
          selected={filterState === "all"}
          value="all"
          onChange={() => setFilterState("all")}
        >
          Show all tasks ({countsTasks.all})
        </ToggleButton>
        <ToggleButton
          selected={filterState === "active"}
          value="active"
          onChange={() => setFilterState("active")}
        >
          Show active tasks ({countsTasks.active})
        </ToggleButton>
        <ToggleButton
          selected={filterState === "completed"}
          value="completed"
          onChange={() => setFilterState("completed")}
        >
          Show completed tasks ({countsTasks.completed})
        </ToggleButton>
      </ToggleButtonGroup>
    </FilterContainer>
  );
};
