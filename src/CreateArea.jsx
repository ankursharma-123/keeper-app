import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import { Fab } from "@material-ui/core";
import { Zoom } from "@material-ui/core";
function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [isIn, setisIn] = useState(false);
  function handleClick() {
    setisIn(true);
  }
  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {isIn && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onClick={handleClick}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isIn ? 3 : 1}
        />

        <Zoom in={isIn}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
