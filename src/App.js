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
    gap:'25px',
    paddingTop:"50px"
  };

  const headingStyle = {
    margin: "0 0 30px 120px",
    fontWeight: 700,
    fontSize: "25px",
  };

  return (
    <Box sx={{backgroundColor: "#3b5998"}}>
      <Box style={mainStyle}>
        <CardComponent minWidth={350} maxWidth={350} maxHeight="auto">
          <Typography style={headingStyle}>Todo List</Typography>
          <SearchBar data={data} setData={setData} />
        </CardComponent>
        <CardComponent minWidth={350} maxWidth={350} maxHeight="auto">
          <TaskDisplayer data={data} setData={setData} />
        </CardComponent>
      </Box>
    </Box>
  );
}

export default App;
