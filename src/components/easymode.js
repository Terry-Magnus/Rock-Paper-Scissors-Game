import React from "react";
import { Link } from "react-router-dom"


const EasyMode = ({ handleClick }) => {
    return (
        <>
            <Link to="/game" id="paper" onClick={handleClick} className="paper"></Link>
            <Link to="/game" id="scissors" onClick={handleClick} className="scissors"></Link>
            <Link to="/game" id="rock" onClick={handleClick} className="rock"></Link>
        </>
    )
}

export default EasyMode