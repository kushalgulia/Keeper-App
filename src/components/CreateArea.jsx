import React, { useState } from "react";

function CreateArea(props) {
  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNewNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.addNote(newNote);
    setNewNote({ title: "", content: "" });
    event.preventDefault();
  }

  const [isClicked, setClicked] = useState(false);
  function handleClick() {
    setClicked(true);
  }
  return (
    <div>
      <form>
        {isClicked && (
          <input
            name="title"
            onChange={handleChange}
            value={newNote.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onChange={handleChange}
          onClick={handleClick}
          value={newNote.content}
          placeholder="Take a note..."
          rows={isClicked ? 3 : 1}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
