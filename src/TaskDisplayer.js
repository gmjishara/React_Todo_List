import { Box, Card, Grid } from "@mui/material";
import React from "react";
import ListItem from "./components/ListItem";
import CardComponent from "./Common/Components/CardComponent/CardComponent";

export default function TaskDisplayer({ data, setData }) {
  return (
    <CardComponent minWidth={350} maxWidth={350} maxHeight="auto">
      <Grid container spacing={1} direction={"column"}>
        {data.map((item, index) => (
          <Grid item>
            <ListItem place={index} data={data} setData={setData}>
              {item}
            </ListItem>
          </Grid>
        ))}
      </Grid>
    </CardComponent>
  );
}
