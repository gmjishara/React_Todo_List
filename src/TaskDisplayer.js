import { Box, Grid } from "@mui/material";
import React from "react";
import ListItem from "./components/ListItem";

export default function TaskDisplayer({ data, setData }) {
  return (
    <Box mt={6}>
      <Grid container spacing={1} direction={"column"}>
        {data.map((item, index) => (
          <Grid item>
            <ListItem place={index} data={data} setData={setData}>
              {item}
            </ListItem>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
