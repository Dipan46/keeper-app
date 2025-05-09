function Note(props) {
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button
                onClick={() => {
                    props.onSub(props.id);
                }}
            >
                ❌
            </button>
        </div>
    );
}

export default Note;
