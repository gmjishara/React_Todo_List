import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { Box } from "@mui/material";
import TaskDisplayer from "./TaskDisplayer";

function App() {
  const [data, setData] = useState([]);

  const mainStyle = {
    wdith:"100%",
    height:"100vh",
    display:"flex",
    flexDirection:"column",
    alignItems: "center",
    justifyContent: "center",
  }

  return (
    <Box style={mainStyle}>
      <SearchBar data={data} setData={setData} />
      <TaskDisplayer data={data}/>
    </Box>
  );
}

export default App;
