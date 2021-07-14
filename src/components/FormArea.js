import { Fab, Paper, TextField } from "@material-ui/core";
import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";

function FormArea({ addNote }) {
  const [note, setnote] = useState({
    title: "",
    content: "",
  });
  function changeHandler(event) {
    //console.log(event.target);
    const { name, value } = event.target;
    setnote((preValues) => {
      return {
        ...preValues,
        [name]: value,
      };
    });
    console.log(note);
  }
  function clickHandler() {
    addNote(note);
    setnote({ title: "", content: "" });
  }
  return (
    <Paper style={{ margin: "10px 10px", padding: "25px 50px" }}>
      <form>
        <TextField
          onChange={changeHandler}
          name="title"
          value={note.title}
          label="Title"
          fullWidth
          autoComplete="off"
        />
        <TextField
          onChange={changeHandler}
          name="content"
          value={note.content}
          label="Content"
          multiline
          rows={4}
          fullWidth
          autoComplete="off"
        />
        <Fab onClick={clickHandler} style={{ margin: "20px" }}>
          <AddIcon />
        </Fab>
      </form>
    </Paper>
  );
}

export default FormArea;
