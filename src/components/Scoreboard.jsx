import logo from "../assets/images/logo.svg";
import logo_bonus from "../assets/images/logo-bonus.svg";

export default function ScoreBoard({ mode, score }) {
  return (
    <div className="scoreboard">
      <div className="logo">
        {mode ? (
          <img src={logo_bonus} width="100%" alt="bonus logo" />
        ) : (
          <img src={logo} width="100%" alt="logo" />
        )}
      </div>

      <div className="score">
        <h6 className="label">Score</h6>
        <h2 className="value">{score}</h2>
      </div>
    </div>
  );
}
