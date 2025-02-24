
import React from "react";


export default function Box(props){
    const style = {backgroundColor: props.on ? "black" : "blue" }

    return <div style={style} className="box" onClick={() => props.toggle(props.id)}>box {props.id}{props.on}</div>
}