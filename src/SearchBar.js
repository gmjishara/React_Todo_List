import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button, Grid } from "@material-ui/core";

export default function SearchBar({data,setData}) {
  const [value, setValue] = useState("");

  const addList = ()=>{
    setData([...data,value])
  }

  return (
    <div>
      <Grid container spacing={2} direction="row">
        <Grid item>
          <TextField
            id="outlined-basic"
            label="What is the task today?"
            variant="outlined"
            onChange={(event) => setValue(event.target.value)}
          />
        </Grid>
        <Grid item>
          <Button variant="outlined" color="info" onClick={addList}>
            Add
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
