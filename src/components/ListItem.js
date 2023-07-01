import { Card, CardActions, CardContent } from "@mui/material";
import React from "react";

export default function ListItem({ children }) {
  const cardStyle = {
    height: 40,
    backgroundColor: "#8B9DC3",
    display:"flex",
    alignItems: "center",
  };
  return (
    <div>
      <Card sx={cardStyle}>
        <CardContent>{children}</CardContent>

        <CardActions></CardActions>
      </Card>
    </div>
  );
}
