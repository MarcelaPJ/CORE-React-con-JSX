import React from "react";

const HelloDojo = (props) => {
    return (
    <h1>Hello {props.name}</h1>
    ) 
}

const Lista = () => {
    return (
        <>
        <h3>Things I need to do:</h3>
            <ul>
                <li>Learn React</li>
                <li>Clim Mt. Everest</li>
                <li>Run a marathon</li>
                <li>Feed the dogs</li>
            </ul>
        </>
    )
}

export {HelloDojo, Lista}