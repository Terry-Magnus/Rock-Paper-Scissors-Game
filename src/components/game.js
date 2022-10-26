import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import '../app.scss'

const Game = ({ choice, score, setScore }) => {
    const [counter, setCounter] = useState(3)
    const [result, setResult] = useState("")
    let player = choice.player
    let house = choice.house
    // - Scissors beats Paper
    // - Scissors beats Lizard
    // - Paper beats Rock
    // - Paper beats Spock
    // - Rock beats Lizard
    // - Rock beats Scissors
    // - Lizard beats Spock   
    // - Lizard beats Paper
    // - Spock beats Scissors
    // - Spock beats Rock
    const checkResults = () => {
        if ((player === "paper" && house === "rock") || // paper wins
            (player === "paper" && house === "spock")) {
            setResult("win")
            setScore(score + 1)
        } else if ((player === "paper" && house === "scissors") || // paper loses
            (player === "paper" && house === "lizard")) {
            setResult("lose")
            setScore(score - 1)
        } else if ((player === "scissors" && house === "paper") || // scissors wins
            (player === "scissors" && house === "lizard")) {
            setResult("win")
            setScore(score + 1)
        } else if ((player === "scissors" && house === "rock") || // scissors loses
            (player === "scissors" && house === "spock")) {
            setResult("lose")
            setScore(score - 1)
        } else if ((player === "rock" && house === "scissors") || // rock wins
            (player === "rock" && house === "lizard")) {
            setResult("win")
            setScore(score + 1)
        } else if ((player === "rock" && house === "paper") || // rock loses
            (player === "rock" && house === "spock")) {
            setResult("lose")
            setScore(score - 1)
        } else if ((player === "lizard" && house === "spock") || // lizard wins
            (player === "lizard" && house === "paper")) {
            setResult("win")
            setScore(score + 1)
        } else if ((player === "lizard" && house === "rock") || // lizard loses
            (player === "lizard" && house === "scissors")) {
            setResult("lose")
            setScore(score - 1)
        } else if ((player === "spock" && house === "scissors") || // spock wins
            (player === "spock" && house === "rock")) {
            setResult("win")
            setScore(score + 1)
        } else if ((player === "spock" && house === "lizard") || // spock loses
            (player === "spock" && house === "paper")) {
            setResult("lose")
            setScore(score - 1)
        }
        else {
            setResult("draw")
        }
    }
    useEffect(() => {
        const timer =
            counter > 0
                ? setInterval(() => {
                    setCounter(counter - 1);
                }, 1000)
                : checkResults();

        return () => {
            clearInterval(timer);
        };
    }, [counter]);
    return (<>
        <div className="game">
            <div className="button">
                <p>YOU PICKED</p>
                <button id={player} className={player}></button>
            </div>

            {result && <div className="play-again">
                {result === "win" ? <h1>You Win</h1> : result === "lose" ?
                    <h1>You Lose</h1> : result === "" ? "" : <h1>Draw</h1>}
                {counter === 0 && <Link to="/" onClick={() => { setCounter(3) }}>Play Again</Link>}
            </div>
            }
            <div className="button">
                <p>THE HOUSE PICKED</p>
                {counter === 0 ?
                    <button id={house} className={house}>
                    </button>
                    : <button className="empty"></button>
                }
            </div>
        </div >
    </>
    )
}

export default Game