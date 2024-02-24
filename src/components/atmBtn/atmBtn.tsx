import "./atmBtn.css";

export const AtmBtn: React.FC<{
  onClickFx?: () => void;
  lineDirection?: any;
  active: any;
}> = ({ onClickFx, lineDirection, active }) => {
  return (
    <div className={`atm-btn-container ${lineDirection}`}>
      {lineDirection === "left" && <div className="line left-line" />}
      <button
        style={active ? { cursor: "pointer" } : {}}
        className="atm-btn"
        onClick={onClickFx}
      ></button>
      {lineDirection === "right" && <div className="line right-line" />}
    </div>
  );
};
