import axios from "axios";
import { AtmOption } from "../../../../components/atmOption/atmOption";
import { useState, useEffect } from "react";
import { DepositScreenProps } from "../../../../data/interfaces/AtmScreens";
import { User } from "../../../../data/interfaces/User";
import { addNumberRightToLeft } from "../../../../utils/numbersFromRightToLeft";
import { formatter } from "../../../../utils/formatter";

import "./depositScreen.css";
import { useUser } from "../../../../context/UserContext";

export const DepositScreen: React.FC<DepositScreenProps> = ({
  setButtons,
  setStep,
}: DepositScreenProps) => {
  const [amount, setAmount] = useState<any>("");
  const [errorMsg, setErrorMsg] = useState<string | null>("");
  const { user, setUser } = useUser();

  const { id, balance } = user?.user;
  useEffect(() => {
    setButtons([
      { id: 1, active: false, name: null, function: null },
      { id: 2, active: false, name: null, function: null },
      { id: 3, active: false, name: null, function: null },
      { id: 4, active: true, name: null, function: () => handleBack() },
      { id: 5, active: false, name: null, function: null },
      { id: 6, active: false, name: null, function: null },
      { id: 7, active: false, name: null, function: null },
      {
        id: 8,
        active: true,
        name: null,
        function: () => handleConfirmDeposit(),
      },
    ]);
  }, [user, amount]);

  const handleBack = () => {
    setStep(3);
  };

  const handleAmountChange = (value: string) => {
    setAmount(addNumberRightToLeft(amount, Number(value)));
  };

  const handleConfirmDeposit = () => {
    axios
      .post("http://localhost:5001/atm/deposit", {
        id,
        amount: parseInt(amount),
      })
      .then((res) => {
        setUser((prevValue: { user: User }) => ({
          ...prevValue,
          user: {
            ...prevValue.user,
            balance: res.data.balance,
          },
        }));
        setStep(3);
      })
      .catch((err) => {
        setErrorMsg(err.response.data.message);
        setTimeout(() => {
          setErrorMsg(null);
        }, 2500);
      });
  };

  return (
    <>
      <p className="atm-screen-deposit-subtitle ">Deposit</p>

      {errorMsg ? (
        <p className="atm-screen-deposit-err-msg">{errorMsg}</p>
      ) : (
        <p className="atm-screen-deposit-subtitle ">
          Balance {formatter.format(balance)} USD
        </p>
      )}
      <p className="atm-screen-deposit-amount ">{formatter.format(amount)}</p>

      <div className="atm-PIN-btn-wrp">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number, index) => (
          <>
            <button
              className="atm-PIN-btn"
              key={number}
              onClick={() => handleAmountChange(number.toString())}
            >
              {number}
            </button>
            {(index + 1) % 3 === 0 && <br key={`br-${index}`} />}
          </>
        ))}
      </div>
      <AtmOption
        lineDirection={"left"}
        content={"Back"}
        style={"atm-deposit-screen-4"}
      />
      <AtmOption
        lineDirection={"right"}
        content={"Accept"}
        style={"atm-deposit-screen-8"}
      />
    </>
  );
};
