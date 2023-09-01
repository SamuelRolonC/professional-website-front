import React from "react";

function NewLineText(props) {
    const text = props.text.split('\\n');

    return (
        <div style={{marginTop: '1em', marginBottom: '1em'}}>
            {text.map((item, i) => (
                <p key={i} style={{margin: '0.2em 0 0 0'}}>{item}</p>
            ))}
        </div>
    );
}

export { NewLineText };