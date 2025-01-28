import Box from "@mui/material/Box";
import { Task } from "../";

// const result: JSX.Element[] = [];
// for (let i = 0; i < 3; i++) {
//   result.push(<Task></Task>);
// }

export const ListTask = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "20px",
        background: "pink",
        padding: "20px",
      }}
    >
      <Task></Task>
      {/* {result} */}
    </Box>
  );
};
