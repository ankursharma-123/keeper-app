import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [Notes, saveNotes] = useState([]);
  function addNotes(input) {
    saveNotes((prevValue) => {
      return [...prevValue, input];
    });
  }
  function delNotes(id) {
    saveNotes((prevValue) => {
      return prevValue.filter((item, index) => index !== id);
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNotes} />
      {Notes.map((obj, index) => {
        return (
          <Note
            key={1}
            id={index}
            title={obj.title}
            content={obj.content}
            onDel={delNotes}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
