import React from "react";
import EasyMode from "./easymode";
import HardMode from "./hardmode";
import background from "../images/bg-triangle.svg"
import backgroundAlt from "../images/bg-pentagon.svg"

const Arena = ({ mode, setChoice }) => {
    const tiles = ["paper", "rock", "scissors"]
    const bonusTiles = tiles.concat(["spock", "lizard"])
    const backgroundStyle = {
        backgroundImage:
            mode ? `url(${background})` : `url(${backgroundAlt})`
    }

    const handleClick = (e) => {
        setChoice({
            player: e.target.id,
            house: tiles[Math.floor(Math.random() * tiles.length)],
            bonus: bonusTiles[Math.floor(Math.random() * bonusTiles.length)]
        })
    }
    // check the player and house values and determine end result



    // display buttons with each having the handleClick function
    return (
        <div className={mode ? "arena" : "bonus"} style={backgroundStyle}>
            {mode ? <EasyMode handleClick={handleClick} /> : <HardMode handleClick={handleClick} />}
        </div>
    )
}

export default Arena