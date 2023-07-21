import React, { useState, useRef } from "react";
import { Box, TextField } from "@mui/material";
import { Button, Grid, Typography } from "@mui/material";
import CardComponent from "./Common/Components/CardComponent/CardComponent";

export default function SearchBar({ data, setData, setPop }) {
  const [value, setValue] = useState("");
  const [removeValue, setRemoveValue] = useState(null);

  const addList = () => {
    if(data.length ===0) {
      setPop(true)
    }
    setData([...data, value]);
    setRemoveValue("");
  };

  const headingStyle = {
    margin: "0 0 30px 120px",
    fontWeight: 700,
    fontSize: "25px",
  };

  return (
    <CardComponent minWidth={350} maxWidth={350} maxHeight="auto">
      <Typography style={headingStyle}>Todo List</Typography>
      <Grid container spacing={2} direction="row">
        <Grid item xs={12} sm={8} md={8} lg={8} xl={9}>
          <TextField
            id="outlined-basic"
            label="What is the task today?"
            variant="outlined"
            size="small"
            onChange={(event) => {
              setValue(event.target.value);
              setRemoveValue(event.target.value);
            }}
            style={{ width: "100%" }}
            value={removeValue}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4} xl={3}>
          <Button
            variant="contained"
            color="info"
            onClick={addList}
            style={{ width: "100%" }}
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </CardComponent>
  );
}
