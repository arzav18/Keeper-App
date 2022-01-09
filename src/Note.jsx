import React from "react";

function Notes() {
  return (
    <div className="note">
      <h1 contentEditable="true" spellCheck = "false"> This is a note title </h1>
      <p contentEditable="true" spellCheck = "false"> This is the note content </p>
    </div>
  );
}

export default Notes;
