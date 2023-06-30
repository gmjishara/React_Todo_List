import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { Box } from "@mui/material";
import TaskDisplayer from "./TaskDisplayer";

function App() {
  const [data, setData] = useState([]);

  return (
    <Box>
      <SearchBar data={data} setData={setData} />
      <TaskDisplayer data={data}/>
    </Box>
  );
}

export default App;
