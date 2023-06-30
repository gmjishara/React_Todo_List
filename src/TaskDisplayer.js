import { Grid } from "@material-ui/core";
import React from "react";

export default function TaskDisplayer({ data }) {
  return (
    <div>
      <Grid container spacing={2}>
        {data.map((item) => (
          <Grid>
            <h1>{item}</h1>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
