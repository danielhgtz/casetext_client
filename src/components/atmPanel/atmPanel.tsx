import { AtmBtn } from "../atmBtn/atmBtn";
import "./atmPanel.css";

export const AtmPanel = ({ content, availableBtns }: any) => {
  const leftButtons = availableBtns.slice(0, 4);
  const rightButtons = availableBtns.slice(4, 8);

  return (
    <div className="atm-panel-wrp">
      <div className="atm-panel-btn-column" style={{ marginLeft: "5px" }}>
        {leftButtons.map((item: any) => (
          <AtmBtn
            active={item.active}
            key={item.id}
            lineDirection={"right"}
            onClickFx={item.function}
          />
        ))}
      </div>

      <div className="atm-screen">{content}</div>

      <div className="atm-panel-btn-column" style={{ marginRight: "5px" }}>
        {rightButtons.map((item: any) => (
          <AtmBtn
            active={item.active}
            key={item.id}
            lineDirection={"left"}
            onClickFx={item.function}
          />
        ))}
      </div>
    </div>
  );
};
