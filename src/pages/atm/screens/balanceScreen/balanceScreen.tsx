import { AtmOption } from "../../../../components/atmOption/atmOption";
import { useEffect } from "react";
import { BalanceScreenProps } from "../../../../data/interfaces/AtmScreens";
import "./balanceScreen.css";
import { formatter } from "../../../../utils/formatter";
import { useUser } from "../../../../context/UserContext";

export const BalanceScreen = ({ setButtons, setStep }: BalanceScreenProps) => {
  const { user } = useUser();

  const { balance } = user?.user;
  useEffect(() => {
    setButtons([
      { id: 1, active: false, name: null, function: null },
      { id: 2, active: false, name: null, function: null },
      { id: 3, active: false, name: null, function: null },
      { id: 4, active: true, name: null, function: () => handleBack() },
      { id: 5, active: false, name: null, function: null },
      { id: 6, active: false, name: null, function: null },
      { id: 7, active: false, name: null, function: null },
      { id: 8, active: false, name: null, function: null },
    ]);
  }, []);

  const handleBack = () => {
    setStep(3);
  };

  return (
    <>
      <p className="atm-screen-balance-subtitle ">Your Balance is:</p>
      <p className="atm-screen-balance-amount ">
        {formatter.format(balance)} USD
      </p>

      <AtmOption
        lineDirection={"left"}
        content={"Back"}
        style={"atm-balance-screen-4"}
      />
    </>
  );
};
