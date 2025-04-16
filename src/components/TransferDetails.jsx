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
    <section className="infoContainer">
      <p className="transferTitle">Enter your transfer details</p>
      <div className="labelInputContainer">
        <label htmlFor="senderCardNumber">Card Number:</label>
        <input
          type="text"
          id="senderCardNumber"
          name="senderCardNumber"
          placeholder="Your Card Number"
          ref={cardInputRef}
          className="detailsInputs"
        />
      </div>
      <div className="labelInputContainer">
        <label htmlFor="recipientCardNumber">Recipient's Card Number:</label>
        <input
          type="text"
          id="recipientCardNumber"
          name="recipientCardNumber"
          placeholder="Recipient's Card Number"
          ref={recipientInputRef}
          className="detailsInputs"
        />
      </div>
      <div className="labelInputContainer">
        <label htmlFor="amount">Amount to Transfer:</label>
        <input
          type="number"
          id="amount"
          name="amount"
          placeholder="Enter Amount"
          ref={amountInputRef}
          className="detailsInputs"
        />
      </div>
      <button onClick={handleClick} className="verifyBtn">
        Verify and Proceed
      </button>
    </section>
  );
};

export default TransferDetails;
