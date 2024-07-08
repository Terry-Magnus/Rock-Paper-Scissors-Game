export default function Switch({ handleMode, mode }) {
  return (
    <div className={`switch ${mode ? "switch-on" : ""}`} onClick={handleMode}>
      <div className="switch-handle"></div>
    </div>
  );
}
