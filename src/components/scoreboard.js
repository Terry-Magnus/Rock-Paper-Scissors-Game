import React, { useState, useEffect } from "react";
import logo from "../images/logo.svg"


const ScoreBoard = ({ score }) => {
    return (
        <div className="scoreboard">
            <img src={logo} alt="logo-easy" />
            <span className="scorecard">Score<br />
                <span className="score">
                    {score}
                </span>
            </span>
        </div>
    )
}

export default ScoreBoard