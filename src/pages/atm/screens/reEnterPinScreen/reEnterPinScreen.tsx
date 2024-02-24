import axios from "axios";
import { AtmOption } from "../../../../components/atmOption/atmOption";
import { useEffect, useState } from "react";
import { BalanceScreenProps } from "../../../../data/interfaces/AtmScreens";
import { useUser } from "../../../../context/UserContext";

import "./reEnterPinScreen.css";

export const ReEnterPinScreen = ({
  setButtons,
  setStep,
}: BalanceScreenProps) => {
  const { user } = useUser();
  const [newPin, setNewPin] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string | null>("");

  const { id } = user?.user;
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
        function: () => handleConfirmPIN(),
      },
    ]);
  }, [newPin]);

  const handleBack = () => {
    setStep(3);
  };

  const handlePINChange = (value: string) => {
    setNewPin((prevPin) => {
      if (prevPin.length < 4) {
        return prevPin + value;
      }
      return prevPin;
    });
  };

  const handleConfirmPIN = () => {
    axios
      .post("http://localhost:5001/atm/re-enter-pin", { id, newPin })
      .then((res: any) => alert(res?.data?.msg))
      .catch((err: any) => {
        setErrorMsg(err?.response?.data?.message);
        setTimeout(() => {
          setErrorMsg(null);
        }, 2500);
      });
  };
  return (
    <>
      <p className="atm-screen-reenter-subtitle">Re-Enter & modify your PIN</p>
      {errorMsg ? (
        <p className="atm-screen-reenter-err-msg ">{errorMsg}</p>
      ) : (
        <p className="atm-screen-reenter-amount">{newPin ? newPin : "0000"}</p>
      )}
      <div className="atm-PIN-btn-wrp">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number, index) => (
          <>
            <button
              className="atm-PIN-btn"
              key={number}
              onClick={() => handlePINChange(number.toString())}
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
        style={"atm-reenter-screen-option-4"}
      />
      <AtmOption
        lineDirection={"right"}
        content={"Change"}
        style={"atm-reenter-screen-option-8 "}
      />
    </>
  );
};
