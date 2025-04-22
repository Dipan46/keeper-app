import "./App.css";
import Header from "./assets/Header";
import Footer from "./assets/Footer";
import Note from "./assets/Note";
import notes from "./notes";

function App() {
    let year = new Date().getFullYear();
    return (
        <>
            <Header />
            {notes.map((note) => {
               return <Note title={note.title} content={note.content} />;
            })}
            <Footer year={year} />
        </>
    );
}

export default App;
