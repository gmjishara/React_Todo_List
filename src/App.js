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
          minWidth: 350,
          minHeight: 150,
          borderRadius: "8px",
          position: "relative",
          padding:"28px 20px"
        }}
      >
        <SearchBar data={data} setData={setData} />
        <TaskDisplayer data={data} />
      </Card>
    </Box>
  );
}

export default App;
