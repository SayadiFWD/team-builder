import React from "react";

const Notes = (props) => {
  return (
    <div className="note-list">
      {props.state.map((note) => (
        <div className="note" key={note}>
          <h2>{note.name}</h2>
          <p>{note.email}</p>
          <p>{note.roll}</p>
        </div>
      ))}
    </div>
  );
};

export default Notes;
