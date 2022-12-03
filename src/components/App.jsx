import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  function handleAdd(newNote) {
    setNotes((prevValue) => {
      return [...prevValue, newNote];
    });
  }
  function handleDelete(itemIndex) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== itemIndex;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea addNote={handleAdd} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            index={index}
            title={note.title}
            content={note.content}
            deleteNote={handleDelete}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
