import { Card, CardActions, CardContent, Typography } from "@mui/material";
import React from "react";
import DeleteButton from "../actions/DeleteButton";

export default function ListItem({ children, place, data, setData }) {
  const cardStyle = {
    maxWidth: 350,
    height: 50,
    backgroundColor: "#8B9DC3",
    display: "flex",
    alignItems: "center",
    position: "relative",
  };

  return (
    <div>
      <Card sx={cardStyle}>
        <CardContent
          style={{
            maxWidth: "275px",
            overflowWrap:"break-word"
          }}
        >
          {children}
        </CardContent>

        <CardActions style={{ position: "absolute", right: "2px" }}>
          <DeleteButton place={place} data={data} setData={setData}  />
        </CardActions>
      </Card>
    </div>
  );
}
