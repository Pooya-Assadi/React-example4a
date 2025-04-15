import React, { useState } from "react";
import Otp from "./Otp";

const PaymentConfirmation = ({
  onChangeStep,
  cardNumber,
  recipientCardNumber,
  transferAmount,
}) => {
  return (
    <>
      <p>Payment Verification</p>
      <label htmlFor="cvv2">Card Security Code (CVV2):</label>
      <input type="number" id="cvv2" name="cvv2" placeholder="Enter CVV2" />
      <label htmlFor="expiryDate">Expiration Date (MM/YY):</label>
      <input type="number" id="expiryDate" name="expiryDate" placeholder="MM" />
      <input type="number" id="expiryDate" name="expiryDate" placeholder="YY" />
      <Otp />
      <p>Card Number: {cardNumber}</p>
      <p>Recipient's Card Number: {recipientCardNumber}</p>
      <p>Transfer Amount: {transferAmount}</p>
      <button onClick={() => onChangeStep("transferDetails")}>
        Previous Step
      </button>
      <button>Transfer Funds</button>
    </>
  );
};

export default PaymentConfirmation;
