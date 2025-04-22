import "./App.css";
import Note from "./assets/Note";
import Header from "./assets/Header";
import Footer from "./assets/Footer";
import React, { useState } from "react";
import CreateArea from "./assets/CreateArea";

function App() {
    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        setNotes((prev) => {
            return [...prev, newNote];
        });
    }

    function handleSubmit(id) {
        setNotes(
            notes.filter((_, idx) => {
                return idx != id;
            })
        );
    }

    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote} />
            {notes.map((itm, idx) => {
                return (
                    <Note
                        key={idx}
                        id={idx}
                        title={itm.title}
                        content={itm.content}
                        onSub={handleSubmit}
                    />
                );
            })}
            <Footer />
        </div>
    );
}

export default App;
