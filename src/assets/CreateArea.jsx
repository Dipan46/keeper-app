import { useState } from "react";

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    function handleChange(e) {
        const { name, value } = e.target;

        setNote((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onAdd(note);
    }

    return (
        <div>
            <form>
                <input
                    onChange={handleChange}
                    name="title"
                    placeholder="Title"
                />
                <textarea
                    onChange={handleChange}
                    name="content"
                    placeholder="Take a note..."
                    rows="3"
                />
                <button onClick={handleSubmit}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
