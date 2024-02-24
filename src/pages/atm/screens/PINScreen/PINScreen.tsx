import axios from "axios";
import { AtmOption } from "../../../../components/atmOption/atmOption";
import { useState, useEffect } from "react";
import { PinScreenProps } from "../../../../data/interfaces/AtmScreens";
import { useUser } from "../../../../context/UserContext";

import "./PINScreen.css";

export const PinScreen: React.FC<PinScreenProps> = ({
  setButtons,
  setStep,
}: PinScreenProps) => {
  const [pin, setPin] = useState("");
  const [errorMsg, setErrorMsg] = useState<string | null>("");
  const { setUser } = useUser();

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
      { id: 4, active: true, name: null, function: () => handleBack() },
      { id: 5, active: false, name: null, function: null },
      { id: 6, active: false, name: null, function: null },
      { id: 7, active: false, name: null, function: null },
      {
        id: 8,
        active: true,
        name: null,
        function: (e: React.MouseEvent<HTMLButtonElement>) =>
          handlePINAccess(e),
      },
    ]);
  }, [pin]);

  const handleBack = () => {
    setStep(1);
  };

  const handlePINAccess = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    axios
      .post("http://localhost:5001/atm/validate-pins", {
        pin,
      })
      .then((res) => {
        setUser(res.data);
        setStep(3);
      })
      .catch((err) => {
        setErrorMsg(err?.response?.data?.message);
        setTimeout(() => {
          setErrorMsg(null);
          setPin("");
        }, 2500);
      });
  };

  const handlePinInputChange = (value: string) => {
    const inputValue = (pin + value).slice(0, 4);
    setPin(inputValue);
  };

  return (
    <>
      <p className="atm-screen-title ">Please insert your PIN</p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ marginTop: "5px" }}>
          {errorMsg ? (
            <p className="atm-PIN-error-msg">{errorMsg}</p>
          ) : (
            <>
              {Array.from({ length: 4 }).map((_, index) => (
                <span className="atm-PIN-input" key={index}>
                  {pin[index] !== undefined ? ` ${pin[index]} ` : " _ "}
                </span>
              ))}
            </>
          )}
        </div>
        <div className="atm-PIN-btn-wrp">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number, index) => (
            <>
              <button
                className="atm-PIN-btn"
                key={number}
                onClick={() => handlePinInputChange(number.toString())}
              >
                {number}
              </button>
              {(index + 1) % 3 === 0 && <br key={`br-${index}`} />}
            </>
          ))}
        </div>
      </div>

      <AtmOption
        lineDirection={"left"}
        content={"Back"}
        style={"atm-PIN-screen-4"}
      />
      <AtmOption
        lineDirection={"right"}
        content={"Accept"}
        style={"atm-PIN-screen-8"}
      />
    </>
  );
};
