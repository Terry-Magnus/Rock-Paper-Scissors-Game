import rules from "../assets/images/image-rules.svg";
import rules_bonus from "../assets/images/image-rules-bonus.svg";

export default function Rules({ mode, onClose }) {
  return (
    <div className="rules">
      <div className="overlay"></div>
      <div className="modal">
        <div className="modal-header">
          <button className="close-btn" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          {
            <div className="rules-img">
              {mode ? (
                <img src={rules_bonus} width="100%" alt="bonus logo" />
              ) : (
                <img src={rules} width="100%" alt="logo" />
              )}
            </div>
          }
        </div>
      </div>
    </div>
  );
}
