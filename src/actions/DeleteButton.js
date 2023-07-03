import { Button } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";

export default function DeleteButton({ place, data, setData }) {
  const deleteItem = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setData(data.filter((element) => element !== data[place]));
        Swal.fire("Deleted!", "Your task has been deleted.", "success");
      }
    });
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
