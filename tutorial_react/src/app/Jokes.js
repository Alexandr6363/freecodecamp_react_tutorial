import React from "react";
import listOfJokes from "./data/data_jokes"
import Joke from "./Joke";

export default function Jokes() {
    const [joke, setJokes] = React.useState(listOfJokes)
    
    function toggle(id){
        setJokes(prevArray => {
            return prevArray.map(joke =>{
                return joke.id === id ? {...joke, isShown:!joke.isShown} : joke
            })
        })
    }

    const joke_render = joke.map(joke => {
        return (<Joke 
            key={joke.id}
            id={joke.id}
            question={joke.question}
            answer={joke.answer}
            isShown={joke.isShown}
            toggle={toggle}
        />)
                 
                
    })
    return (
        <div>
                {joke_render}
        </div>
    )
}