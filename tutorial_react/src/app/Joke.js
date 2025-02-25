import React from "react";


export default function Joke(props) {
    return (
        <div>
            {props.question}  <button onClick={() => props.toggle(props.id)}>Show</button><p></p>
            {props.isShown && props.answer}
            
            <hr></hr>
        </div>
    )
}