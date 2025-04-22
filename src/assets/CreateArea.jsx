// CreateArea.jsx
import React from "react";
import Input from "./Input";
import Textarea from "./Textarea";

function CreateArea(props) {
    return (
        <div>
            <form onSubmit={props.onSubmit}>
                <Input
                    name="title"
                    placeholder="Title"
                    value={props.note.title}
                    onChange={props.onChange}
                />
                <Textarea
                    name="note"
                    placeholder="Take a note..."
                    rows="3"
                    value={props.note.note}
                    onChange={props.onChange}
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
