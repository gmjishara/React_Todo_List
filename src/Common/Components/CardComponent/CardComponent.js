import React, { Children } from "react";
import { Card } from "@mui/material";

export default function CardComponent({
  children,
  data,
  minWidth,
  maxWidth,
  maxHeight,
}) {
  return (
    <div>
      <Card
      disableEnforceFocus
        sx={{
          minWidth: { minWidth },
          maxWidth: { maxWidth },
          maxHeight: { maxHeight },
          borderRadius: "8px",
          padding: "25px",
        //   overflowY: data.length > 7 ? "scroll" : "hidden",
        }}
      >
        {children}
      </Card>
    </div>
  );
}
