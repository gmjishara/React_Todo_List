import { Button } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

export default function DeleteButton({ place, data, setData }) {
  const deleteItem = () => {
    setData(data.filter((element) => element !== data[place]));
  };
  return (
    <div>
      <Button
        variant="contained"
        color="error"
        width="200px"
        style={{ minWidth: "10px", padding: "6px 8px" }}
        onClick={deleteItem}
      >
        <DeleteIcon />
      </Button>
    </div>
  );
}
