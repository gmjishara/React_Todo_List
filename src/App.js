import "./App.css";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { Box, Card, Typography } from "@mui/material";
import TaskDisplayer from "./TaskDisplayer";
import CardComponent from "./Common/Components/CardComponent/CardComponent";

function App() {
  const [data, setData] = useState([]);

  const mainStyle = {
    wdith: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "25px",
    paddingTop: "50px",
  };

  return (
    <Box sx={{ backgroundColor: "#3b5998" }}>
      <Box style={mainStyle}>
        <SearchBar data={data} setData={setData} />
        <TaskDisplayer data={data} setData={setData} />
      </Box>
    </Box>
  );
}

export default App;
