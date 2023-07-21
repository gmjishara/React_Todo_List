import { Box, Card, Grid, Typography } from "@mui/material";
import React from "react";
import ListItem from "./components/ListItem";
import CardComponent from "./Common/Components/CardComponent/CardComponent";

export default function TaskDisplayer({ data, setData }) {
  const headingStyle = {
    textAlign: "center",
    fontWeight: 500,
    fontSize: "23px",
  };

  const gridStyles = {
    display: "flex",
    flexDirection: "column",
    gap: 5,
  };
  return (
    <CardComponent minWidth={350} maxWidth={350} maxHeight="auto">
      {data.length === 0 ? (
        <Typography style={headingStyle}>No Data</Typography>
      ) : (
        <Grid container spacing={1} direction={"column"} style={gridStyles}>
          {data.map((item, index) => (
            <Grid item>
              <ListItem place={index} data={data} setData={setData}>
                {item}
              </ListItem>
            </Grid>
          ))}
        </Grid>
      )}
    </CardComponent>
  );
}
