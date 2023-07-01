import { Card, CardActions, CardContent, Typography } from "@mui/material";
import React from "react";
import DeleteButton from "../actions/DeleteButton";

export default function ListItem({ children, place, data, setData }) {
  const cardStyle = {
    height: 50,
    backgroundColor: "#8B9DC3",
    display: "flex",
    alignItems: "center",
    gap: 5,
    position: "relative",
  };
  return (
    <div>
      <Card sx={cardStyle}>
        <CardContent>
          <Typography>{children}</Typography>
        </CardContent>

        <CardActions style={{ position: "absolute", right: "2px" }}>
          <DeleteButton place={place} data={data} setData={setData} />
        </CardActions>
      </Card>
    </div>
  );
}
