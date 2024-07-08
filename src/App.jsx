import { useState } from "react";
import Switch from "./components/Switch";
import ScoreBoard from "./components/Scoreboard";
import Rules from "./components/Rules";
import Game from "./components/Game";

function App() {
  const [bonus, setBonus] = useState(false);
  const [score, setScore] = useState(
    () => parseInt(localStorage.getItem("score")) || 0
  );
  const [rulesOpen, setRulesOpen] = useState(false); // switch between bonus arena and normal

  const changeMode = () => {
    setBonus(!bonus);
  };

  const closeModal = () => {
    setRulesOpen(false);
  };

  return (
    <div className="app">
      <ScoreBoard mode={bonus} score={score} />
      <Game mode={bonus} setScore={setScore} score={score} />
      <div className="footer">
        <div>
          <p className="bonus-info">{bonus ? "Bonus mode" : "Normal"}</p>

          <Switch handleMode={changeMode} mode={bonus} />
        </div>
        <button
          aria-label="button"
          className="rules-trigger"
          onClick={() => setRulesOpen(true)}
        >
          RULES
        </button>
      </div>

      {rulesOpen && <Rules mode={bonus} onClose={closeModal} />}
    </div>
  );
}

export default App;
