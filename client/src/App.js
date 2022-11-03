import { useRef, useState } from "react";

function App() {
  const [notesInput, setNotesInput] = useState("");
  const [notes, setNotes] = useState([
    {
      id: "1",
      userId: "23",
      content:
        "The starting goal isn't to be living the life of your dreams, it's to avoid the one from your nightmares.",
      date: Date("2021-03-25"),
    },
    {
      id: "2",
      userId: "23",
      content:
        "The starting goal isn't to be living the life of your dreams, it's to avoid the one from your nightmares.",
    },
  ]);

  const createNewNote = () => {
    setNotes([...notes, { id: "3", userId: "23", content: notesInput }]);
  };

  return (
    <div className="App">
      <div className="new-goal-input">
        <input
          onChange={(e) => {
            setNotesInput(e.target.value);
          }}
          type="text"
        />
        <button onClick={createNewNote}>Add</button>
      </div>
      {notes.map(({ id, content }) => (
        <p key={id}>{content}</p>
      ))}
    </div>
  );
}

export default App;
