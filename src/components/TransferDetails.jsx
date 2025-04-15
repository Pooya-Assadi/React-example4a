import React, { useRef } from "react";

const TransferDetails = ({ onChangeStep }) => {
  const cardInputRef = useRef();
  const recipientInputRef = useRef();
  const amountInputRef = useRef();

  const handleClick = () => {
    onChangeStep(
      "paymentConfirmation",
      cardInputRef.current.value,
      recipientInputRef.current.value,
      amountInputRef.current.value
    );
  };
  return (
    <>
      <p>Enter your transfer details</p>
      <label htmlFor="senderCardNumber">Card Number:</label>
      <input
        type="text"
        id="senderCardNumber"
        name="senderCardNumber"
        placeholder="Your Card Number"
        ref={cardInputRef}
      />
      <label htmlFor="recipientCardNumber">Recipient's Card Number:</label>
      <input
        type="text"
        id="recipientCardNumber"
        name="recipientCardNumber"
        placeholder="Recipient's Card Number"
        ref={recipientInputRef}
      />
      <label htmlFor="amount">Amount to Transfer:</label>
      <input
        type="number"
        id="amount"
        name="amount"
        placeholder="Enter Amount"
        ref={amountInputRef}
      />
      <button onClick={handleClick}>Verify and Proceed</button>
    </>
  );
};

export default TransferDetails;
