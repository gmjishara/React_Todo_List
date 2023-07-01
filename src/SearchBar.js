import React, { useState } from "react";
import { Box, TextField } from "@mui/material";
import { Button, Grid } from "@mui/material";

export default function SearchBar({ data, setData }) {
  const [value, setValue] = useState("");

  const addList = () => {
    setData([...data, value]);
  };

  // const searchStyle = {
  //   position: "absolute",
  //   top: "28px",
  //   left: "20px",
  // };

  return (
    <Box>
      <Grid container spacing={2} direction="row">
        <Grid item xs={12} sm={8} md={8} lg={8} xl={9}>
          <TextField
            id="outlined-basic"
            label="What is the task today?"
            variant="outlined"
            size="small"
            onChange={(event) => setValue(event.target.value)}
            style={{ width: "100%" }}
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
    </Box>
  );
}
