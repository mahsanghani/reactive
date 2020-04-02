import React from "react"
import Joke from "./components/Joke.js"
import joke from "./components/JokesData.js"
import jokesData from "./components/JokesData";

function App() {
    const JokeComponents = jokesData.map((joke ) => {
        return(
            <Joke key={joke.id} question={joke.question} answer={joke.answer} />
        )
    })

    return(
        <div>
            {JokeComponents}
        </div>
    )
}

export default App
