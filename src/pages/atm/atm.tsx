import { useState } from "react";
import { AtmPanel } from "../../components/atmPanel/atmPanel";
import { AtmSign } from "../../components/atmSign/atmSign";
import { WelcomeScreen } from "./screens/welcomeScreen/welcomeScreen";
import { PinScreen } from "./screens/PINScreen/PINScreen";
import { OptionsScreen } from "./screens/optionsScreen/optionsScreen";
import { BalanceScreen } from "./screens/balanceScreen/balanceScreen";
import { WithdrawScreen } from "./screens/withdrawScreen/withdrawScreen";
import { DepositScreen } from "./screens/depositScreen/depositScreen";
import "./atm.css";
import { ReEnterPinScreen } from "./screens/reEnterPinScreen/reEnterPinScreen";
import { CreditCardCompanies } from "../../components/creditCardCompanies/creditCardCompanies";

const Atm = () => {
  const [buttons, setButtons] = useState([{}]);
  const [step, setStep] = useState(1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <AtmPanel
            content={
              <WelcomeScreen setButtons={setButtons} setStep={setStep} />
            }
            availableBtns={buttons}
          />
        );
      case 2:
        return (
          <>
            <AtmPanel
              content={<PinScreen setButtons={setButtons} setStep={setStep} />}
              availableBtns={buttons}
            />
          </>
        );
      case 3:
        return (
          <>
            <AtmPanel
              content={
                <OptionsScreen setButtons={setButtons} setStep={setStep} />
              }
              availableBtns={buttons}
            />
          </>
        );

      case 4:
        return (
          <>
            <AtmPanel
              content={
                <BalanceScreen setButtons={setButtons} setStep={setStep} />
              }
              availableBtns={buttons}
            />
          </>
        );

      case 5:
        return (
          <>
            <AtmPanel
              content={
                <WithdrawScreen setButtons={setButtons} setStep={setStep} />
              }
              availableBtns={buttons}
            />
          </>
        );

      case 6:
        return (
          <>
            <AtmPanel
              content={
                <DepositScreen setButtons={setButtons} setStep={setStep} />
              }
              availableBtns={buttons}
            />
          </>
        );
      case 7:
        return (
          <>
            <AtmPanel
              content={
                <ReEnterPinScreen setButtons={setButtons} setStep={setStep} />
              }
              availableBtns={buttons}
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="atm-main-wrp">
      <AtmSign />
      <div className="atm-main-containter">
        <div className="sign-shadow" />

        <div className="atm-credit-card-company-wrp">
          <CreditCardCompanies />
        </div>

        {renderStep()}
        <div className="atm-systems-icon-wrp">
          <img
            src="/src/assets/systems.png"
            alt="systems-icon"
            className="atm-systems-icon "
          />
        </div>
        <img
          src="/src/assets/sticker_graf.png"
          alt="sticker-graf"
          className="atm-sticker-graf"
        />
      </div>
    </div>
  );
};

export default Atm;
