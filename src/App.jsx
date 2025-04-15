import React, { useState } from "react";
import TransferDetails from "./components/TransferDetails";
import PaymentConfirmation from "./components/PaymentConfirmation";

const App = () => {
  const [step, setStep] = useState("transferDetails");
  const [cardNumber, setCardNumber] = useState("");
  const [recipientCardNumber, setRecipientCardNumber] = useState("");
  const [transferAmount, setTransferAmount] = useState("");

  const handleChangeStep = (currentStep, card, recipient, amount) => {
    setStep(currentStep);
    setCardNumber(card);
    setRecipientCardNumber(recipient);
    setTransferAmount(amount);
  };

  return (
    <>
      <div>React Card-to-Card Money Transfer</div>
      {step === "transferDetails" && (
        <TransferDetails onChangeStep={handleChangeStep} />
      )}
      {step === "paymentConfirmation" && (
        <PaymentConfirmation
          onChangeStep={handleChangeStep}
          cardNumber={cardNumber}
          recipientCardNumber={recipientCardNumber}
          transferAmount={transferAmount}
        />
      )}
    </>
  );
};

export default App;
