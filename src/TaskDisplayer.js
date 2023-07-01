import { Box, Grid } from "@mui/material";
import React from "react";
import ListItem from "./components/ListItem";

export default function TaskDisplayer({ data }) {
  
  
  return (
    <Box mt={6} >
      <Grid container spacing={1} direction={"column"}>
        {data.map((item) => (
          <Grid item>
            <ListItem>{item}</ListItem>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
