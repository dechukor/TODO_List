import { Header, Main, Footer } from ".";
import Box from "@mui/material/Box";

export const TodoPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "green",
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          background: "red",
          border: "solid black 1px",
          borderRadius: "10px",
          // height: "100%",
        }}
      >
        <Header />
        <Main />
      </Box>
      <Footer />
    </Box>
  );
};
