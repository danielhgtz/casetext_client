import { AtmOption } from "../../../../components/atmOption/atmOption";
import { useEffect } from "react";
import { WelcomeScreenProps } from "../../../../data/interfaces/AtmScreens";

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  setButtons,
  setStep,
}) => {
  useEffect(() => {
    setButtons([
      {
        id: 1,
        name: null,
        active: false,
        function: null,
      },
      { id: 2, active: false, name: null, function: null },
      { id: 3, active: false, name: null, function: null },
      { id: 4, active: false, name: null, function: null },
      { id: 5, active: false, name: null, function: null },
      { id: 6, active: false, name: null, function: null },
      { id: 7, active: false, name: null, function: null },
      { id: 8, active: true, name: null, function: () => handlePINAccess() },
    ]);
  }, []);

  const handlePINAccess = () => {
    setStep(2);
  };

  return (
    <>
      <p className="atm-screen-title ">Welcome to the ATM</p>
      <AtmOption
        lineDirection={"right"}
        content={"Enter PIN"}
        style={"atm-welcome-screen-8"}
      />
    </>
  );
};
