import "./App.css";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { Box, Card, Typography } from "@mui/material";
import TaskDisplayer from "./TaskDisplayer";

function App() {
  const [data, setData] = useState([]);

  const mainStyle = {
    wdith: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#3b5998",
  };

  const headingStyle = {
    margin: "0 0 30px 120px",
    fontWeight: 700,
    fontSize: "25px",
  };

  return (
    <Box style={mainStyle}>
      <Card
        sx={{
          minWidth: 350,
          maxWidth: 350,
          maxHeight: 500,
          borderRadius: "8px",
          marginTop: "50px",
          padding: data.length > 0 ? "28px 20px" : "28px 20px 0 20px",
          overflowY: data.length > 7 ? "scroll" : "hidden",
        }}
      >
        <Typography style={headingStyle}>Todo List</Typography>
        <SearchBar data={data} setData={setData} />

        <TaskDisplayer data={data} setData={setData} />
      </Card>
    </Box>
  );
}

export default App;
