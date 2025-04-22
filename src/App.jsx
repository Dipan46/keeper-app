import "./App.css";
import { useState } from "react";
import Note from "./assets/Note";
import Header from "./assets/Header";
import Footer from "./assets/Footer";
import CreateArea from "./assets/CreateArea";

function App() {
    const year = new Date().getFullYear();

    const [note, setNote] = useState({
        title: "",
        note: "",
    });

    const [notesList, setNotesList] = useState([]);

    function handleChange(e) {
        const { name, value } = e.target;
        setNote((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (note.title || note.note) {
            setNotesList((prev) => [...prev, note]);
            setNote({ title: "", note: "" });
        }
    }

    function handleDelete(id) {
        setNotesList((prev) => {
            return prev.filter((value, index) => {
                return index != id;
            })
        });
    }

    return (
        <div>
            <Header />
            <CreateArea
                note={note}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
            {notesList.map((value, index) => (
                <Note
                    key={index}
                    id={index}
                    title={value.title}
                    content={value.note}
                    onDelete={handleDelete}
                />
            ))}
            <Footer year={year} />
        </div>
    );
}

export default App;
