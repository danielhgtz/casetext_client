import { useState, useEffect } from "react";
import { useUser } from "../../context/UserContext";
import "./creditCardCompanies.css";

export const CreditCardCompanies = () => {
  const [creditCard, setCreditCard] = useState("");
  const { user } = useUser();

  useEffect(() => {
    if (user && user?.user?.creditCard) {
      setCreditCard(user?.user?.creditCard);
    } else {
      setCreditCard("");
    }
  }, [user]); // Run this effect only when 'user' changes

  return (
    <div className="atm-credit-card-companies-img-wrp ">
      <img
        style={{ opacity: creditCard === "star" ? 1 : 0.5 }}
        src="/src/assets/creditcards/first_creditCard.png"
      />
      <img
        style={{ opacity: creditCard === "pulse" ? 1 : 0.5 }}
        src="/src/assets/creditcards/second_creditCard.png"
      />
      <img
        style={{ opacity: creditCard === "masterCard2" ? 1 : 0.5 }}
        src="/src/assets/creditcards/third_creditCard.png"
      />
      <img
        style={{ opacity: creditCard === "masterCard" ? 1 : 0.5 }}
        src="/src/assets/creditcards/fourth_creditCard.png"
      />
      <img
        style={{ opacity: creditCard === "plus" ? 1 : 0.5 }}
        src="/src/assets/creditcards/fifth_creditCard.png"
      />
      <img
        style={{ opacity: creditCard === "visa" ? 1 : 0.5 }}
        src="/src/assets/creditcards/sixth_creditCard.png"
      />
    </div>
  );
};
