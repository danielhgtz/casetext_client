import "./atmOption.css";

export const AtmOption = ({
  lineDirection,
  content,
  style,
}: {
  lineDirection: string;
  content?: string;
  style?: string;
}) => {
  return (
    <div className={`atm-btn-container2  ${style}`}>
      {lineDirection === "left" && <div className="inner-line left-line" />}
      <p>{content}</p>
      {lineDirection === "right" && <div className="inner-line right-line" />}
    </div>
  );
};
