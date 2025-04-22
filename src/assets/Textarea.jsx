function Textarea(props) {
    return (
        <textarea
            name={props.name}
            placeholder={props.placeholder}
            rows={props.rows}
            value={props.value}
            onChange={props.onChange}
        />
    );
}

export default Textarea;
