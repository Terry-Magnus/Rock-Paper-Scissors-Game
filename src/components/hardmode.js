import React from "react";
import { Link } from "react-router-dom"


const HardMode = ({ handleClick }) => {
    return (
        <>
            <Link to="/game" id="paper" onClick={handleClick} className="paper"></Link>
            <Link to="/game" id="scissors" onClick={handleClick} className="scissors"></Link>
            <Link to="/game" id="rock" onClick={handleClick} className="rock"></Link>
            <Link to="/game" id="lizard" onClick={handleClick} className="lizard"></Link>
            <Link to="/game" id="spock" onClick={handleClick} className="spock"></Link>
        </>
    )
}

export default HardMode