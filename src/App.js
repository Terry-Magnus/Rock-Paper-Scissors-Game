import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom"
import Arena from './components/arena';
import Game from './components/game';
import ScoreBoard from './components/scoreboard';
import Modal from './components/modal';
import HardMode from './components/hardmode';
import './app.scss'


const App = () => {
    const [mode, setMode] = useState(true)
    const [choice, setChoice] = useState({
        player: "",
        house: "",
        bonus: ""
    })
    const changeMode = () => {
        setMode(prevMode => (!prevMode))
    }
    const [score, setScore] = useState(0)
    const [modalOpen, setModalOpen] = useState(false)

    return (
        <div className="app">
            <ScoreBoard score={score} />
            <Routes>
                <Route exact path='/'
                    element={<Arena mode={mode} choice={choice} score={score}
                        setChoice={setChoice} setScore={setScore} />} />
                <Route path='/hardmode' element={<HardMode />} />
                <Route path='/game' element={<Game choice={choice} score={score} setScore={setScore} />} />
            </Routes>
            {modalOpen && <Modal setModalOpen={setModalOpen} mode={mode} />}
            <div className='btn-container'>
                <button className="mode" onClick={changeMode}>{mode ? "Easy" : "Hard"}</button>
                <button className='rules' onClick={() => setModalOpen(true)}>RULES</button>
            </div>
        </div>
    )
}

export default App;
