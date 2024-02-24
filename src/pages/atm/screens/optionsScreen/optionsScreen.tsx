import { AtmOption } from "../../../../components/atmOption/atmOption";
import { useEffect } from "react";
import { OptionsScreenProps } from "../../../../data/interfaces/AtmScreens";
import { useUser } from "../../../../context/UserContext";
import "./optionsScreen.css";

export const OptionsScreen = ({ setButtons, setStep }: OptionsScreenProps) => {
  const { user, setUser } = useUser();

  const { fullname } = user?.user;
  useEffect(() => {
    setButtons([
      {
        id: 1,
        name: null,
        active: false,
        function: null,
      },
      { id: 2, active: false, name: null, function: null },
      { id: 3, active: true, name: null, function: () => handleWithdraw() },
      { id: 4, active: true, name: null, function: () => handleDeposit() },
      { id: 5, active: false, name: null, function: () => handleDeposit() },
      { id: 6, active: true, name: null, function: () => handleExit() },
      { id: 7, active: true, name: null, function: () => handleBalance() },
      {
        id: 8,
        active: true,
        name: null,
        function: () => handleReEnterPin(),
      },
    ]);
  }, []);

  const handleWithdraw = () => {
    setStep(5);
  };

  const handleDeposit = () => {
    setStep(6);
  };

  const handleExit = () => {
    setStep(1);
    setUser({});
  };

  const handleBalance = () => {
    setStep(4);
  };

  const handleReEnterPin = () => {
    setStep(7);
  };

  return (
    <>
      <p className="atm-screen-options ">
        Hi {fullname}! Please make a choice...
      </p>

      <AtmOption
        lineDirection={"right"}
        content={"Exit"}
        style={"atm-option-screen-6"}
      />
      <AtmOption
        lineDirection={"right"}
        content={"Balance"}
        style={"atm-option-screen-7"}
      />
      <AtmOption
        lineDirection={"right"}
        content={"Re-Enter PIN"}
        style={"atm-option-screen-8"}
      />

      <AtmOption
        lineDirection={"left"}
        content={"Withdraw"}
        style={"atm-option-screen-3"}
      />
      <AtmOption
        lineDirection={"left"}
        content={"Deposit"}
        style={"atm-option-screen-4"}
      />
    </>
  );
};
