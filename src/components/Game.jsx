import { useEffect, useState } from "react";
import icon_rock from "../assets/images/icon-rock.svg";
import icon_paper from "../assets/images/icon-paper.svg";
import icon_scissors from "../assets/images/icon-scissors.svg";
import icon_spock from "../assets/images/icon-spock.svg";
import icon_lizard from "../assets/images/icon-lizard.svg";

export default function Game({ mode, setScore, score }) {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");

  const choices = [
    {
      tile: "scissors",
      colors: ["hsl(39, 89%, 49%)", "hsl(40, 84%, 53%)"],
      img: icon_scissors,
    },
    {
      tile: "paper",
      colors: ["hsl(230, 89%, 62%)", "hsl(230, 89%, 65%)"],
      img: icon_paper,
    },
    {
      tile: "rock",
      colors: ["hsl(349, 71%, 52%)", "hsl(349, 70%, 56%)"],
      img: icon_rock,
    },
    {
      tile: "lizard",
      colors: ["hsl(261, 73%, 60%)", "hsl(261, 72%, 63%)"],
      img: icon_lizard,
    },
    {
      tile: "spock",
      colors: ["hsl(189, 59%, 53%)", "hsl(189, 58%, 57%)"],
      img: icon_spock,
    },
  ];

  const getRandomChoice = (options) =>
    options[Math.floor(Math.random() * options.length)];

  const determineWinner = (playerChoice, computerChoice) => {
    const rules = {
      rock: ["scissors", "lizard"],
      paper: ["rock", "spock"],
      scissors: ["paper", "lizard"],
      lizard: ["spock", "paper"],
      spock: ["scissors", "rock"],
    };

    if (playerChoice === computerChoice) {
      return "draw";
    } else if (rules[playerChoice].includes(computerChoice)) {
      return "player";
    } else {
      return "computer";
    }
  };

  useEffect(() => {
    localStorage.setItem("score", score);
  }, [score]);

  const playGame = (choice) => {
    let tiles = choices.slice(0, mode ? 5 : 3);
    const computer = getRandomChoice(tiles);
    setPlayerChoice(choice);
    setComputerChoice(computer);
    const winner = determineWinner(choice.tile, computer.tile);
    if (winner === "player") {
      setScore(score + 1);
    } else if (winner === "computer" && score > 0) {
      setScore(score - 1);
    }
    setResult(winner);
  };

  const resetGame = () => {
    setResult("");
    setPlayerChoice(null);
    setComputerChoice(null);
  };

  console.log(result);

  return (
    <div className="game">
      {result ? (
        <div className="result">
          <div
            className="tile"
            style={{
              position: "relative",
              border: `10px solid ${playerChoice.colors[0]}`,
            }}
          >
            <img src={playerChoice?.img} alt="selected" />
          </div>
          <div className="result-msg">
            {result === "draw" ? (
              <p>DRAW</p>
            ) : result === "player" ? (
              <p>YOU WIN</p>
            ) : (
              <p>YOU LOSE</p>
            )}
            <button
              className="play-again"
              onClick={resetGame}
              style={{
                color:
                  result === "draw"
                    ? "#000"
                    : result === "player"
                    ? ` ${playerChoice.colors[0]}`
                    : `${computerChoice.colors[0]}`,
              }}
            >
              PLAY AGAIN
            </button>
          </div>
          <div
            className="tile"
            style={{
              position: "relative",
              border: `10px solid ${computerChoice.colors[0]}`,
            }}
          >
            <img src={computerChoice?.img} alt="selected" />
          </div>
        </div>
      ) : (
        <div className={`choices ${mode ? "pentagon" : "triangle"}`}>
          {choices.slice(0, mode ? 5 : 3).map((choice) => (
            <button
              className="tile"
              key={choice.tile}
              onClick={() => playGame(choice)}
              style={{
                border: `10px solid ${choice.colors[0]}`,
              }}
            >
              <img src={choice.img} alt="tile" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
