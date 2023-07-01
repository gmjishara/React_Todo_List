import "./App.css";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { Box, Card } from "@mui/material";
import TaskDisplayer from "./TaskDisplayer";

function App() {
  const [data, setData] = useState([]);

  const mainStyle = {
    wdith: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3b5998",
  };

  return (
    <Box style={mainStyle}>
      <Card
        sx={{
          minWidth:350,
          maxWidth: 350,
          maxHeight: 500,
          borderRadius: "8px",
          padding: "28px 20px ",
          overflowY: "scroll",
          overflowWrap: "break-word"
        }}
      >
        <SearchBar data={data} setData={setData} />
        <TaskDisplayer data={data} setData={setData} />
      </Card>
    </Box>
  );
}

export default App;
