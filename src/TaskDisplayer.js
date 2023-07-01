import { Grid } from "@mui/material";
import React from "react";

export default function TaskDisplayer({ data }) {
  return (
    <div>
      <Grid container spacing={2} direction={"column"}>
        {data.map((item) => (
          <Grid>
            <h1>{item}</h1>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
